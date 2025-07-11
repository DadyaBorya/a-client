'use client'

import withAuth from '@/hooks/auth/withAuth'

import { PROCESS_PERMISSIONS, PROCESS_ROUTES } from '@/libs/constants'

import { FeatureLinks } from '../features/process/features-links'

function ProcessPage() {
	return (
		<div className='grid grid-cols-3 gap-4'>
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
