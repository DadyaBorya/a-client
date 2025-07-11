import { z } from 'zod'

import { Permission } from '@/graphql/generated/output'

export const createUserSchema = z.object({
	username: z
		.string({
			required_error: "Ім'я користувача є обовʼязковим"
		})
		.regex(/^[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*$/, {
			message:
				"Ім'я користувача може містити лише літери, цифри, крапки або дефіси"
		}),

	password: z
		.string({
			required_error: 'Пароль є обовʼязковим'
		})
		.min(8, {
			message: 'Пароль повинен містити щонайменше 8 символів'
		}),

	displayName: z
		.string({
			required_error: "Ім'я для відображення є обовʼязковим"
		})
		.min(1, {
			message: "Ім'я для відображення не може бути порожнім"
		}),

	isSuperUser: z.boolean().optional(),

	permissions: z.nativeEnum(Permission).array().optional(),

	isBlocked: z.boolean().optional()
})

export type TypeCreateUserSchema = z.infer<typeof createUserSchema>
