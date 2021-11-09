import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mock-posts';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap }from 'rxjs/operators'

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
      .pipe(
        tap(posts => console.log(`投稿作成しました`)),
        catchError(this.handleError<Post[]>('getPosts',[]))
      )
  }

  //idを渡すと、そのidを持つ投稿データを１つ返す関数
  getPost(id: number): Observable<Post | undefined> {
    return of(POSTS.find(post => post.id === id));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      return of(result as T)
    }
  }
}
