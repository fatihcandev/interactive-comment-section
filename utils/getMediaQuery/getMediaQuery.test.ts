import { describe, expect } from 'vitest'
import { css, FlattenSimpleInterpolation } from 'styled-components'

import { getMediaQuery } from './getMediaQuery'

type AssertMediaQueryArgs = {
  query: FlattenSimpleInterpolation
  minMax: string
  breakpointValue: number
  styles: string
}

function assertMediaQuery({
  query,
  minMax,
  breakpointValue,
  styles,
}: AssertMediaQueryArgs) {
  expect(query).toEqual(css`
    @media screen and (${minMax}-width: ${breakpointValue}px) {
      ${styles}
    }
  `)
}

describe('getMediaQuery', () => {
  const styles = 'flex-direction: column;'
  let query: FlattenSimpleInterpolation
  it('should return the right media query for the given breakpoint', () => {
    // sm
    query = getMediaQuery({
      breakpoint: 'sm',
      minMax: 'max',
      styles,
    })
    assertMediaQuery({
      query,
      minMax: 'max',
      breakpointValue: 575,
      styles,
    })

    query = getMediaQuery({
      breakpoint: 'sm',
      styles,
    })
    assertMediaQuery({
      query,
      minMax: 'min',
      breakpointValue: 576,
      styles,
    })

    // md

    query = getMediaQuery({
      breakpoint: 'md',
      minMax: 'max',
      styles,
    })
    assertMediaQuery({
      query,
      minMax: 'max',
      breakpointValue: 767,
      styles,
    })

    query = getMediaQuery({
      breakpoint: 'md',
      styles,
    })
    assertMediaQuery({
      query,
      minMax: 'min',
      breakpointValue: 768,
      styles,
    })

    // lg

    query = getMediaQuery({
      breakpoint: 'lg',
      minMax: 'max',
      styles,
    })
    assertMediaQuery({
      query,
      minMax: 'max',
      breakpointValue: 991,
      styles,
    })

    query = getMediaQuery({
      breakpoint: 'lg',
      styles,
    })
    assertMediaQuery({
      query,
      minMax: 'min',
      breakpointValue: 992,
      styles,
    })

    // xl

    query = getMediaQuery({
      breakpoint: 'xl',
      minMax: 'max',
      styles,
    })
    assertMediaQuery({
      query,
      minMax: 'max',
      breakpointValue: 1199,
      styles,
    })

    query = getMediaQuery({
      breakpoint: 'xl',
      styles,
    })
    assertMediaQuery({
      query,
      minMax: 'min',
      breakpointValue: 1200,
      styles,
    })
  })
})
