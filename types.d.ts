export type User = {
  id: string
  avatar_url?: string
  username: string
  email: string
}

export type Comment = {
  id: string
  content: string
  created_at: string
  score: number | null
  user_id: string
  replies: Reply[]
}

export type CommentPayload = {
  content: string
  user_id?: string
}

export interface Reply extends Comment {
  replyingTo: string
}
