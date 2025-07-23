import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useChangePassword, useChangePasswordForm } from '@/features/account'
import { FormPasswordInputField } from '@/features/shared'
import { FormLayout } from '@/shared/components/layouts'
import { Button, Form } from '@/shared/components/ui'

export function ChangePasswordForm() {
	const router = useRouter()
	const { form } = useChangePasswordForm()
	const { onSubmit, redirectPath, isLoading } = useChangePassword()

	useEffect(() => {
		if (redirectPath) {
			router.push(redirectPath)
		}
	}, [router, redirectPath])

	return (
		<FormLayout
			title='Зміна паролю'
			description='	Оновіть ваш пароль для покращення безпеки облікового запису'
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-y-3'
				>
					<FormPasswordInputField
						control={form.control}
						name='currentPassword'
						label='Поточний пароль'
						description='Введіть ваш поточний пароль'
						disabled={isLoading}
					/>

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
