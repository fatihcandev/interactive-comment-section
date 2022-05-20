import { z } from 'zod'
import { emailValidation } from './loginFormSchema'

export const signUpFormSchema = z.object({
  username: z.string().min(1, { message: 'Username is required!' }),
  password: z
    .string()
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/, {
      message:
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character!',
    }),
  email: emailValidation,
})

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>
