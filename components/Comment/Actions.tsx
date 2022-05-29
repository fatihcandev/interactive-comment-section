import React from 'react'
import styled from 'styled-components'

import { IconButton } from '@/components/IconButton'
import { Delete, Edit, Reply } from 'components/icons'
import { getMediaQuery } from '@/utils'

type ActionsProps = {
  commentId: string
  commentUsername: string
  isCurrentUser: boolean
  onDelete: (commentId: string) => void
  onEdit: () => void
  onReply: (commentId: string, replyingTo: string) => void
}

export const Actions: React.FC<ActionsProps> = ({
  commentId,
  commentUsername,
  isCurrentUser,
  onDelete,
  onEdit,
  onReply,
}) => {
  return (
    <Container>
      {isCurrentUser ? (
        <DeleteEditActionContainer>
          <StyledIconButton
            icon={<Delete />}
            label="Delete"
            color="softRed"
            onClick={() => onDelete(commentId)}
          />
          <StyledIconButton icon={<Edit />} label="Edit" onClick={onEdit} />
        </DeleteEditActionContainer>
      ) : (
        <StyledIconButton
          icon={<Reply />}
          label="Reply"
          onClick={() => onReply(commentId, commentUsername)}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  margin-left: auto;
  grid-column: 3 / 4;
  grid-row: 1 / 2;

  ${getMediaQuery({
    breakpoint: 'md',
    minMax: 'max',
    styles: `
      grid-column: 2 / 3;
      grid-row: 3 / 4;
    `,
  })}
`

const DeleteEditActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const StyledIconButton = styled(IconButton)`
  ${props => props.theme.hoverStyle}
`
