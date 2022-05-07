import { Comment } from '@/types'
import { getComments } from '../getComments'

export function sendNewComment(comment: Comment) {
  const comments = getComments()
  const updatedComments = [...comments, comment]
  try {
    localStorage.setItem('comments', JSON.stringify(updatedComments))
  } catch (error) {
    throw new Error(`Error saving comment: ${error}`)
  }
}
