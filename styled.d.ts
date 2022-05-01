import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      moderateBlue: string
      softRed: string
      lightGrayishBlue: string
      paleRed: string
      darkBlue: string
      grayishBlue: string
      lightGray: string
      veryLightGray: string
      white: string
    }
    hoverStyle: FlattenSimpleInterpolation
    baseCommentStyle: FlattenSimpleInterpolation
  }
}
