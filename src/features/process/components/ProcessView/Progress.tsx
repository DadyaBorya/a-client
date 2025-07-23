import { AlertCircle } from 'lucide-react'

import { Progress } from '@/shared/components/ui'

interface ProcessViewProgressProps {
	progress: number
	stage: string
	errorMessage?: string | undefined | null
}

export function ProcessViewProgress({
	progress,
	stage,
	errorMessage
}: ProcessViewProgressProps) {
	return (
		<div className='col-span-3 space-y-2'>
			<div className='flex items-center justify-between'>
				<span className='text-sm font-medium'>Прогрес</span>
				<span className='text-muted-foreground text-sm'>
					{progress}%
				</span>
			</div>
			<Progress value={progress} className='h-2' />
			<div className='text-muted-foreground text-center text-sm'>
				Поточний етап: <span className='font-medium'>{stage}</span>
				{errorMessage && (
					<div className='mt-2 flex items-center justify-center gap-1.5 rounded-md bg-red-50 px-2 py-1.5 text-red-700 dark:bg-red-950/20 dark:text-red-400'>
						<AlertCircle className='h-4 w-4' />
						<span className='text-xs font-medium'>
							{errorMessage}
						</span>
					</div>
				)}
			</div>
		</div>
	)
}
