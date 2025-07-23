'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useCreateHstsMvs, useCreateHstsMvsForm } from '@/features/process'
import { FormSingleFileField, FormSwitchField } from '@/features/shared'
import { FormLayout } from '@/shared/components/layouts'
import { Button, Form } from '@/shared/components/ui'

export function CreateHstsMvsProcessForm() {
	const router = useRouter()
	const { form } = useCreateHstsMvsForm()
	const { redirectPath, isLoading, onSubmit } = useCreateHstsMvs()

	useEffect(() => {
		if (redirectPath) router.push(redirectPath)
	}, [router, redirectPath])

	return (
		<FormLayout
			title='Створення запису'
			description='Завантажте файли ГСЦ МВС для обробки'
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormSingleFileField
						accept='.xls'
						control={form.control}
						name='driverLicenseFile'
						label='Водійське посвідчення'
						description='Водійське посвідчення формату .xls'
					/>

					<FormSingleFileField
						control={form.control}
						accept='.xls'
						name='carInfoFile'
						label='Інофрмація про машину'
						description='Інофрмація про машину формату .xls'
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
