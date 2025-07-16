import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	Permission,
	useCreateHstsMvsProcessMutation
} from '@/graphql/generated/output'

import { ROUTES } from '@/libs/constants'
import {
	TypeCreateHstsMvsSchema,
	createHstsMvsSchema
} from '@/libs/schemas/process'

import { useUserStore } from '../user'

export function useCreateHstsMvsForm() {
	const router = useRouter()
	const { user } = useUserStore()
	const form = useForm<TypeCreateHstsMvsSchema>({
		resolver: zodResolver(createHstsMvsSchema)
	})

	const [create, { loading: isLoading }] = useCreateHstsMvsProcessMutation({
		onCompleted(data) {
			toast.success('Запит на обробку даних успішно створений')

			if (
				user?.permissions.includes(Permission.ProcessReadOwn) ||
				user?.isSuperUser === true
			) {
				// router.push(
				// 	ROUTES.PROCESS.HSTS_MVS.VIEW.build(
				// 		data.createHstsMvsProcess
				// 	)
				// )
			}
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
