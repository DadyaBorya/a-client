import { z } from 'zod'

export const resetPasswordSchema = z
	.object({
		id: z.string().uuid(),

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

export type TypeResetPasswordSchema = z.infer<typeof resetPasswordSchema>
