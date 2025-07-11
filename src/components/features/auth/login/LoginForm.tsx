'use client'

import { Button, Form } from '@/components/ui/common'
import {
	FormInputField,
	FormOtpField,
	FormPasswordInputField,
	PageSpinner
} from '@/components/ui/elements'

import { useLoginForm } from '@/hooks/auth'

import { AuthWrapper } from '../wrappers'

export function LoginForm() {
	const { form, isLoading, isPinRequired, cancelTotp, onSubmit } =
		useLoginForm()

	if (isLoading) {
		return <PageSpinner />
	}

	return (
		<AuthWrapper heading='Вхід до системи'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-y-3'
				>
					{!isPinRequired && (
						<>
							<FormInputField
								control={form.control}
								name='username'
								label="Ім'я користувача"
								placeholder='b.ohorodnii'
								description="Введіть унікальне ім'я користувача латиницею"
								disabled={isLoading}
							/>

							<FormPasswordInputField
								control={form.control}
								name='password'
								label='Пароль'
								placeholder='********'
								description='Якщо ви забули пароль — зверніться до адміністратора.'
								disabled={isLoading}
							/>
						</>
					)}

					{isPinRequired && (
						<>
							<FormOtpField
								control={form.control}
								name='pin'
								label='TOTP код'
								description='Введіть 6-значний код з додатка Google Authenticator або аналогічного'
								disabled={isLoading}
							/>
						</>
					)}

					{isPinRequired && (
						<>
							<Button
								type='submit'
								disabled={
									!form.watch('pin') ||
									form.watch('pin')?.length !== 6 ||
									isLoading
								}
								className='flex-1'
							>
								Увійти до системи
							</Button>

							<div className='flex justify-center'>
								<Button
									type='button'
									variant='ghost'
									size='sm'
									onClick={cancelTotp}
									disabled={isLoading}
								>
									Скасувати TOTP
								</Button>
							</div>
						</>
					)}

					{!isPinRequired && (
						<Button className='mt-2 w-full' disabled={isLoading}>
							Увійти до системи
						</Button>
					)}
				</form>
			</Form>
		</AuthWrapper>
	)
}
