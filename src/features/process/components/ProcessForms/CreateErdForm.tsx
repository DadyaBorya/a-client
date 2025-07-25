'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useCreateErd, useCreateErdForm } from '@/features/process'
import { FormSingleFileField, FormSwitchField } from '@/features/shared'
import { FormLayout } from '@/shared/components/layouts'
import { Button, Form } from '@/shared/components/ui'

export function CreateErdProcessForm() {
	const router = useRouter()
	const { form } = useCreateErdForm()
	const { redirectPath, isLoading, onSubmit } = useCreateErd()

	useEffect(() => {
		if (redirectPath) router.push(redirectPath)
	}, [router, redirectPath])

	return (
		<FormLayout
			title='Створення запису'
			description='Завантажте файли ЄРД для обробки'
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormSingleFileField
						accept='.pdf'
						control={form.control}
						name='grantedInputFile'
						label='Надані довіреності'
						description='Файл з наданими довіреностями'
					/>

					<FormSingleFileField
						accept='.pdf'
						control={form.control}
						name='acceptedInputFile'
						label='Прийняті довіреності'
						description='Файл з прийнятими довіреностями'
					/>

					<FormSwitchField
						control={form.control}
						name='isAi'
						label='Використати нейромережу'
						description='Якщо увімкнено — дані будуть оброблені нейромережею автоматично'
					/>

					<Button disabled={isLoading} className='mt-2 w-full'>
						Створити запит
					</Button>
				</form>
			</Form>
		</FormLayout>
	)
}
