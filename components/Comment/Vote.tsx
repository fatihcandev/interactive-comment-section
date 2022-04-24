import React from 'react'
import styled from 'styled-components'

import { Minus, Plus } from 'components/icons'
import { IconButton } from 'components/IconButton'

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
  gap: 4px;
  background-color: ${props => props.theme.colors.veryLightGray};
  border-radius: 8px;
  color: ${props => props.theme.colors.moderateBlue};
`

const VoteButton = styled(IconButton)`
  transition: color 0.25s ease;
  position: relative;
  left: 2px;
  padding: 12px;

  &:hover {
    color: ${props => props.theme.colors.moderateBlue};
  }
`
