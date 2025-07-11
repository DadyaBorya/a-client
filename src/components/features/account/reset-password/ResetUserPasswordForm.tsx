'use client'

import { Button, Form } from '@/components/ui/common'
import {
	FormPasswordInputField,
	FormWrapper,
	PageSpinner
} from '@/components/ui/elements'

import { useResetUserPasswordForm } from '@/hooks/account'

export function ResetUserPasswordForm() {
	const { form, isLoading, onSubmit } = useResetUserPasswordForm()

	return (
		<FormWrapper
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
		</FormWrapper>
	)
}
