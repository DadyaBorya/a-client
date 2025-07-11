'use client'

import { Button, Form } from '@/components/ui/common'
import {
	FormOtpField,
	PageSpinner,
	QrCodeBox,
	SecretBox
} from '@/components/ui/elements'

import { useTotpEnableForm } from '@/hooks/auth'

import { AuthWrapper } from '../wrappers'

export const TotpEnableForm = () => {
	const {
		form,
		handleSubmit,
		isSubmitting,
		isFetchingSecret,
		qrCodeUrl,
		secret
	} = useTotpEnableForm()

	if (isFetchingSecret || !qrCodeUrl || !secret) {
		return <PageSpinner />
	}

	return (
		<AuthWrapper heading='Підключення TOTP'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className='space-y-6'
				>
					<QrCodeBox src={qrCodeUrl} />

					<SecretBox value={secret} />

					<FormOtpField
						control={form.control}
						name='pin'
						label='TOTP код'
						description='Проскануйте QR-код у додатку Google Authenticator або аналогічному та введіть 6-значний код. Якщо не можете сканувати — введіть секретний ключ вручну.'
						disabled={isFetchingSecret}
					/>

					<Button
						type='submit'
						className='w-full'
						disabled={isSubmitting || isFetchingSecret}
					>
						Підключити
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
