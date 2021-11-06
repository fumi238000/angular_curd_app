import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private PostService: PostService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back()
  }

  // getPost(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.postService.getMember(id).subscribe(post => this.post = post)
  // }

}
