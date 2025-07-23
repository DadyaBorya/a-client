import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { TypeChangePasswordSchema, changePasswordSchema } from '../types'

export function useChangePasswordForm() {
	const form = useForm<TypeChangePasswordSchema>({
		resolver: zodResolver(changePasswordSchema),
		defaultValues: {
			currentPassword: '',
			newPassword: '',
			confirmPassword: ''
		}
	})

	return { form }
}
