import { z } from 'zod'

export const emailValidation = z
  .string()
  .min(1, { message: 'Email is required!' })
  .email({ message: 'Email is invalid!' })

export const loginFormSchema = z.object({
  email: emailValidation,
  password: z.string().min(1, { message: 'Password is required!' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
