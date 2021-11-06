//仮のデータを定義するファイル

import { Post } from "./post"

export const POSTS: Post[] = [
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
]
  
  // day: `${day.getMonth()}月 ${day.getDay()}日 `,