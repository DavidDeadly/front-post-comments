export interface Post {
  title: string,
  author: string
}

export interface PostDB extends Post {
  id: string
}