'use client'

import {
	Permission,
	useFindAllOwnProcessQuery
} from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

import { useProcessesListStore } from '@/libs/stores/process'

import {
	ProcessFilter,
	ProcessPagination,
	ProcessTable,
	ownColumns
} from '../features/process/process-databale'
import { BorderWrapper } from '../ui/elements'

function OwnProcessListPage() {
	const { filters } = useProcessesListStore()

	const { data, loading: isLoading } = useFindAllOwnProcessQuery({
		variables: { data: filters }
	})

	return (
		<>
			<div className='mb-3 flex w-full gap-2'>
				<ProcessFilter />
			</div>
			<BorderWrapper>
				<ProcessTable
					data={data?.findAllOwnProcesses}
					isLoading={isLoading}
					columns={ownColumns}
				/>
			</BorderWrapper>
			<ProcessPagination />
		</>
	)
}

export default withAuth(OwnProcessListPage, [Permission.ProcessReadOwn])
