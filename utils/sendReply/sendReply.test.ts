import { getComments } from '../getComments'
import { sendNewComment } from '../sendNewComment'
import { sendReply } from './sendReply'
import { mockComment } from '@/mocks'
import { Reply } from '@/types'

describe('sendReply', () => {
  it('should save the given reply', () => {
    const replyingTo = mockComment.user.username
    const reply: Reply = {
      ...mockComment,
      content: 'test reply',
      replyingTo,
    }
    sendNewComment(mockComment)
    sendReply({
      reply,
      replyingTo,
    })
    const comments = getComments()
    expect(comments[0].replies).toHaveLength(1)
    expect(comments[0].replies[0].id).toEqual(reply.id)
    localStorage.removeItem('comments')
  })
})
