'use client'

import { Button, Form } from '@/components/ui/common'
import { FormPasswordInputField, FormWrapper } from '@/components/ui/elements'

import { useChangeUserPasswordForm } from '@/hooks/account'

export function ChangeUserPasswordForm() {
	const { form, isLoading, onSubmit } = useChangeUserPasswordForm()

	return (
		<FormWrapper
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
						placeholder='********'
						description='Введіть ваш поточний пароль'
						disabled={isLoading}
					/>

					<FormPasswordInputField
						control={form.control}
						name='newPassword'
						label='Новий пароль'
						placeholder='********'
						description='Пароль повинен містити щонайменше 8 символів, включаючи малі та великі літери, цифри'
						disabled={isLoading}
					/>

					<FormPasswordInputField
						control={form.control}
						name='confirmPassword'
						label='Підтвердити новий пароль'
						placeholder='********'
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
		</FormWrapper>
	)
}
