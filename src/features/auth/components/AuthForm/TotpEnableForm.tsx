'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useTotpEnable, useTotpEnableForm } from '@/features/auth'
import { FormOtpField, QrCode, SecretText } from '@/features/shared'
import { AuthLayout } from '@/shared/components/layouts'
import { Button, Form } from '@/shared/components/ui'

export function TotpEnableForm() {
	const router = useRouter()
	const { form } = useTotpEnableForm()
	const { onSubmit, isLoading, qrcodeUrl, secret, redirectPath } =
		useTotpEnable()

	useEffect(() => {
		if (redirectPath) {
			router.push(redirectPath)
		}
	}, [router, redirectPath])

	return (
		<AuthLayout heading='Підключення TOTP'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-6'
				>
					<QrCode src={qrcodeUrl} />

					<SecretText value={secret} />

					<FormOtpField
						control={form.control}
						name='pin'
						label='TOTP код'
						description='Проскануйте QR-код у додатку Google Authenticator або аналогічному та введіть 6-значний код. Якщо не можете сканувати — введіть секретний ключ вручну.'
						disabled={isLoading}
					/>

					<Button
						type='submit'
						className='w-full'
						disabled={isLoading}
					>
						Підключити
					</Button>
				</form>
			</Form>
		</AuthLayout>
	)
}
