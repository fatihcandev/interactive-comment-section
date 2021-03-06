import { css, DefaultTheme } from 'styled-components'

import { getMediaQuery } from '@/utils'

export const theme: DefaultTheme = {
  colors: {
    moderateBlue: '#5457b6',
    softRed: '#ed6468',
    lightGrayishBlue: '#c3c4ef',
    paleRed: '#ffb8bb',
    darkBlue: '#324152',
    grayishBlue: '#67727e',
    lightGray: '#eaecf1',
    veryLightGray: '#f5f6fa',
    white: '#ffffff',
  },
  hoverStyle: css`
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.4;
    }
  `,
  baseCommentStyle: css`
    padding: 24px;
    background-color: white;
    border-radius: 8px;

    ${getMediaQuery({
      breakpoint: 'md',
      minMax: 'max',
      styles: `
        padding: 16px;
    `,
    })}
  `,
}
