import { useEffect } from 'react'

import {
	ProcessFilter,
	ProcessPagination,
	ProcessTable,
	ownColumns,
	useFindAllOwnProcesses,
	useProcessListStore
} from '@/features/process'
import { BorderLayout } from '@/shared/components/layouts'

export function OwnProcessDataTable() {
	const { filters, setData, setIsLoading } = useProcessListStore()
	const { data, isLoading } = useFindAllOwnProcesses(filters)

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
				<ProcessTable columns={ownColumns} />
			</BorderLayout>
			<ProcessPagination />
		</>
	)
}
