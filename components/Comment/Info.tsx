import React from 'react'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'

import { Avatar } from 'components'
import { User } from '@/types'
import { getMediaQuery } from '@/utils'

type InfoProps = {
  user: User
  createdAt: Date
  isCurrentUser: boolean
}

export const Info: React.FC<InfoProps> = ({
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
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  ${getMediaQuery({
    breakpoint: 'md',
    minMax: 'max',
    styles: `
      grid-column: 1 / 3;
    `,
  })}
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
