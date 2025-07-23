import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { TypeResetPasswordSchema, resetPasswordSchema } from '../types'

export function useResetPasswordForm(id: string) {
	const form = useForm<TypeResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			id: id as string,
			newPassword: '',
			confirmPassword: ''
		}
	})


	return { form }
}
