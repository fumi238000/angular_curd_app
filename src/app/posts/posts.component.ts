import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: Post[] | undefined

  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.PostService.getPosts()
      .subscribe(posts => this.posts = posts)
  }

  add(title: string, details: string): void {
    //空白を削除
    title = title.trim()
    details = details.trim()
    if (!title || !details) { return; } //データがない場合は作成できない
      const day: string = "2020/12/31"
      const post = { day, title, details }
      this.PostService.addPost(post).subscribe(post => {
        this.posts.push(post)
      })
  }

  delete(post: Post): void {
    this.posts = this.posts.filter(p => p !== post) //削除対象の投稿を配列postsから取り除く
    this.PostService.deletePost(post).subscribe();
  }
}
