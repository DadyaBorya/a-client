import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	Permission,
	useCreateDmsuProcessMutation
} from '@/graphql/generated/output'

import { ROUTES } from '@/libs/constants'
import { TypeCreateDmsuSchema, createDmsuSchema } from '@/libs/schemas/process'

import { useUserStore } from '../user'

export function useCreateDmsuForm() {
	const router = useRouter()
	const { user } = useUserStore()
	const form = useForm<TypeCreateDmsuSchema>({
		resolver: zodResolver(createDmsuSchema)
	})

	const [create, { loading: isLoading }] = useCreateDmsuProcessMutation({
		onCompleted(data) {
			toast.success('Запит на обробку даних успішно створений')

			if (
				user?.permissions.includes(Permission.ProcessReadOwn) ||
				user?.isSuperUser === true
			) {
				router.push(
					ROUTES.PROCESS.DMSU.VIEW.build(data.createDmsuProcess)
				)
			}
		},
		onError(err) {
			toast.error('Помилка', { description: err.message })
		}
	})

	function onSubmit(data: TypeCreateDmsuSchema) {
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
