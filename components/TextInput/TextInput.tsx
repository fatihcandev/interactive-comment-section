import React from 'react'
import {
  TextInput as MTextInput,
  TextInputProps as MTextInputProps,
} from '@mantine/core'

export type TextInputProps = MTextInputProps & {
  loading?: boolean
}

export const TextInput: React.FC<TextInputProps> = props => {
  return (
    <MTextInput
      disabled={props.loading}
      sx={{
        width: '100%',
      }}
      {...props}
    />
  )
}
