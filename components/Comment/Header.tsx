import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import TimeAgo from 'react-timeago'

import { User } from 'types'

type HeaderProps = {
  user: User
  createdAt: Date
}

export const Header: React.FunctionComponent<HeaderProps> = ({
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
      <TimeAgo date={createdAt} live={false} />
    </Container>
  )
}

const Container = styled.header`
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
