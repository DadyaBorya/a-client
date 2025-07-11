import { zodResolver } from '@hookform/resolvers/zod'
import { GraphQLFormattedErrorExtensions } from 'graphql'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useLoginMutation } from '@/graphql/generated/output'

import { PIN_REQUIRED_CODE, ROUTES, TOTP_NOT_ENABLED } from '@/libs/constants'
import { TypeLoginSchema, loginSchema } from '@/libs/schemas/auth'

import { useCurrentUser } from '../user'

export function useLoginForm() {
	const router = useRouter()
	const { user, isLoading: isLoadingUser } = useCurrentUser()
	const [isPinRequired, setIsPinRequired] = useState(false)

	useEffect(() => {
		if (user && !user.isBlocked) {
			router.push(ROUTES.HOME.path)
		}
	}, [user, router])

	const shouldShowLoader = isLoadingUser || !!user

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			username: '',
			password: '',
			pin: ''
		}
	})

	const { isValid } = form.formState

	const [login, { loading: isLoading }] = useLoginMutation({
		onCompleted() {
			toast.success('Вхід успішний')
			router.push(ROUTES.HOME.path)
		},
		onError(err) {
			const extensions = err.cause
				?.extensions as GraphQLFormattedErrorExtensions
			const code = extensions?.code

			toast.error('Помилка під час входу', { description: err.message })

			if (code === PIN_REQUIRED_CODE) {
				setIsPinRequired(true)
				return
			}

			if (code === TOTP_NOT_ENABLED) {
				router.push(ROUTES.AUTH.TOTP_ENABLE.path)
			}
		}
	})

	function cancelTotp() {
		setIsPinRequired(false)
		form.setValue('pin', '')
		form.reset()
	}

	function onSubmit(data: TypeLoginSchema) {
		const variables = {
			data: {
				username: data.username,
				password: data.password,
				...(isPinRequired && data.pin ? { pin: data.pin } : {})
			}
		}

		login({ variables })
	}

	return {
		form,
		isValid,
		isLoading: isLoading || shouldShowLoader,
		isPinRequired,
		cancelTotp,
		onSubmit
	}
}
