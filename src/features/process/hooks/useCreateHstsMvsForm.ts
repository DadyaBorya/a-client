import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
	TypeCreateHstsMvsProcessSchema,
	createHstsMvsProcessSchema
} from '../types'

export function useCreateHstsMvsForm() {
	const form = useForm<TypeCreateHstsMvsProcessSchema>({
		resolver: zodResolver(createHstsMvsProcessSchema)
	})

	return { form }
}
