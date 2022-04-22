import React from 'react'

import { type Comment } from 'types'

import * as Styles from './style'

type CommentProps = {
  // for now, we're just using the comment's content
  comment: Partial<Comment>
}

const CommentComponent: React.FunctionComponent<CommentProps> = ({
  comment,
}) => {
  return <Styles.Container>{comment.content}</Styles.Container>
}

export { CommentComponent as Comment }
