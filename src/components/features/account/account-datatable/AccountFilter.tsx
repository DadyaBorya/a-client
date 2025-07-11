import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Form } from '@/components/ui/common'
import { FormSearchField } from '@/components/ui/elements'
import { FormLimitSelectField } from '@/components/ui/elements/FormLimitSelectField'

import { useFindAllUsersQuery } from '@/graphql/generated/output'

import { useAccountsListStore } from '@/libs/stores/accounts-list'
import { Pagination } from '@/libs/types/core'

export function AccountFilter() {
	const { filters, setFilters, setUserList, setIsLoading } =
		useAccountsListStore()

	const form = useForm<Pagination>({
		defaultValues: filters
	})

	const { data, loading: isLoading } = useFindAllUsersQuery({
		variables: { data: filters }
	})

	useEffect(() => {
		form.reset(filters)
	}, [filters, form])

	useEffect(() => {
		setIsLoading(isLoading)
	}, [isLoading])

	useEffect(() => {
		if (data) {
			setUserList(data.findAllUsers)
		}
	}, [data])

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
