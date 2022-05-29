import { mockComment, mockSendNewComment } from '@/mocks'

jest.mock('@/utils')

describe('sendNewComment', () => {
  it('should save the given comment', async () => {
    mockSendNewComment.mockResolvedValue({
      addedComment: mockComment,
    })
    const { addedComment } = await mockSendNewComment(mockComment)
    expect(addedComment).not.toBeNull()
    expect(mockSendNewComment).toHaveBeenCalledTimes(1)
    expect(mockSendNewComment).toHaveBeenCalledWith(mockComment)
  })
})
