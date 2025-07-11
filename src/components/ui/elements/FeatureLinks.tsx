'use client'

import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/common'

import { Route } from '@/libs/types/core'

import { cn } from '@/utils'

interface FeatureLinksProps {
	title: string
	links: Route[]
	className?: string
}

export const FeatureLinks = ({
	title,
	links,
	className
}: FeatureLinksProps) => {
	return (
		<Card className={cn('p-4', className)}>
			<h2 className='mb-4 text-lg font-semibold'>{title}</h2>
			<CardContent className='flex flex-col gap-2 px-0'>
				{links.map(link => (
					<Link
						key={link.href}
						href={link.href}
						className='text-primary text-base hover:underline'
					>
						{link.label}
					</Link>
				))}
			</CardContent>
		</Card>
	)
}
