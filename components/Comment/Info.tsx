import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import TimeAgo from 'react-timeago'

import { User } from 'types'

type InfoProps = {
  user: User
  createdAt: Date
}

export const Info: React.FunctionComponent<InfoProps> = ({
  user,
  createdAt,
}) => {
  return (
    <Container>
      <Avatar>
        <Image
          src={user.image}
          layout="fill"
          objectFit="cover"
          alt={user.username}
        />
      </Avatar>
      <Username>{user.username}</Username>
      <StyledTimeAgo date={createdAt} live={false} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Avatar = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 32px;
  height: 32px;
`

const Username = styled.span`
  font-weight: 500;
`

const StyledTimeAgo = styled(TimeAgo)`
  color: ${props => props.theme.colors.grayishBlue};
`
