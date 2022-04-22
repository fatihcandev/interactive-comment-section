export type User = {
  image: {
    png: string
    webp: string
  }
  username: string
}

export type Comment = {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
  replies: Reply[]
  actions: {
    reply: () => void
    delete: () => void
    edit: () => void
  }
}

export interface Reply extends Comment {
  replyingTo: string
}
