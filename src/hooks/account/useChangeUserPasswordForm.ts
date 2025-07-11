import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useChangeUserPasswordMutation } from '@/graphql/generated/output'

import { ROUTES } from '@/libs/constants'
import {
	TypeChangePasswordSchema,
	changePasswordSchema
} from '@/libs/schemas/account'

export function useChangeUserPasswordForm() {
	const router = useRouter()

	const form = useForm<TypeChangePasswordSchema>({
		resolver: zodResolver(changePasswordSchema),
		defaultValues: {
			currentPassword: '',
			newPassword: '',
			confirmPassword: ''
		}
	})

	const { isValid } = form.formState

	const [changePassword, { loading: isLoading }] =
		useChangeUserPasswordMutation({
			onCompleted() {
				toast.success('Пароль успішно змінено')

				router.push(ROUTES.ACCOUNT.OWN_PROFILE.path)
			},
			onError(err) {
				toast.error('Помилка під час зміни паролю', {
					description: err.message
				})
			}
		})

	function onSubmit(data: TypeChangePasswordSchema) {
		const variables = {
			data: {
				currentPassword: data.currentPassword,
				password: data.newPassword
			}
		}

		changePassword({ variables })
	}

	return {
		form,
		isValid,
		isLoading,
		onSubmit
	}
}
