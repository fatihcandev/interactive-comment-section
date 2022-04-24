import React from 'react'
import styled from 'styled-components'

import { Minus, Plus } from 'components/icons'
import { IconButton } from 'components/IconButton'
import { mediaBreakpoint } from 'utils'

type VoteProps = {
  score: number
  onUpvote: () => void
  onDownvote: () => void
  className?: string
}

export const Vote: React.FC<VoteProps> = ({
  score,
  onUpvote,
  onDownvote,
  className,
}) => {
  return (
    <Container className={className}>
      <VoteButton icon={<Plus />} color="lightGrayishBlue" onClick={onUpvote} />
      {score}
      <VoteButton
        icon={<Minus />}
        color="lightGrayishBlue"
        onClick={onDownvote}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  align-self: flex-start;
  padding: 16px 12px;
  background-color: ${props => props.theme.colors.veryLightGray};
  border-radius: 8px;
  font-weight: 500;
  color: ${props => props.theme.colors.moderateBlue};
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  ${mediaBreakpoint({
    breakpoint: 'md',
    styles: `
      grid-row: 3 / 4;
      flex-direction: row;
      justify-content: center;
      padding: 12px;
    `,
  })}
`

const VoteButton = styled(IconButton)`
  transition: color 0.25s ease;

  &:hover {
    color: ${props => props.theme.colors.moderateBlue};
  }
`
