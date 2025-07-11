import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	useEnableTotpMutation,
	useGenerateTotpSecretQuery
} from '@/graphql/generated/output'

import { ROUTES } from '@/libs/constants'
import { TypeEnableTotpSchema, enableTotpSchema } from '@/libs/schemas/totp'

export function useTotpEnableForm() {
	const router = useRouter()
	const { data, loading: isFetchingSecret } = useGenerateTotpSecretQuery({
		onError: err => {
			toast.error('Помилка', { description: err.message })
			router.push(ROUTES.HOME.path)
		}
	})

	const [enableTotp, { loading: isSubmitting }] = useEnableTotpMutation({
		onCompleted: () => {
			toast.success('Двофакторна автентифікація увімкнена успішно')
			router.push(ROUTES.HOME.path)
		},
		onError: err => {
			toast.error('Помилка', { description: err.message })
		}
	})

	const form = useForm<TypeEnableTotpSchema>({
		resolver: zodResolver(enableTotpSchema),
		defaultValues: { pin: '' }
	})

	const { isValid } = form.formState

	const handleSubmit = (values: TypeEnableTotpSchema) => {
		if (!data?.generateTotpSecret.secret) return

		enableTotp({
			variables: {
				data: {
					secret: data.generateTotpSecret.secret,
					pin: values.pin
				}
			}
		})
	}

	const qrCodeUrl = data?.generateTotpSecret.qrcodeUrl
	const secret = data?.generateTotpSecret.secret

	return {
		form,
		handleSubmit,
		isValid,
		isFetchingSecret,
		isSubmitting,
		qrCodeUrl,
		secret
	}
}
