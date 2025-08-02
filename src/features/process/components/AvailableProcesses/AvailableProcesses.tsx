'use client'

import { AvailableProcess } from './AvailableProcess'
import { PROCESS_ROUTES } from '@/features/process'

export function AvailableProcesses() {
	return (
		<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
			{PROCESS_ROUTES.map(item => (
				<AvailableProcess
					key={item.title}
					title={item.title}
					links={item.items}
					className={item.className}
				/>
			))}
		</div>
	)
}
