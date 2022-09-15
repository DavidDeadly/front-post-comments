export interface Post {
  title: string,
  author: string
}

export interface Comment {
  postID: string,
  author: string,
  content: string
}

export interface PostDB extends Post {
  id: string,
  postID: string,
  comments: Array<CommentDB>
}

export interface CommentDB extends Comment {
  commentID: string,
}