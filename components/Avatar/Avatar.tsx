import React, { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export const Avatar: React.FC<ComponentPropsWithoutRef<'img'>> = props => {
  return <Container {...props} />
}

const Container = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`
