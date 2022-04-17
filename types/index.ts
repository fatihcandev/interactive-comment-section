export type User = {
  image: {
    png: string
    webp: string
  }
  username: string
}

export type CommentType = {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
  replies: Reply[]
}

export interface Reply extends CommentType {
  replyingTo: string
}
