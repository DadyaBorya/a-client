'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { BorderLayout } from '@/shared/components/layouts'
import { useUserStore } from '@/shared/stores'
import { Route } from '@/shared/types'
import { assertPermission, cn } from '@/shared/utils'

interface AvailableProcessProps {
	title: string
	links: Route[]
	className?: string
}

export function AvailableProcess({
	title,
	links,
	className
}: AvailableProcessProps) {
	const { user } = useUserStore()

	if (!user) return null

	const availableLinks = links.filter(link =>
		assertPermission(
			user.permissions,
			user.isSuperUser,
			link.permissions || []
		)
	)

	if (availableLinks.length === 0) return null

	return (
		<BorderLayout
			className={cn('group transition-shadow duration-200', className)}
		>
			<div className='p-6'>
				<div className='mb-4 flex items-center justify-between'>
					<h2 className='text-foreground text-xl font-semibold'>
						{title}
					</h2>
					<div className='text-muted-foreground flex items-center text-sm'>
						<span>Доступно дій - {availableLinks.length}</span>
					</div>
				</div>

				<div className='space-y-3'>
					{availableLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='group/link hover:border-border hover:bg-muted/50 flex items-center justify-between rounded-lg border border-transparent p-3 transition-all duration-200'
						>
							<div className='flex items-center gap-3'>
								{link.icon && (
									<div className='bg-primary/10 text-primary group-hover/link:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-md transition-colors'>
										<link.icon className='h-4 w-4' />
									</div>
								)}
								<span className='text-foreground/80 group-hover/link:text-foreground font-medium'>
									{link.label}
								</span>
							</div>
							<ChevronRight className='text-muted-foreground h-4 w-4 transition-all duration-200 group-hover/link:translate-x-1 group-hover/link:text-gray-600' />
						</Link>
					))}
				</div>
			</div>
		</BorderLayout>
	)
}
