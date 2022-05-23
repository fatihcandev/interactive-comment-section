import type { NextRouter } from 'next/router'

let mock: jest.SpyInstance<Partial<NextRouter>>

export const mockNextRouter = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nextRouter = require('next/router')
  mock = jest.spyOn(nextRouter, 'useRouter')
  mock.mockReturnValue({
    push: jest.fn(),
    prefetch: jest.fn(),
  })
}

export const clearMockNextRouter = () => {
  mock.mockClear()
}
