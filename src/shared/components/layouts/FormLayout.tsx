import { ReactNode } from 'react'

interface FormWrapperProps {
	title: string
	description: string
	children: ReactNode
}

export function FormLayout({ title, description, children }: FormWrapperProps) {
	return (
		<div className='space-y-6 px-6 py-4'>
			<div>
				<h2 className='text-lg font-semibold'>{title}</h2>
				<p className='text-muted-foreground text-sm'>{description}</p>
			</div>

			{children}
		</div>
	)
}
