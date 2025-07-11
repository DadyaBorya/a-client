import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { validate as uuidValidate } from 'uuid'

import { useResetUserPasswordMutation } from '@/graphql/generated/output'

import { ROUTES } from '@/libs/constants'
import {
	TypeResetPasswordSchema,
	resetPasswordSchema
} from '@/libs/schemas/account'

export function useResetUserPasswordForm() {
	const { id } = useParams()
	const router = useRouter()

	const hasValidated = useRef(false)

	useEffect(() => {
		if (!hasValidated.current && !uuidValidate(id)) {
			toast.error('Помилка', {
				description: 'Невірно вказаний індетифікатор користувача.'
			})
			router.push(ROUTES.HOME.path)
			hasValidated.current = true
		}
	}, [id, router])

	const form = useForm<TypeResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			id: id as string,
			newPassword: '',
			confirmPassword: ''
		}
	})

	const { isValid } = form.formState

	const [changePassword, { loading: isLoading }] =
		useResetUserPasswordMutation({
			onCompleted() {
				toast.success('Пароль успішно змінено')
				router.push(ROUTES.ACCOUNT.PROFILE.build(id as string))
			},
			onError(err) {
				toast.error('Помилка під час зміни паролю', {
					description: err.message
				})
			}
		})

	function onSubmit(data: TypeResetPasswordSchema) {
		const variables = {
			data: {
				id: data.id,
				password: data.newPassword
			}
		}

		changePassword({ variables })
	}

	return {
		form,
		isValid,
		isLoading,
		onSubmit,
		hasValidated
	}
}
