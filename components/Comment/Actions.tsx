import React from 'react'
import styled from 'styled-components'

type ActionsProps = {
  isCurrentUser: boolean
}

export const Actions: React.FunctionComponent<ActionsProps> = ({
  isCurrentUser,
}) => {
  return <Container>{isCurrentUser ? 'Delete Edit' : 'Reply'}</Container>
}

const Container = styled.div`
  margin-left: auto;
`
