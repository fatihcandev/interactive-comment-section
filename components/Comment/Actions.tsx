import React from 'react'
import styled from 'styled-components'

import { IconButton } from 'components'
import { Delete, Edit, Reply } from 'components/icons'
import { Comment } from 'types'
import { mediaBreakpoint } from 'utils'

type ActionsProps = {
  comment: Comment
  isCurrentUser: boolean
  onDelete: (commentId: number) => void
  onEdit: () => void
  onReply: (commentId: number, replyingTo: string) => void
}

export const Actions: React.FC<ActionsProps> = ({
  comment,
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
            onClick={() => onDelete(comment.id)}
          />
          <StyledIconButton icon={<Edit />} label="Edit" onClick={onEdit} />
        </DeleteEditActionContainer>
      ) : (
        <StyledIconButton
          icon={<Reply />}
          label="Reply"
          onClick={() => onReply(comment.id, comment.user.username)}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  margin-left: auto;
  grid-column: 3 / 4;
  grid-row: 1 / 2;

  ${mediaBreakpoint({
    breakpoint: 'md',
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
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.4;
  }
`
