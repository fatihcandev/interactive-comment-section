import { Comment } from '@/types'

export const mockComment: Comment = {
  id: new Date().getTime().toString(),
  createdAt: new Date().toISOString(),
  score: 0,
  user: {
    id: '1',
    avatarUrl: '/images/image-amyrobson.png',
    username: 'amyrobson',
    email: 'amyrobson@gmail.com',
  },
  replies: [],
  content: 'test comment',
}
