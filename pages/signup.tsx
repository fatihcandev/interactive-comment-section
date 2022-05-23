import { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button, Group, Text } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { showNotification } from '@mantine/notifications'

import { Link } from '@/components/Link'
import { LoginSignUpContainer } from '@/components/LoginSignUpContainer'
import { PasswordInput } from '@/components/PasswordInput'
import { TextInput } from '@/components/TextInput'
import { SignUpFormSchema, signUpFormSchema } from '@/utils/signUpFormSchema'
import { supabase } from '@/utils/supabaseClient'
import { User } from '@/types'

const SignUp: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const form = useForm<SignUpFormSchema>({
    schema: zodResolver(signUpFormSchema),
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
  })
  const { push } = useRouter()

  async function handleSubmit(values: SignUpFormSchema) {
    try {
      setLoading(true)
      const { user, error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      })
      if (signUpError) throw signUpError
      const { error: insertToDbError } = await supabase
        .from<User>('users')
        .insert([
          {
            id: user?.id,
            username: values.username,
            email: values.email,
          },
        ])
      if (insertToDbError) throw insertToDbError

      showNotification({
        title: "You've signed up successfully!",
        message: 'You are being redirected to the login page',
        color: 'green',
      })
      push('/login')
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
    <LoginSignUpContainer
      title="Sign Up"
      formProps={{
        onSubmit: form.onSubmit(handleSubmit),
      }}
    >
      <Group spacing="sm">
        <TextInput
          label="Email"
          loading={loading}
          {...form.getInputProps('email')}
        />
        <TextInput
          label="Username"
          loading={loading}
          {...form.getInputProps('username')}
        />
        <PasswordInput loading={loading} {...form.getInputProps('password')} />
        <Button type="submit" disabled={loading} loading={loading} fullWidth>
          Sign up
        </Button>
        <Group spacing="xs">
          <Text size="sm">Already have an account?</Text>
          <Link
            href="/login"
            anchorProps={{
              size: 'sm',
            }}
          >
            Login
          </Link>
        </Group>
      </Group>
    </LoginSignUpContainer>
  )
}

export default SignUp
