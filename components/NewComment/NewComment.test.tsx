import { NewComment } from './NewComment'
import { comment } from '@/mocks'
import { Comment } from '@/types'
import { getComments } from '@/utils'
import { render, screen, userEvent } from '@/utils/test-utils'

describe('new comment tests', () => {
  it('should save a new comment when the send button is clicked', async () => {
    render(<NewComment />)
    const sendNewCommentMock = jest.fn<void, [Comment]>()
    const input = screen.getByPlaceholderText('Add a comment...')
    expect(input).toBeInTheDocument()
    const button = screen.getByText('send')
    expect(button).toBeInTheDocument()
    await userEvent.type(input, 'test comment')
    await userEvent.click(button)
    expect(sendNewCommentMock).toHaveBeenCalled()
    expect(sendNewCommentMock).toHaveBeenCalledWith(comment)
    const comments = getComments()
    expect(comments).toHaveLength(1)
    expect(comments[0].content).toBe('test comment')
  })
  // it('should show the username of the user being replied in the input if replyingTo has a value', () => {})
  // it('the label of the submit button should be reply if replyingTo has a value', () => {})
  // it('should save a new reply when the reply button is clicked', () => {})
})
