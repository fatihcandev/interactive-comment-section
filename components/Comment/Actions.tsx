import React from 'react'
import styled from 'styled-components'

import { IconButton } from 'components'
import { Delete, Edit, Reply } from 'components/icons'

type ActionsProps = {
  isCurrentUser: boolean
}

export const Actions: React.FunctionComponent<ActionsProps> = ({
  isCurrentUser,
}) => {
  return (
    <Container>
      {isCurrentUser ? (
        <DeleteEditActionContainer>
          <StyledIconButton
            icon={<Delete />}
            label="Delete"
            color="softRed"
            onClick={() => console.log('clicked on delete')}
          />
          <StyledIconButton
            icon={<Edit />}
            label="Edit"
            onClick={() => console.log('clicked on edit')}
          />
        </DeleteEditActionContainer>
      ) : (
        <StyledIconButton
          icon={<Reply />}
          label="Reply"
          onClick={() => console.log('clicked on reply')}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  margin-left: auto;
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
