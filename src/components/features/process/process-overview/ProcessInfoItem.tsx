import { ReactNode } from 'react'

interface InfoItemProps {
	icon: ReactNode
	label: string
	value: string
}

export const ProcessInfoItem = ({ icon, label, value }: InfoItemProps) => (
	<div className='flex items-center gap-3'>
		<div className='text-muted-foreground h-5 w-5'>{icon}</div>
		<div>
			<div className='font-medium'>{label}</div>
			<div className='text-muted-foreground text-sm'>{value}</div>
		</div>
	</div>
)
