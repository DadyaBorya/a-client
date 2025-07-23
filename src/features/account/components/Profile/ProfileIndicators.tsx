'use client'

import { AlertCircle, Shield } from 'lucide-react'

interface ProfileIndicatorsProps {
	isSuperUser?: boolean
	isTotpEnabled?: boolean
	isBlocked?: boolean
}

export function ProfileIndicators({
	isSuperUser,
	isTotpEnabled,
	isBlocked
}: ProfileIndicatorsProps) {
	return (
		<div className='flex flex-wrap gap-2'>
			{isSuperUser && (
				<div className='bg-primary/10 text-primary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium'>
					<Shield className='mr-1 h-3 w-3' />
					Супер користувач
				</div>
			)}

			{isTotpEnabled && (
				<div className='inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400'>
					<Shield className='mr-1 h-3 w-3' />
					TOTP увімкнено
				</div>
			)}

			{isBlocked && (
				<div className='bg-destructive/10 text-destructive inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium'>
					<AlertCircle className='mr-1 h-3 w-3' />
					Заблоковано
				</div>
			)}
		</div>
	)
}
