import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useCreateUserMutation } from '@/graphql/generated/output'

import { TypeCreateUserSchema, createUserSchema } from '@/libs/schemas/account'

export function useCreateUserForm() {
	const form = useForm<TypeCreateUserSchema>({
		resolver: zodResolver(createUserSchema),
		defaultValues: {
			username: '',
			password: '',
			displayName: '',
			isSuperUser: false,
			permissions: [],
			isBlocked: false
		}
	})

	const { isValid } = form.formState

	const [createUser, { loading: isLoading }] = useCreateUserMutation({
		onCompleted() {
			toast.success('Користувач успішно створений')
			form.reset()
		},
		onError(err) {
			toast.error('Помилка під час створення користувача', {
				description: err.message
			})
		}
	})

	function onSubmit(data: TypeCreateUserSchema) {
		const variables = {
			data
		}

		createUser({ variables })
	}

	return {
		form,
		isValid,
		isLoading,
		onSubmit
	}
}
