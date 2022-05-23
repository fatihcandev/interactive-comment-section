import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type LoginSignUpContainerProps = {
  title: string
  formProps: React.ComponentPropsWithoutRef<'form'>
  children: React.ReactNode
}

export const LoginSignUpContainer: React.FC<LoginSignUpContainerProps> = ({
  title,
  formProps,
  children,
}) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Form {...formProps}>{children}</Form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

const Form = styled.form`
  width: 100%;
  max-width: 340px;
  margin: auto;
`
