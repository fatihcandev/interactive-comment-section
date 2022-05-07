import { comment } from '@/mocks'
import { getComments } from '../getComments'
import { sendNewComment } from './sendNewComment'

describe('sendNewComment', () => {
  it('should save the given comment', () => {
    sendNewComment(comment)
    const comments = getComments()
    expect(comments).toHaveLength(1)
    expect(comments[0].id).toEqual(comment.id)
    localStorage.removeItem('comments')
  })
})
