import { getComments } from '../getComments'
import { Reply } from '@/types'

type SendReplyFuncArgs = {
  replyingTo: string
  reply: Reply
}

export function sendReply({ replyingTo, reply }: SendReplyFuncArgs) {
  try {
    const comments = getComments()
    const commentBeingReplied = comments.find(
      c => c.user.username === replyingTo
    )
    if (!commentBeingReplied) {
      throw new Error("Comment you're trying to reply doesn't exist")
    }
    commentBeingReplied.replies.push(reply)
    comments.splice(
      comments.indexOf(commentBeingReplied),
      1,
      commentBeingReplied
    )
    localStorage.setItem('comments', JSON.stringify(comments))
  } catch (error) {
    throw new Error(`Error sending reply: ${error}`)
  }
}
