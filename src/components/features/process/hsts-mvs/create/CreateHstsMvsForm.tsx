import { Button, Form } from '@/components/ui/common'
import { FormSingleFileField, FormWrapper } from '@/components/ui/elements'

import { useCreateHstsMvsForm } from '@/hooks/process'

export function CreateHstsMvsForm() {
	const { form, onSubmit, isLoading } = useCreateHstsMvsForm()

	return (
		<FormWrapper
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

					<Button disabled={isLoading} className='mt-2 w-full'>
						Створити запит
					</Button>
				</form>
			</Form>
		</FormWrapper>
	)
}
