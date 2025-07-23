import { useForm } from 'react-hook-form'

import { useProcessListStore } from '@/features/process'
import { FormLimitSelectField, FormSearchField } from '@/features/shared'
import { Button, Form } from '@/shared/components/ui'
import { Pagination } from '@/shared/types'

export function ProcessFilter() {
	const { filters, setFilters, isLoading } = useProcessListStore()

	const form = useForm<Pagination>({
		defaultValues: filters
	})

	const onSubmit = (formData: Pagination) => {
		const newFilters = {
			...filters,
			searchFor: formData.searchFor,
			limit: formData.limit
		}

		setFilters(newFilters)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='grid w-full'
			>
				<div className='flex items-center gap-x-4'>
					<FormLimitSelectField control={form.control} name='limit' />

					<FormSearchField
						className='w-full'
						control={form.control}
						name='searchFor'
					/>

					<Button
						disabled={isLoading}
						className='mt-auto'
						type='submit'
					>
						Пошук
					</Button>
				</div>
			</form>
		</Form>
	)
}
