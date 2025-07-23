import { CheckCircle, Clock, RefreshCcw, XCircle } from 'lucide-react'

import { Status } from '@/graphql/generated/output'

import { Badge } from '../ui'

const statusMap: Record<
	Status,
	{
		label: string
		icon: React.ElementType
		variant: 'default' | 'secondary' | 'destructive' | 'outline'
	}
> = {
	[Status.End]: {
		label: 'Завершено',
		icon: CheckCircle,
		variant: 'default'
	},
	[Status.Error]: {
		label: 'Помилка',
		icon: XCircle,
		variant: 'destructive'
	},
	[Status.Pending]: {
		label: 'Очікує',
		icon: Clock,
		variant: 'outline'
	},
	[Status.Started]: {
		label: 'Виконується',
		icon: RefreshCcw,
		variant: 'secondary'
	}
}

export function StatusBadge({ status }: { status: Status }) {
	const { label, icon: Icon, variant } = statusMap[status]

	return (
		<Badge variant={variant}>
			<Icon className='mr-1 h-3 w-3' />
			{label}
		</Badge>
	)
}
