import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const posts = [
      {
        id: 1,
        day: "2020/12/31",
        title: "コロナウイルス",
        details: "最近おとなしい",
      },
      {
        id: 2,
        day: "2020/12/31",
        title: "原監督",
        details: "details",
      },
      {
        id: 3,
        day: "2020/12/31",
        title: "コンビニ飯",
        details: "details",
      },
      {
        id: 4,
        day: "2020/12/31",
        title: "鈴木誠也",
        details: "details",
      },
      {
        id: 5,
        day: "2020/12/31",
        title: "シャビ",
        details: "details",
      }
    ];

    return { posts }
  }

  //IDを付与するメソッド
  genId(posts: Post[]): number {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
  }
}
