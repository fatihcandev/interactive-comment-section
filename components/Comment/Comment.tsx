import React from 'react'
import styled from 'styled-components'

import { Comment } from '@/types'
import { Actions } from './Actions'
import { Info } from './Info'
import { Vote } from './Vote'
import { Content } from './Content'
import { getMediaQuery } from '@/utils'

export type CommentProps = {
  comment: Comment
}

const CommentComponent: React.FC<CommentProps> = ({ comment }) => {
  const { user, createdAt } = comment
  // todo: make check from backend
  const isCurrentUser = true

  function handleDelete(commentId: string) {
    console.log('clicked on delete', commentId)
  }

  function handleEdit() {
    console.log('clicked on edit')
  }

  function handleReply(commentId: string, replyingTo: string) {
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
  ${props => props.theme.baseCommentStyle}
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr;
  align-items: center;
  column-gap: 24px;

  ${getMediaQuery({
    breakpoint: 'md',
    minMax: 'max',
    styles: `
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      column-gap: 20px;
    `,
  })}
`
