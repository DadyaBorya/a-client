'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { TypeEnableTotpSchema, enableTotpSchema } from '../types'

export function useTotpEnableForm() {
	const form = useForm<TypeEnableTotpSchema>({
		resolver: zodResolver(enableTotpSchema),
		defaultValues: { pin: '' }
	})

	return { form }
}
