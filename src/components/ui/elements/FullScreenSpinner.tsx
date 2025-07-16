import { Loader2Icon } from 'lucide-react'

export function FullScreenSpinner() {
	return (
		<div className='bg-background/80 z-100 flex h-screen items-center justify-center backdrop-blur-sm'>
			<Loader2Icon className='text-primary h-20 w-20 animate-spin' />
		</div>
	)
}
