import { Car, Download, FileText } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { ProcessView } from './View'
import { useFindHstsMvsProcess, usePollingProcess } from '@/features/process'
import { FileCard } from '@/features/shared'
import { Spinner } from '@/shared/components/ui'

export function HstsMvsProcessView() {
	const router = useRouter()
	const { id } = useParams()

	const { data, isLoading, redirectPath, refetch } = useFindHstsMvsProcess(
		id as string
	)

	useEffect(() => {
		if (redirectPath) router.push(redirectPath)
	}, [router, redirectPath])

	usePollingProcess(data?.process.finishedAt, data?.errorMessage, refetch)

	if (isLoading || !data) return <Spinner />

	return (
		<div className='mb-4 flex flex-col gap-4'>
			<ProcessView data={{ ...data }} />

			<div className='flex gap-4'>
				{data.driverLicenseFile && (
					<FileCard
						title='Посвідчення водія'
						icon={FileText}
						file={data.driverLicenseFile}
						type={data.process.type}
					/>
				)}

				<FileCard
					title='Картка транспортного засобу'
					icon={Car}
					file={data.carInfoFile}
					type={data.process.type}
				/>
			</div>
			<FileCard
				title='Результат'
				icon={Download}
				file={data.resultFile}
				type={data.process.type}
			/>
		</div>
	)
}
