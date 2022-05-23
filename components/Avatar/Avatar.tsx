import React from 'react'
import { Avatar as MAvatar, AvatarProps } from '@mantine/core'

export const Avatar: React.FC<AvatarProps<'div'>> = props => {
  return <MAvatar size={32} radius="xl" {...props} />
}
