import React from 'react'
import styled from 'styled-components'

import { Comment } from 'types'
import { Header } from './Header'

type CommentProps = {
  comment: Comment
}

const CommentComponent: React.FunctionComponent<CommentProps> = ({
  comment,
}) => {
  return (
    <Container>
      <Header user={comment.user} createdAt={comment.createdAt} />
    </Container>
  )
}

export { CommentComponent as Comment }

// create a styled component named Container p 16px bg white
const Container = styled.div`
  padding: 16px;
  background-color: white;
`
