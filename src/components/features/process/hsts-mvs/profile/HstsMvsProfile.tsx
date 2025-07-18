'use client'

import { Brain, Car, Download, FileText } from 'lucide-react'
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

import { useFindHstsMvsByIdQuery } from '@/graphql/generated/output'

import { HSTS_MVS_STAGES, ROUTES } from '@/libs/constants'

import { getProgressFromMap } from '@/utils'

export function HstsMvsProfile() {
	const router = useRouter()
	const params = useParams()
	const id = params.id as string

	const { data, loading, error, refetch } = useFindHstsMvsByIdQuery({
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

		if (!data?.findHstsMvsById) return

		const { process } = data.findHstsMvsById

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

	if (loading || !data?.findHstsMvsById) {
		return <PageSpinner />
	}

	const {
		carInfoFile,
		driverLicenseFile,
		resultFile,
		process,
		stage,
		errorMessage,
		isAi
	} = data.findHstsMvsById

	return (
		<div className='mb-4 flex flex-col gap-4'>
			<ProcessOverview
				displayName={process.user.displayName}
				status={process.status}
				id={process.id}
				createdAt={process.createdAt}
				type={process.type}
				stage={HSTS_MVS_STAGES[stage]}
				owner={process.owner}
				errorMessage={errorMessage}
				finishedAt={process.finishedAt}
				progress={getProgressFromMap(stage, HSTS_MVS_STAGES)}
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
			<div className='flex gap-4'>
				{driverLicenseFile && (
					<FileCard
						title='Посвідчення водія'
						icon={FileText}
						id={driverLicenseFile.id}
						inputFilename={driverLicenseFile.inputFilename}
						outputFilename={driverLicenseFile.outputFilename}
						size={driverLicenseFile.size}
						extension={driverLicenseFile.extension}
						type={process.type}
					/>
				)}

				<FileCard
					title='Картка транспортного засобу'
					icon={Car}
					id={carInfoFile.id}
					inputFilename={carInfoFile.inputFilename}
					outputFilename={carInfoFile.outputFilename}
					size={carInfoFile.size}
					extension={carInfoFile.extension}
					type={process.type}
				/>
			</div>
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
		</div>
	)
}
