import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Location } from '@angular/common';
import { Post } from '../post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private PostService: PostService,
    private location: Location
  ) { }

  ngOnInit(): void {
    //読み込まれたときに実行する
    this.getPost();
  }

  getPost(): void {
    //urlで取得しているidをidに格納
    const id = +this.route.snapshot.paramMap.get('id');
    //Serviceに定義している「idを渡すとそのidのデータを返す関数」を使用して、データを取得
    this.PostService.getPost(id).subscribe(post => this.post = post)
  }

  //ボタン
  goBack(): void {
    this.location.back()
  }

}
