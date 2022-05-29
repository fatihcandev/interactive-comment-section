import { mockComment, mockGetComments } from '@/mocks'

jest.mock('@/utils')

describe('getComments', () => {
  it('should return an array of comments', async () => {
    mockGetComments.mockResolvedValue([mockComment])
    const comments = await mockGetComments()
    expect(comments).toHaveLength(1)
  })

  it('should return an empty array if there is no comments', async () => {
    mockGetComments.mockResolvedValue([])
    const comments = await mockGetComments()
    expect(comments).toHaveLength(0)
  })
})
