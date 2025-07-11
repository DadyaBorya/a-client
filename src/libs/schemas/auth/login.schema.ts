import { z } from 'zod'

export const loginSchema = z.object({
	username: z
		.string({
			required_error: "Ім'я користувача є обовʼязковим"
		})
		.min(3, {
			message: "Ім'я користувача повинно містити щонайменше 3 символи"
		})
		.regex(/^[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*$/, {
			message:
				"Ім'я користувача може містити лише латинські літери, цифри, крапки або дефіси без пробілів"
		}),

	password: z
		.string({
			required_error: 'Пароль є обовʼязковим'
		})
		.min(8, { message: 'Пароль повинен містити щонайменше 8 символів' }),

	pin: z
		.string()
		.regex(/^\d{6}$/, {
			message: 'PIN-код має складатися з 6 цифр'
		})
		.or(z.literal(''))
		.optional()
})

export type TypeLoginSchema = z.infer<typeof loginSchema>
