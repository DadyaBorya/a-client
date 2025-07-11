import { Loader2Icon } from 'lucide-react'
import React from 'react'

export const PageSpinner = () => {
	return (
		<div className='bg-background/80 flex h-full items-center justify-center'>
			<Loader2Icon className='text-primary h-20 w-20 animate-spin' />
		</div>
	)
}
