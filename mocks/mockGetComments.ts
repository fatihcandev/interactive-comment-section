import { getComments } from '@/utils'

// take the functions we're mocking and add the jest mock properties
// to them so that everything will type-check properly
export const mockGetComments = getComments as jest.MockedFunction<
  typeof getComments
>
