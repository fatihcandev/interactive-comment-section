import { mockData } from 'data'
import React from 'react'
import styled from 'styled-components'

import { Comment } from 'types'
import { Actions } from './Actions'
import { Info } from './Info'

export type CommentProps = {
  comment: Comment
}

const CommentComponent: React.FunctionComponent<CommentProps> = ({
  comment,
}) => {
  const { user, createdAt } = comment
  const isCurrentUser = mockData.currentUser.username === comment.user.username
  return (
    <Container>
      <Header>
        <Info user={user} createdAt={createdAt} />
        <Actions isCurrentUser={isCurrentUser} />
      </Header>
    </Container>
  )
}

export { CommentComponent as Comment }

const Container = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
`
