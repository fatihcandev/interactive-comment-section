import React from 'react'
import styled from 'styled-components'

import { mockData } from 'data'
import { Comment } from 'types'
import { Actions } from './Actions'
import { Info } from './Info'
import { Vote } from './Vote'
import { Content } from './Content'
import { getMediaQuery } from 'utils'

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

  function handleUpvote() {
    console.log('clicked on upvote')
  }

  function handleDownvote() {
    console.log('clicked on downvote')
  }

  return (
    <Container>
      <Vote
        score={comment.score}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
      <Info user={user} createdAt={createdAt} isCurrentUser={isCurrentUser} />
      <Actions
        comment={comment}
        isCurrentUser={isCurrentUser}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onReply={handleReply}
      />
      <Content content={comment.content} />
    </Container>
  )
}

export { CommentComponent as Comment }

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr;
  align-items: center;
  column-gap: 24px;
  padding: 24px;
  background-color: white;
  border-radius: 8px;

  ${getMediaQuery({
    breakpoint: 'md',
    styles: `
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      padding: 16px;
      column-gap: 20px;
    `,
  })}
`
