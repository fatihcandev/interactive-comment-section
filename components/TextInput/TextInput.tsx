import React from 'react'
import {
  TextInput as MTextInput,
  TextInputProps as MTextInputProps,
} from '@mantine/core'

export type TextInputProps = MTextInputProps & {
  loading?: boolean
}

export const TextInput: React.FC<TextInputProps> = ({ loading, ...props }) => {
  return (
    <MTextInput
      disabled={loading}
      sx={{
        width: '100%',
      }}
      {...props}
    />
  )
}
