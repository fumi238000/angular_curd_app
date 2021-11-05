import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  day = new Date()
  posts = {
    day: `${this.day.getMonth()}月 ${this.day.getDay()}日 `,
    title: "test title",
    details: "details",
   }

  constructor() { }

  ngOnInit(): void {
  }

}
