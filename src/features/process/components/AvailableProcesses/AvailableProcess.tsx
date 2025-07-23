'use client'

import Link from 'next/link'

import { BorderLayout } from '@/shared/components/layouts'
import { useUserStore } from '@/shared/stores'
import { Route } from '@/shared/types'
import { assertPermission } from '@/shared/utils'

interface AvailableProcessProps {
	title: string
	links: Route[]
}

export function AvailableProcess({ title, links }: AvailableProcessProps) {
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
		<BorderLayout>
			<div className='px-6 py-4'>
				<h2 className='text-lg font-semibold'>{title}</h2>
				<div className='mt-2 flex flex-col gap-2'>
					{availableLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='text-primary flex items-center gap-2 text-base hover:underline'
						>
							{link.icon && (
								<link.icon className='text-muted-foreground size-4' />
							)}
							<span>{link.label}</span>
						</Link>
					))}
				</div>
			</div>
		</BorderLayout>
	)
}
