export type User = {
  id: string
  avatar_url?: string
  username: string
  email: string
}

export type Comment = {
  id: string
  content: string
  createdAt: Date
  score: number
  user: User
  replies: Reply[]
  actions?: {
    reply: () => void
    delete: () => void
    edit: () => void
  }
}

export interface Reply extends Comment {
  replyingTo: string
}
