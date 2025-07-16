'use client'

import withAuth from '@/hooks/auth/withAuth'

import { PROCESS_PERMISSIONS, PROCESS_ROUTES } from '@/libs/constants'

import { FeatureLinks } from '../features/process/links'

function ProcessPage() {
	return (
		<div className='flex flex-col gap-y-4'>
			{PROCESS_ROUTES.map(item => (
				<FeatureLinks
					key={item.title}
					title={item.title}
					links={item.items}
				/>
			))}
		</div>
	)
}

export default withAuth(ProcessPage, PROCESS_PERMISSIONS, false)
