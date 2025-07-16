import { AlertCircle, Clock, Crown, FileCheck, User } from 'lucide-react'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Progress
} from '@/components/ui/common'
import { StatusBadge } from '@/components/ui/elements'

import { ProcessType, Status } from '@/graphql/generated/output'

import { ProcessTypeView } from '../type'

import { formatDate } from '@/utils'

export function ProcessOverview({
	status,
	id,
	displayName,
	createdAt,
	type,
	stage,
	owner,
	progress,
	errorMessage
}: {
	status: Status
	id: string
	displayName: string
	createdAt: Date
	type: ProcessType
	stage: string
	progress: number
	owner?: string | null
	errorMessage?: string | null
}) {
	console.log(owner)

	return (
		<Card>
			<CardHeader>
				<div className='flex items-center justify-between'>
					<CardTitle className='flex items-center gap-2'>
						<FileCheck className='h-5 w-5' />
						Процес обробки
						<ProcessTypeView type={type} />
					</CardTitle>
					<StatusBadge status={status} />
				</div>
				<CardDescription>ID: {id}</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='flex items-center gap-3'>
					<User className='text-muted-foreground h-5 w-5' />
					<div>
						<div className='font-medium'>Ініціатор</div>
						<div className='text-muted-foreground text-sm'>
							{displayName}
						</div>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<Clock className='text-muted-foreground h-5 w-5' />
					<div>
						<div className='font-medium'>Створено</div>
						<div className='text-muted-foreground text-sm'>
							{formatDate(createdAt)}
						</div>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<Crown className='text-muted-foreground h-5 w-5' />
					<div>
						<div className='font-medium'>Суб'єкт</div>
						<div className='text-muted-foreground text-sm'>
							{owner || 'Не визначено'}
						</div>
					</div>
				</div>

				<div className='space-y-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Прогрес</span>
						<span className='text-muted-foreground text-sm'>
							{progress}%
						</span>
					</div>
					<Progress value={progress} className='h-2' />
					<div className='text-muted-foreground text-center text-sm'>
						Поточний етап:{' '}
						<span className='font-medium'>{stage}</span>
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
			</CardContent>
		</Card>
	)
}
