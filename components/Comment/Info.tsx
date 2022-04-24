import React from 'react'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'

import { User } from 'types'

type InfoProps = {
  user: User
  createdAt: Date
  isCurrentUser: boolean
}

export const Info: React.FunctionComponent<InfoProps> = ({
  user,
  createdAt,
  isCurrentUser,
}) => {
  return (
    <Container>
      <Avatar src={user.image} alt={user.username} />
      <UsernameContainer>
        <Username>{user.username}</Username>
        {isCurrentUser && <YouBadge>you</YouBadge>}
      </UsernameContainer>
      <StyledTimeAgo date={createdAt} live={false} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`

const UsernameContainer = styled.div`
  display: flex;
  align-items: center;
`

const Username = styled.span`
  font-weight: 500;
`

const YouBadge = styled.span`
  margin-left: 8px;
  padding: 3px 6px;
  font-size: 13px;
  color: white;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.moderateBlue};
`

const StyledTimeAgo = styled(TimeAgo)`
  color: ${props => props.theme.colors.grayishBlue};
`
