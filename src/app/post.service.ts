import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of, pipe } from 'rxjs';
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

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, this.httpOptions)
    .pipe(
        tap(_ => console.log(`投稿を作成しました`)),
        catchError(this.handleError<any>('addPost')) //型を入れていないせいで、1日食った・・。
      );
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, this.httpOptions)
      .pipe(
        tap(_ => console.log(`投稿データを更新しました`)),
        catchError(this.handleError<any>('updatePost'))
      )
  }

  deletePost(post: Post | number): Observable<any> {
    const id = typeof post === 'number' ? post : post.id;
    const url = "${this.postsUrl/${id}"
    return this.http.delete<Post>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`投稿を削除しました`)),
        catchError(this.handleError<Post>(`deletePost`))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      return of(result as T)
    }
  }
}
