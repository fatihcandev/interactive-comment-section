import React from 'react'
import styled from 'styled-components'
import { getMediaQuery } from 'utils'

type ContentProps = {
  content: string
}

export const Content: React.FC<ContentProps> = ({ content }) => {
  return <Container>{content}</Container>
}

const Container = styled.p`
  color: ${props => props.theme.colors.grayishBlue};
  line-height: 24px;

  grid-column: 2 / 4;
  grid-row: 2 / 3;

  ${getMediaQuery({
    breakpoint: 'md',
    minMax: 'max',
    styles: `
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    `,
  })}
`
