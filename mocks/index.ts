import { initialComment } from '@/components/NewComment'
import { Comment } from '@/types'

export const comment: Comment = {
  ...initialComment,
  content: 'test comment',
}
