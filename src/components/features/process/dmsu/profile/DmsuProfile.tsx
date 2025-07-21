'use client'

import { Brain, Download, FileSignature } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { toast } from 'sonner'

import {
	ProcessInfoItem,
	ProcessOverview
} from '@/components/features/process/process-overview'
import {
	FileCard,
	PageSpinner,
	WaitingFileCard
} from '@/components/ui/elements'

import { useFindDmsuByIdQuery } from '@/graphql/generated/output'

import { DMSU_STAGES, ROUTES } from '@/libs/constants'

import { getProgressFromMap } from '@/utils'

export function DmsuProfile() {
	const router = useRouter()
	const params = useParams()
	const id = params.id as string

	const { data, loading, error, refetch } = useFindDmsuByIdQuery({
		variables: { id },
		errorPolicy: 'all',
		fetchPolicy: 'network-only'
	})

	const intervalRef = useRef<NodeJS.Timeout | null>(null)

	// TODO! SWITCH ON SUBSCRIPTION
	useEffect(() => {
		if (error) {
			toast.error('Помилка', { description: error.message })
			router.push(ROUTES.HOME.path)
		}

		if (!data?.findDmsuById) return

		const { process } = data.findDmsuById

		if (process.finishedAt) {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
				intervalRef.current = null
			}
			return
		}

		if (!intervalRef.current) {
			intervalRef.current = setInterval(() => {
				refetch()
			}, 3000)
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
				intervalRef.current = null
			}
		}
	}, [data, error, refetch, router])

	if (loading || !data?.findDmsuById) {
		return <PageSpinner />
	}

	const {
		personInfoFile,
		withoutWMFile,
		resultFile,
		process,
		stage,
		errorMessage,
		isAi
	} = data.findDmsuById

	return (
		<div className='mb-4 flex flex-col gap-4'>
			<ProcessOverview
				displayName={process.user.displayName}
				status={process.status}
				id={process.id}
				createdAt={process.createdAt}
				type={process.type}
				stage={DMSU_STAGES[stage]}
				owner={process.owner}
				errorMessage={errorMessage}
				finishedAt={process.finishedAt}
				progress={getProgressFromMap(stage, DMSU_STAGES)}
				children={
					<ProcessInfoItem
						icon={<Brain />}
						label='AI - нейрона мержа'
						value={
							isAi
								? 'Обробка виконана за допомогою нейромережі'
								: 'Обробка виконана вручну без використання AI'
						}
					/>
				}
			/>
			<FileCard
				title='Інформація про особу'
				icon={FileSignature}
				id={personInfoFile.id}
				inputFilename={personInfoFile.inputFilename}
				outputFilename={personInfoFile.outputFilename}
				size={personInfoFile.size}
				extension={personInfoFile.extension}
				type={process.type}
			/>
			<div className='grid grid-cols-2 gap-4'>
				{resultFile ? (
					<FileCard
						title='Результат'
						icon={Download}
						id={resultFile.id}
						inputFilename={resultFile.inputFilename}
						outputFilename={resultFile.outputFilename}
						size={resultFile.size}
						extension={resultFile.extension}
						type={process.type}
					/>
				) : (
					<WaitingFileCard isError={errorMessage !== null} />
				)}
				{withoutWMFile ? (
					<FileCard
						title='Результат - Вхідний файл без водяних знаків'
						icon={Download}
						id={withoutWMFile.id}
						inputFilename={withoutWMFile.inputFilename}
						outputFilename={withoutWMFile.outputFilename}
						size={withoutWMFile.size}
						extension={withoutWMFile.extension}
						type={process.type}
					/>
				) : (
					<WaitingFileCard isError={errorMessage !== null} />
				)}
			</div>
		</div>
	)
}
