import React, { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

export type InputProps = ComponentPropsWithoutRef<'textarea'>

export const Input: React.FC<InputProps> = props => {
  return <Container rows={4} placeholder="Add a comment..." {...props} />
}

const Container = styled.textarea`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.grayishBlue};
  resize: none;
`
