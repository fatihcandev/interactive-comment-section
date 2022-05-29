import { Comment } from '@/types'

export const mockComment: Comment = {
  id: new Date().getTime().toString(),
  created_at: new Date().toISOString(),
  score: 0,
  user_id: '1',
  replies: [],
  content: 'test comment',
}
