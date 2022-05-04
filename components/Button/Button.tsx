import React, { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export const Button: React.FC<ComponentPropsWithoutRef<'button'>> = ({
  children,
}) => {
  return <Container>{children}</Container>
}

const Container = styled.button`
  min-width: 104px;
  text-align: center;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.colors.moderateBlue};
  border-radius: 8px;
  color: white;
  text-transform: uppercase;

  ${props => props.theme.hoverStyle}
`
