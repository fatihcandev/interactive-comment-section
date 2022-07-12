import React from 'react'
import styled from 'styled-components'

import { Actions } from './Actions'
import { Info } from './Info'
import { Vote } from './Vote'
import { Content } from './Content'
import { Comment as CommentType } from '@/types'
import { getMediaQuery } from '@/utils'

export type CommentProps = {
  comment: CommentType
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
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
      <Actions
        commentId={comment.id}
        commentUsername={comment.user.username}
        isCurrentUser={comment.isCurrentUser}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onReply={handleReply}
      />
      <Info
        user={comment.user}
        createdAt={comment.createdAt}
        isCurrentUser={comment.isCurrentUser}
      />
      <Content content={comment.content} />
    </Container>
  )
}

export { Comment }

const Container = styled.div`
  ${props => props.theme.baseCommentStyle}
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr;
  align-items: center;
  column-gap: 24px;
  height: max-content;
  width: 100%;

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
