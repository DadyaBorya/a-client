import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { TypeCreateErdProcessSchema, createErdProcessSchema } from '../types'

export function useCreateErdForm() {
	const form = useForm<TypeCreateErdProcessSchema>({
		resolver: zodResolver(createErdProcessSchema)
	})

	return { form }
}
