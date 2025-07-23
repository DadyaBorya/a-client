'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useResetPassword, useResetPasswordForm } from '@/features/account'
import { FormPasswordInputField } from '@/features/shared'
import { FormLayout } from '@/shared/components/layouts'
import { Button, Form } from '@/shared/components/ui'

export function ResetPasswordForm() {
	const router = useRouter()
	const { id } = useParams()

	const { form } = useResetPasswordForm(id as string)
	const { onSubmit, isLoading, redirectPath } = useResetPassword()

	useEffect(() => {
		if (redirectPath) {
			router.push(redirectPath)
		}
	}, [router, redirectPath])

	return (
		<FormLayout
			title='Відновлення паролю'
			description='Встановіть новий пароль для обраного користувача.'
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-y-3'
				>
					<FormPasswordInputField
						control={form.control}
						name='newPassword'
						label='Новий пароль'
						description='Пароль повинен містити щонайменше 8 символів, включаючи малі та великі літери, цифри'
						disabled={isLoading}
					/>

					<FormPasswordInputField
						control={form.control}
						name='confirmPassword'
						label='Підтвердити новий пароль'
						description='Повторіть новий пароль для підтвердження'
						disabled={isLoading}
					/>

					<Button
						type='submit'
						className='mt-2 w-full'
						disabled={isLoading}
					>
						Змінити пароль
					</Button>
				</form>
			</Form>
		</FormLayout>
	)
}
