import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mock-posts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }

  //idを渡すと、そのidを持つ投稿データを１つ返す関数
  getPost(id: number): Observable<Post | undefined> {
    return of(POSTS.find(post => post.id === id));
  }
}
