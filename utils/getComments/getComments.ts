import { Comment } from '@/types'

export function getComments(): Comment[] {
  try {
    const comments = localStorage.getItem('comments')
    if (!comments) return []

    return JSON.parse(comments)
  } catch (error) {
    throw new Error(`Error getting comments: ${error}`)
  }
}
