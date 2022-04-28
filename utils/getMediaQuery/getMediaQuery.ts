import { css, FlattenSimpleInterpolation } from 'styled-components'

type Breakpoints = {
  sm: number
  md: number
  lg: number
  xl: number
}

const breakpoints: Breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

type GetMediaQueryFuncArgs = {
  breakpoint: keyof Breakpoints
  styles: string
  min?: boolean
}

export function getMediaQuery({
  breakpoint,
  min = false,
  styles,
}: GetMediaQueryFuncArgs): FlattenSimpleInterpolation {
  const minMax = min ? 'min' : 'max'
  const breakpointValue = min
    ? breakpoints[breakpoint]
    : breakpoints[breakpoint] - 1

  return css`
    @media screen and (${minMax}-width: ${breakpointValue}px) {
      ${styles}
    }
  `
}
