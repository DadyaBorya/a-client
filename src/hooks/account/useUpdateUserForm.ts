import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useUpdateUserMutation } from '@/graphql/generated/output'

import { ROUTES } from '@/libs/constants'
import { TypeUpdateUserSchema, updateUserSchema } from '@/libs/schemas/account'

import { useFindUserById } from '../user'

export function useUpdateUserForm() {
	const params = useParams()

	const router = useRouter()

	const id = params.id as string

	const { data, error } = useFindUserById(id)

	const form = useForm<TypeUpdateUserSchema>({
		resolver: zodResolver(updateUserSchema),
		defaultValues: {
			id
		}
	})

	const { isValid } = form.formState

	useEffect(() => {
		if (data) {
			const userData = {
				id,
				username: data.username,
				displayName: data.displayName,
				isSuperUser: data.isSuperUser,
				permissions: data.permissions,
				isBlocked: data.isBlocked
			}

			form.reset(userData)
		}

		if (error) {
			toast.error('Помилка', { description: error.message })
			router.push(ROUTES.HOME.path)
		}
	}, [data, form.reset, id, error, router])

	const [updateUser, { loading: isLoading }] = useUpdateUserMutation({
		onCompleted() {
			toast.success('Користувач успішно оновлений')
			router.push(ROUTES.ACCOUNT.PROFILE.build(data?.id))
		},
		onError(err) {
			toast.error('Помилка під час оновлення користувача', {
				description: err.message
			})
		}
	})

	function onSubmit(data: TypeUpdateUserSchema) {
		const changedFields: Partial<TypeUpdateUserSchema> = {}
		const dirtyFields = form.formState.dirtyFields

		if (Object.keys(dirtyFields).length === 0) {
			toast.info('Немає змін для збереження')
			return
		}

		const fieldKeys = Object.keys(
			dirtyFields
		) as (keyof TypeUpdateUserSchema)[]

		fieldKeys.forEach(fieldKey => {
			if (dirtyFields[fieldKey]) {
				changedFields[fieldKey] = data[fieldKey] as any
			}
		})

		const variables = {
			data: { id: data.id, ...changedFields }
		}

		updateUser({ variables })
	}

	return {
		form,
		isValid,
		isLoading,
		onSubmit
	}
}
