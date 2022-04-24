import React from 'react'
import styled from 'styled-components'

import { mockData } from 'data'
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
  const isCurrentUser = mockData.currentUser.username === user.username
  return (
    <Container>
      <Header>
        <Info user={user} createdAt={createdAt} isCurrentUser={isCurrentUser} />
        <Actions isCurrentUser={isCurrentUser} />
      </Header>
    </Container>
  )
}

export { CommentComponent as Comment }

const Container = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 8px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
`
