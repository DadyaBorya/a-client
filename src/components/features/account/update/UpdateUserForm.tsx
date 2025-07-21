'use client'

import { Button, Form, Label } from '@/components/ui/common'
import {
	CheckboxGroup,
	FormInputField,
	FormSwitchField,
	FormWrapper,
	PageSpinner
} from '@/components/ui/elements'

import { Permission } from '@/graphql/generated/output'

import { useUpdateUserForm } from '@/hooks/account/'

import { permissionGroups } from '@/libs/constants'
import { TypeUpdateUserSchema } from '@/libs/schemas/account'

export function UpdateUserForm() {
	const { form, isValid, isLoading, onSubmit } = useUpdateUserForm()

	if (isLoading) {
		return <PageSpinner />
	}

	return (
		<FormWrapper
			title='Оновлення користувача'
			description='Внесіть зміни до даних користувача та збережіть їх.'
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid gap-y-3'
				>
					<FormInputField
						control={form.control}
						name='username'
						label="Ім'я користувача"
						description='Може містити літери, цифри, крапки або дефіси'
						disabled={isLoading}
					/>

					<FormInputField
						control={form.control}
						name='displayName'
						label="Ім'я для відображення"
						description="Ім'я для відображення не може бути порожнім"
						disabled={isLoading}
					/>

					<div className='flex w-full gap-x-4'>
						<FormSwitchField
							control={form.control}
							name='isSuperUser'
							label='Суперкористувач'
							description='Надає повний доступ до системи'
						/>
						<FormSwitchField
							control={form.control}
							name='isBlocked'
							label='Заблокований'
							description='Обмежує доступ користувача до системи'
						/>
					</div>

					<Label>Права доступу</Label>

					<div className='grid grid-cols-3 gap-y-4'>
						{permissionGroups.map(group => (
							<div key={group.groupLabel}>
								<CheckboxGroup<
									TypeUpdateUserSchema,
									'permissions',
									Permission
								>
									control={form.control}
									name='permissions'
									label={group.groupLabel}
									options={Object.entries(
										group.permissions
									).map(([value, { label }]) => ({
										value: value as Permission,
										label
									}))}
								/>
							</div>
						))}
					</div>

					<Button
						type='submit'
						className='mt-2 w-full'
						disabled={!isValid || isLoading}
					>
						Оновити користувача
					</Button>
				</form>
			</Form>
		</FormWrapper>
	)
}
