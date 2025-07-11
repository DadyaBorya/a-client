'use client'

import Link from 'next/link'

import { useUserStore } from '@/hooks/user'

import { Route } from '@/libs/types/core'

import { BorderWrapper } from '../../../ui/elements/BorderWrapper'

import { checkPermission } from '@/utils'

interface FeatureLinksProps {
	title: string
	links: Route[]
	className?: string
}

export const FeatureLinks = ({ title, links }: FeatureLinksProps) => {
	const { user } = useUserStore()

	if (!user) return null

	const availableLinks = links.filter(link =>
		checkPermission(
			user.permissions,
			user.isSuperUser,
			link.permissions || []
		)
	)

	if (availableLinks.length === 0) return null

	return (
		<BorderWrapper>
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
		</BorderWrapper>
	)
}
