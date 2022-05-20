import { mockComment } from '@/mocks'
import { getComments } from '../getComments'
import { sendNewComment } from './sendNewComment'

describe('sendNewComment', () => {
  it('should save the given comment', () => {
    sendNewComment(mockComment)
    const comments = getComments()
    expect(comments).toHaveLength(1)
    expect(comments[0].id).toEqual(mockComment.id)
    localStorage.removeItem('comments')
  })
})
