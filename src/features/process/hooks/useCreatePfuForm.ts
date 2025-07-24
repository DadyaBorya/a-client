import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { TypeCreatePfuProcessSchema, createPfuProcessSchema } from '../types'

export function useCreatePfuForm() {
	const form = useForm<TypeCreatePfuProcessSchema>({
		resolver: zodResolver(createPfuProcessSchema)
	})

	return { form }
}
