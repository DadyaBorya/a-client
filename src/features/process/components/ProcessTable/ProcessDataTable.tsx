import { useEffect } from 'react'

import {
	ProcessFilter,
	ProcessPagination,
	ProcessTable,
	allColumns,
	useFindAllProcesses,
	useProcessListStore
} from '@/features/process'
import { BorderLayout } from '@/shared/components/layouts'

export function ProcessDataTable() {
	const { filters, setData, setIsLoading } = useProcessListStore()
	const { data, isLoading } = useFindAllProcesses(filters)

	useEffect(() => {
		setIsLoading(isLoading)
	}, [setIsLoading, isLoading])

	useEffect(() => {
		if (data) setData(data)
	}, [data, setData])

	return (
		<>
			<div className='mb-3 flex w-full gap-2'>
				<ProcessFilter />
			</div>
			<BorderLayout>
				<ProcessTable columns={allColumns} />
			</BorderLayout>
			<ProcessPagination />
		</>
	)
}
