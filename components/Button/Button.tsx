import React, { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export const Button: React.FC<ComponentPropsWithoutRef<'button'>> = ({
  children,
}) => {
  return <Container>{children}</Container>
}

const Container = styled.button`
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.moderateBlue};
  border-radius: 8px;
  color: white;
  text-transform: uppercase;

  ${props => props.theme.hoverStyle}
`
