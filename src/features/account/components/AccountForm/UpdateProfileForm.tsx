import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { Permission } from '@/graphql/generated/output'

import {
	TypeUpdateProfileSchema,
	useUpdateProfile,
	useUpdateProfileForm
} from '@/features/account'
import {
	CheckboxGroup,
	FormInputField,
	FormSwitchField
} from '@/features/shared'
import { FormLayout } from '@/shared/components/layouts'
import { Button, Form, Label } from '@/shared/components/ui'
import { PERMISSION_GROUPS } from '@/shared/constants'

export function UpdateProfileForm() {
	const { id } = useParams()
	const router = useRouter()

	const { form } = useUpdateProfileForm(id as string)
	const { redirectPath, onSubmit, isLoading } = useUpdateProfile()

	useEffect(() => {
		if (redirectPath) {
			router.push(redirectPath)
		}
	}, [router, redirectPath])

	return (
		<FormLayout
			title='Оновлення користувача'
			description='Внесіть зміни до даних користувача та збережіть їх.'
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(data =>
						onSubmit(
							data,
							form.formState.dirtyFields as Partial<
								Record<keyof TypeUpdateProfileSchema, boolean>
							>
						)
					)}
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

					<Label className='text-lg'>Права доступу</Label>

					<div className='grid grid-cols-3'>
						{PERMISSION_GROUPS.map(group => (
							<div key={group.groupLabel}>
								<CheckboxGroup<
									TypeUpdateProfileSchema,
									'permissions',
									Permission
								>
									control={form.control}
									name='permissions'
									label={group.groupLabel}
									options={Object.entries(
										group.permissions
									).map(([value, label]) => ({
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
						disabled={isLoading}
					>
						Оновити користувача
					</Button>
				</form>
			</Form>
		</FormLayout>
	)
}
