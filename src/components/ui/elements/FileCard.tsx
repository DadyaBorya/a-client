import { Download, LucideIcon } from 'lucide-react'
import React from 'react'

import { ProcessType } from '@/graphql/generated/output'

import {
	Badge,
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '../common'
import { Separator } from '../common/separator'

import { formatBytes } from '@/utils'
import { downloadFile } from '@/utils'

interface CarInfoFileProps {
	title: string
	id: string
	inputFilename: string
	outputFilename: string | undefined | null
	extension: string
	size: number
	type: ProcessType
	icon: LucideIcon
}

export function FileCard({
	icon,
	title,
	id,
	inputFilename,
	outputFilename,
	extension,
	size,
	type
}: CarInfoFileProps) {
	const filename = outputFilename || inputFilename

	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle className='flex items-center gap-2'>
					{React.createElement(icon, { className: 'h-5 w-5' })}
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className='space-y-3'>
				<div className='space-y-2'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Файл:</span>
						<span className='text-muted-foreground text-sm'>
							{filename}
						</span>
					</div>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Розмір:</span>
						<span className='text-muted-foreground text-sm'>
							{formatBytes(size)}
						</span>
					</div>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Тип:</span>
						<Badge>{extension}</Badge>
					</div>
				</div>
				<Separator />
				<Button onClick={() => downloadFile(id, type, filename)}>
					<Download />
					Завантажити
				</Button>
			</CardContent>
		</Card>
	)
}
