import { Loader2Icon } from 'lucide-react'

export function FullScreenSpinner() {
	return (
		<div className='bg-background/80 fixed inset-0 z-100 flex items-center justify-center backdrop-blur-sm'>
			<Loader2Icon className='text-primary h-20 w-20 animate-spin' />
		</div>
	)
}
