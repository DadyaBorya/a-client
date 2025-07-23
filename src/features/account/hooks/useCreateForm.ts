import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { TypeCreateProfileSchema, createProfileSchema } from '../types'

export function useCreateProfileForm() {
	const form = useForm<TypeCreateProfileSchema>({
		resolver: zodResolver(createProfileSchema),
		defaultValues: {
			username: '',
			password: '',
			displayName: '',
			isSuperUser: false,
			permissions: [],
			isBlocked: false
		}
	})

	return { form }
}
