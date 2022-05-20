import { Comment } from '@/types'

export const mockComment: Comment = {
  id: new Date().getTime().toString(),
  createdAt: new Date(),
  score: 0,
  user: {
    id: '1',
    email: 'fatih@gmail.com',
    username: 'fatih',
  },
  replies: [],
  content: 'test comment',
}
