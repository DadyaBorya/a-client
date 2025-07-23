import {
	AlarmClockCheck,
	Brain,
	Clock,
	Clock10,
	Crown,
	FileCheck,
	User
} from 'lucide-react'

import { ProcessType, Status } from '@/graphql/generated/output'

import {
	PROCESS_STAGES,
	PROCESS_TYPES,
	ProcessViewItem,
	ProcessViewProgress,
	getProcessProgress
} from '@/features/process'
import { StatusBadge } from '@/shared/components/common'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'
import { useDurationTimer } from '@/shared/hooks'
import { formatDate } from '@/shared/utils'

interface ProcessViewProps {
	data: {
		process: {
			id: string
			type: ProcessType
			status: Status
			createdAt: any
			finishedAt?: any
			owner?: string | null | undefined
			user: {
				displayName: string
			}
		}
		isAi: boolean
		errorMessage?: string | null | undefined
		stage: string
	}
}

export function ProcessView({ data }: ProcessViewProps) {
	const duration = useDurationTimer(
		data.process.createdAt,
		data.process.finishedAt || undefined
	)

	return (
		<Card>
			<CardHeader>
				<div className='flex items-center justify-between'>
					<CardTitle className='flex items-center gap-2'>
						<FileCheck className='h-5 w-5' />
						Процес обробки {PROCESS_TYPES[data.process.type]}
					</CardTitle>
					<StatusBadge status={data.process.status} />
				</div>
				<CardDescription>ID: {data.process.id}</CardDescription>
			</CardHeader>

			<CardContent className='grid grid-cols-3 space-y-4'>
				<ProcessViewItem
					icon={<Clock />}
					label='Створено'
					value={formatDate(data.process.createdAt)}
				/>

				<ProcessViewItem
					icon={<Clock10 />}
					label='Тривалість'
					value={duration}
				/>

				<ProcessViewItem
					icon={<AlarmClockCheck />}
					label='Завершено'
					value={
						data.process.finishedAt
							? formatDate(data.process.finishedAt)
							: 'Не завершено'
					}
				/>

				<ProcessViewItem
					icon={<User />}
					label='Ініціатор'
					value={data.process.user.displayName}
				/>

				<ProcessViewItem
					icon={<Crown />}
					label="Суб'єкт"
					value={data.process.owner || 'Не визначено'}
				/>

				<ProcessViewItem
					icon={<Brain />}
					label='AI - нейрона мержа'
					value={
						data.isAi
							? 'Обробка виконана за допомогою нейромережі'
							: 'Обробка виконана вручну без використання AI'
					}
				/>

				<ProcessViewProgress
					progress={getProcessProgress(
						data.stage,
						data.process.type,
						data.process.status
					)}
					stage={PROCESS_STAGES[data.process.type][data.stage]}
					errorMessage={data.errorMessage}
				/>
			</CardContent>
		</Card>
	)
}
