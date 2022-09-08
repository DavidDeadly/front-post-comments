export interface Post {
  title: string,
  author: string
}

export interface PostDB extends Post {
  id: string,
  postID: string,
  comments: Array<CommentDB>
}

export interface CommentDB {
  postID: string,
  commentID: string,
  author: string,
  content: string
}