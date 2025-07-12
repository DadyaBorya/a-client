import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useCreateHstsMvsProcessMutation } from '@/graphql/generated/output'

import {
	TypeCreateHstsMvsSchema,
	createHstsMvsSchema
} from '@/libs/schemas/process'

export function useCreateHstsMvsForm() {
	const form = useForm<TypeCreateHstsMvsSchema>({
		resolver: zodResolver(createHstsMvsSchema)
	})

	const [create, { loading: isLoading }] = useCreateHstsMvsProcessMutation({
		onCompleted() {
			toast.success('Запит на обробку даних успішно створений')
		},
		onError(err) {
			console.log(err)

			toast.error('Помилка', { description: err.message })
		}
	})

	function onSubmit(data: TypeCreateHstsMvsSchema) {
		console.log('Submitting data:', data)
		console.log('Driver license file:', data.driverLicenseFile)
		console.log('Car info file:', data.carInfoFile)

		create({
			variables: {
				...data
			}
		})
	}

	return {
		form,
		isLoading,
		onSubmit
	}
}
