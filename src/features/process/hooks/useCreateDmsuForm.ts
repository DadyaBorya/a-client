import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { TypeCreateDmsuProcessSchema, createDmsuProcessSchema } from '../types'

export function useCreateDmsuForm() {
	const form = useForm<TypeCreateDmsuProcessSchema>({
		resolver: zodResolver(createDmsuProcessSchema)
	})

	return { form }
}
