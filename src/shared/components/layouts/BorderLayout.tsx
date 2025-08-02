import { PropsWithChildren } from 'react'

import { cn } from '@/shared/utils'

export function BorderLayout({
	children,
	className
}: PropsWithChildren & { className?: string }) {
	return <div className={cn('rounded-lg border', className)}>{children}</div>
}
