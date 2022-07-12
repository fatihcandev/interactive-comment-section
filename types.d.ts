export type User = {
  id: string
  avatarUrl?: string
  username: string
  email: string
}

export type Comment = {
  id: string
  content: string
  createdAt: string
  score: number | null
  user: User
  isCurrentUser: boolean
  replies: Reply[]
}

export type CommentPayload = {
  content: string
  user: User
}

export interface Reply extends Comment {
  replyingTo: string
}
