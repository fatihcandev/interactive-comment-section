import { getComments } from '../getComments'
import { sendNewComment } from '../sendNewComment'
import { sendReply } from './sendReply'
import { comment } from '@/mocks'
import { Reply } from '@/types'

describe('sendReply', () => {
  it('should save the given reply', () => {
    const replyingTo = comment.user.username
    const reply: Reply = {
      ...comment,
      content: 'test reply',
      user: {
        username: 'test reply user',
      },
      replyingTo,
    }
    sendNewComment(comment)
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
