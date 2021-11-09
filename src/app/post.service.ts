import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mock-posts';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'api/posts';

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
  }

  //idを渡すと、そのidを持つ投稿データを１つ返す関数
  getPost(id: number): Observable<Post | undefined> {
    return of(POSTS.find(post => post.id === id));
  }
}
