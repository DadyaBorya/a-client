'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useCreateDmsu, useCreateDmsuForm } from '@/features/process'
import { FormSingleFileField, FormSwitchField } from '@/features/shared'
import { FormLayout } from '@/shared/components/layouts'
import { Button, Form } from '@/shared/components/ui'

export function CreateDmsuProcessForm() {
	const router = useRouter()
	const { form } = useCreateDmsuForm()
	const { redirectPath, isLoading, onSubmit } = useCreateDmsu()

	useEffect(() => {
		if (redirectPath) router.push(redirectPath)
	}, [router, redirectPath])

	return (
		<FormLayout
			title='Створення запису'
			description='Завантажте файл ДМСУ для обробки'
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormSingleFileField
						accept='.pdf'
						control={form.control}
						name='personInfoFile'
						label='Інформація про особу'
						description='Інформація про особу з Державної міграційної служби України'
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
