'use client'

import {
	ProcessFilter,
	ProcessPagination,
	ProcessTable,
	allColumns
} from '@/components/features/process/process-datatable'
import { BorderWrapper } from '@/components/ui/elements'

import { Permission, useFindAllProcessQuery } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

import { useProcessesListStore } from '@/libs/stores/process'

function ProcessListPage() {
	const { filters } = useProcessesListStore()

	const { data, loading: isLoading } = useFindAllProcessQuery({
		variables: { data: filters }
	})

	return (
		<>
			<div className='mb-3 flex w-full gap-2'>
				<ProcessFilter />
			</div>
			<BorderWrapper>
				<ProcessTable
					data={data?.findAllProcesses}
					isLoading={isLoading}
					columns={allColumns}
				/>
			</BorderWrapper>
			<ProcessPagination />
		</>
	)
}

export default withAuth(ProcessListPage, [Permission.ProcessReadAll])
