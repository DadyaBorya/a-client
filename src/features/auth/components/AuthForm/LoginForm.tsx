'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useLogin, useLoginForm } from '@/features/auth'
import {
	FormInputField,
	FormOtpField,
	FormPasswordInputField
} from '@/features/shared'
import { AuthLayout } from '@/shared/components/layouts'
import { Button, Form } from '@/shared/components/ui'

export function LoginForm() {
	const router = useRouter()
	const { form } = useLoginForm()
	const { isPinRequired, onSubmit, cancelTotp, isLoading, redirectPath } =
		useLogin()

	useEffect(() => {
		if (redirectPath) {
			router.push(redirectPath)
		}
	}, [router, redirectPath])

	if (isPinRequired) {
		return (
			<AuthLayout heading='Вхід до системи'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='grid gap-y-3'
					>
						<FormOtpField
							control={form.control}
							name='pin'
							label='TOTP код'
							description='Введіть 6-значний код з додатка Google Authenticator або аналогічного'
							disabled={isLoading}
						/>

						<Button
							type='submit'
							disabled={
								!form.watch('pin') ||
								form.watch('pin')?.length !== 6
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
					</form>
				</Form>
			</AuthLayout>
		)
	}

	return (
		<AuthLayout heading='Вхід до системи'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-y-3'
				>
					<FormInputField
						control={form.control}
						name='username'
						label="Ім'я користувача"
						description="Введіть унікальне ім'я користувача латиницею"
						disabled={isLoading}
					/>

					<FormPasswordInputField
						control={form.control}
						name='password'
						label='Пароль'
						description='Якщо ви забули пароль — зверніться до адміністратора.'
						disabled={isLoading}
					/>

					<Button className='mt-2 w-full' disabled={isLoading}>
						Увійти до системи
					</Button>
				</form>
			</Form>
		</AuthLayout>
	)
}
