import { ReactNode } from 'react'

interface ProcessViewItemProps {
	icon: ReactNode
	label: string
	value: string
}

export function ProcessViewItem({ icon, label, value }: ProcessViewItemProps) {
	return (
		<div className='flex items-center gap-3'>
			<div className='text-muted-foreground h-5 w-5'>{icon}</div>
			<div>
				<div className='font-medium'>{label}</div>
				<div className='text-muted-foreground text-sm'>{value}</div>
			</div>
		</div>
	)
}
