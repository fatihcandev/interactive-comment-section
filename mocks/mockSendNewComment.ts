import { sendNewComment } from '@/utils'

// take the functions we're mocking and add the jest mock properties
// to them so that everything will type-check properly
export const mockSendNewComment = sendNewComment as jest.MockedFunction<
  typeof sendNewComment
>
