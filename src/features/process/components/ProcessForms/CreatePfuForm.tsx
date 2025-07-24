'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useCreatePfu, useCreatePfuForm } from '@/features/process'
import { FormSingleFileField, FormSwitchField } from '@/features/shared'
import { FormLayout } from '@/shared/components/layouts'
import { Button, Form } from '@/shared/components/ui'

export function CreatePfuProcessForm() {
	const router = useRouter()
	const { form } = useCreatePfuForm()
	const { redirectPath, isLoading, onSubmit } = useCreatePfu()

	useEffect(() => {
		if (redirectPath) router.push(redirectPath)
	}, [router, redirectPath])

	return (
		<FormLayout
			title='Створення запису'
			description='Завантажте файл ПФУ для обробки'
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormSingleFileField
						accept='.xml'
						control={form.control}
						name='inputFile'
						label='Інформація про доходи'
						description='Інформація про доходи з Пенсійного Фонду України'
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
