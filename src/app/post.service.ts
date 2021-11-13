import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mock-posts';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap }from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'api/posts';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  //全ての投稿データを取得する関数
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        tap(posts => console.log(`投稿データを取得しました`)),
        catchError(this.handleError<Post[]>('getPosts',[]))
      )
  }

  //idを渡すと、そのidを持つ投稿データを１つ返す関数
  getPost(id: number): Observable<Post | undefined> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url)
      .pipe(
        tap(posts => console.log(`投稿データを取得しました`)),
        catchError(this.handleError<Post>(`getPost id={id}`))
      );
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, this.httpOptions)
      .pipe(
        tap(_ => console.log(`投稿データを更新しました`)),
        catchError(this.handleError<any>('updatePost'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      return of(result as T)
    }
  }
}
