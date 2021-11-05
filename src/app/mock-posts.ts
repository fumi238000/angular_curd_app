//仮のデータを定義するファイル

import { Post } from "./post"

export const POSTS: Post[] = [
  {
    id: 1,
    day: "2020/12/31",
    title: "test title1",
    details: "details",
  },
  {
    id: 2,
    day: "2020/12/31",
    title: "test title2",
    details: "details",
  },
  {
    id: 3,
    day: "2020/12/31",
    title: "test title3",
    details: "details",
  },
  {
    id: 4,
    day: "2020/12/31",
    title: "test title4",
    details: "details",
  },
  {
    id: 5,
    day: "2020/12/31",
    title: "test title4",
    details: "details",
  }
]
  
  // day: `${day.getMonth()}月 ${day.getDay()}日 `,