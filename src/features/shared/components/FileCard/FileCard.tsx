import { Download, LucideIcon } from 'lucide-react'
import React from 'react'

import { ProcessType, StorageModel } from '@/graphql/generated/output'

import { WaitingFileCard } from './WaitingFileCard'
import {
	Badge,
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'
import { FileDownloadService } from '@/shared/services'
import { formatBytes } from '@/shared/utils'

interface FileCardProps {
	title: string
	icon: LucideIcon
	type: ProcessType
	file?: StorageModel | null | undefined
	isError?: boolean
}

export function FileCard({ title, icon, file, type, isError }: FileCardProps) {
	if (!file) {
		return <WaitingFileCard />
	}

	if (isError) {
		return <WaitingFileCard isError={isError} />
	}

	const filename = file.outputFilename || file.inputFilename

	async function onDownload() {
		if (!file) return

		await FileDownloadService.downloadProcessFile(file.id, type, filename)
	}

	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle>
					<div className='flex items-center gap-2'>
						{React.createElement(icon, { className: 'h-5 w-5' })}
						{title}
					</div>
				</CardTitle>
			</CardHeader>
			<CardContent className='space-y-3'>
				<div className='space-y-2 border-b pb-3'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Файл:</span>
						<span className='text-muted-foreground text-sm'>
							{filename}
						</span>
					</div>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Розмір:</span>
						<span className='text-muted-foreground text-sm'>
							{formatBytes(file.size)}
						</span>
					</div>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Тип:</span>
						<Badge>{file.extension}</Badge>
					</div>
				</div>

				<Button onClick={onDownload} className='mt-4'>
					<Download className='mr-2 h-4 w-4' />
					Завантажити
				</Button>
			</CardContent>
		</Card>
	)
}
