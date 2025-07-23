import { z } from 'zod'

export const changePasswordSchema = z
	.object({
		currentPassword: z
			.string({
				required_error: 'Поточний пароль є обовʼязковим'
			})
			.min(8, { message: 'Поточний пароль є обовʼязковим' }),

		newPassword: z
			.string({
				required_error: 'Новий пароль є обовʼязковим'
			})
			.min(8, {
				message: 'Новий пароль повинен містити щонайменше 8 символів'
			}),

		confirmPassword: z
			.string({
				required_error: 'Підтвердження паролю є обовʼязковим'
			})
			.min(1, { message: 'Підтвердження паролю є обовʼязковим' })
	})
	.refine(data => data.newPassword === data.confirmPassword, {
		message: 'Паролі не співпадають',
		path: ['confirmPassword']
	})

export type TypeChangePasswordSchema = z.infer<typeof changePasswordSchema>
