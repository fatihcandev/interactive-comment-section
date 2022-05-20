import React, { useState } from 'react'
import { ActionIcon } from '@mantine/core'
import { Eye, EyeOff } from 'tabler-icons-react'

import { TextInput, TextInputProps } from '../TextInput'

export const PasswordInput: React.FC<TextInputProps> = ({
  loading,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  function togglePasswordInput() {
    setShowPassword(prevState => !prevState)
  }

  return (
    <TextInput
      label="Password"
      type={showPassword ? 'text' : 'password'}
      rightSection={
        <ActionIcon component="button" onClick={togglePasswordInput} size="xs">
          {showPassword ? <Eye /> : <EyeOff />}
        </ActionIcon>
      }
      disabled={loading}
      {...props}
    />
  )
}
