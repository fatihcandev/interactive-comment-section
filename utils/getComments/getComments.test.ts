import { mockComment } from '@/mocks'
import { getComments } from './getComments'

describe('getComments', () => {
  it('should return an array of comments', () => {
    localStorage.setItem('comments', JSON.stringify([mockComment]))
    const comments = getComments()
    expect(comments).toHaveLength(1)
    expect(comments[0].id).toEqual(mockComment.id)
    localStorage.removeItem('comments')
  })

  it('should return an empty array if no comments are found in storage', () => {
    const comments = getComments()
    expect(comments).toHaveLength(0)
  })
})
