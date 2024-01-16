import {z} from "zod"

export const SignUpSchema = z.object({
  name: z.string().min(1, {message: 'This field is required'}),
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(6, "too short")
})

export type TNormalForm = z.infer<typeof SignUpSchema>