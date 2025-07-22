import { Button, Form } from '@/components/ui/common'
import {
	FormSingleFileField,
	FormSwitchField,
	FormWrapper
} from '@/components/ui/elements'

import { useCreateDmsuForm } from '@/hooks/process'

export function CreateDmsuForm() {
	const { form, onSubmit, isLoading } = useCreateDmsuForm()

	return (
		<FormWrapper
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
		</FormWrapper>
	)
}
