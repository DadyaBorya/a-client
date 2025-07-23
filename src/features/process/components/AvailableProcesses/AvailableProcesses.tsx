'use client'

import { AvailableProcess } from './AvailableProcess'
import { PROCESS_ROUTES } from '@/features/process'

export function AvailableProcesses() {
	return (
		<div className='flex flex-col gap-y-4'>
			{PROCESS_ROUTES.map(item => (
				<AvailableProcess
					key={item.title}
					title={item.title}
					links={item.items}
				/>
			))}
		</div>
	)
}
