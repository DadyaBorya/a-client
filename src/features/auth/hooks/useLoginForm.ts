'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { TypeLoginSchema, loginSchema } from '../types'

export function useLoginForm() {
	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			username: '',
			password: '',
			pin: ''
		}
	})

	return { form }
}
