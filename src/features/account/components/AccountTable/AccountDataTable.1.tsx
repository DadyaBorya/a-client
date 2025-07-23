import { useEffect } from 'react'

import { AccountActions } from './AccountActions'
import { AccountFilter } from './AccountFilter'
import { AccountPagination } from './AccountPagination'
import { AccountTable } from './AccountTable'
import { useAccountListStore, useFindAllAccounts } from '@/features/account'
import { BorderLayout } from '@/shared/components/layouts'

export function AccountDataTable() {
	const { filters, setData, setIsLoading } = useAccountListStore()
	const { data, isLoading } = useFindAllAccounts(filters)

	useEffect(() => {
		setIsLoading(isLoading)
	}, [setIsLoading, isLoading])

	useEffect(() => {
		if (data) setData(data)
	}, [data, setData])

	return (
		<>
			<div className='mb-3 flex w-full gap-2'>
				<AccountFilter />
				<AccountActions />
			</div>
			<BorderLayout>
				<AccountTable />
			</BorderLayout>
			<AccountPagination />
		</>
	)
}
