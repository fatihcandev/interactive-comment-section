import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button, Text, Group } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import styled from 'styled-components'

import { Link } from '@/components/Link'
import { PasswordInput } from '@/components/PasswordInput'
import { TextInput } from '@/components/TextInput'
import { LoginFormSchema, loginFormSchema } from '@/utils/loginFormSchema'
import { supabase } from '@/utils/supabaseClient'

const Login: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const form = useForm<LoginFormSchema>({
    schema: zodResolver(loginFormSchema),
    initialValues: {
      email: '',
      password: '',
    },
  })
  const { push } = useRouter()

  async function handleSubmit(values: LoginFormSchema) {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({
        email: values.email,
        password: values.password,
      })
      if (error) throw error
      push('/')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showNotification({
        title: 'Something went wrong',
        message: error.error_description || error.message,
        color: 'red',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <Form onSubmit={form.onSubmit(handleSubmit)}>
        <Group spacing="sm">
          <TextInput
            label="Email"
            loading={loading}
            {...form.getInputProps('email')}
          />
          <PasswordInput {...form.getInputProps('password')} />
          <Button type="submit" disabled={loading} loading={loading} fullWidth>
            Login
          </Button>
          <Group spacing="xs">
            <Text size="sm">Don&apos;t have an account?</Text>
            <Link
              href="/signup"
              anchorProps={{
                size: 'sm',
              }}
            >
              Sign up
            </Link>
          </Group>
        </Group>
      </Form>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

const Form = styled.form`
  width: 100%;
  max-width: 340px;
  margin: auto;
`
