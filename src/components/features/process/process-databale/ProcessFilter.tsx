import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Form } from '@/components/ui/common'
import { FormSearchField } from '@/components/ui/elements'
import { FormLimitSelectField } from '@/components/ui/elements/FormLimitSelectField'

import { useProcessesListStore } from '@/libs/stores/process'
import { Pagination } from '@/libs/types/core'

export function ProcessFilter() {
	const { filters, setFilters, setList, setIsLoading } =
		useProcessesListStore()

	const form = useForm<Pagination>({
		defaultValues: filters
	})

	useEffect(() => {
		form.reset(filters)
	}, [filters, form])

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

					<Button className='mt-auto' type='submit'>
						Пошук
					</Button>
				</div>
			</form>
		</Form>
	)
}
