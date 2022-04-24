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

type MediaBreakpointFuncArgs = {
  breakpoint: keyof Breakpoints
  styles: string
  min?: boolean
}

export function mediaBreakpoint({
  breakpoint,
  min = false,
  styles,
}: MediaBreakpointFuncArgs): FlattenSimpleInterpolation {
  const minMax = min ? 'min' : 'max'

  return css`
    @media screen and (${minMax}-width: ${breakpoints[breakpoint]}px) {
      ${styles}
    }
  `
}
