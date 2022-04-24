import React from 'react'
import styled from 'styled-components'

import { mockData } from 'data'
import { Comment } from 'types'
import { Actions } from './Actions'
import { Info } from './Info'

export type CommentProps = {
  comment: Comment
}

const CommentComponent: React.FC<CommentProps> = ({ comment }) => {
  const { user, createdAt } = comment
  const isCurrentUser = mockData.currentUser.username === user.username

  function handleDelete(commentId: number) {
    console.log('clicked on delete', commentId)
  }

  function handleEdit() {
    console.log('clicked on edit')
  }

  function handleReply(commentId: number, replyingTo: string) {
    console.log('clicked on reply', commentId, replyingTo)
  }

  return (
    <Container>
      <Header>
        <Info user={user} createdAt={createdAt} isCurrentUser={isCurrentUser} />
        <Actions
          comment={comment}
          isCurrentUser={isCurrentUser}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
        />
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
