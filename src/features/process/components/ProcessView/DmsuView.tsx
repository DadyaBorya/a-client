import { Download, FileSignature } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { ProcessView } from './View'
import { useFindDmsuProcess, usePollingProcess } from '@/features/process'
import { FileCard } from '@/features/shared'
import { Spinner } from '@/shared/components/ui'

export function DmsuProcessView() {
	const router = useRouter()
	const { id } = useParams()

	const { data, isLoading, redirectPath, refetch } = useFindDmsuProcess(
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

			<FileCard
				title='Інформація про особу'
				icon={FileSignature}
				file={data.personInfoFile}
				type={data.process.type}
			/>

			<div className='grid grid-cols-2 gap-4'>
				<FileCard
					title='Результат'
					icon={Download}
					file={data.resultFile}
					type={data.process.type}
				/>
				<FileCard
					title='Результат - Вхідний файл без водяних знаків'
					icon={Download}
					file={data.withoutWMFile}
					type={data.process.type}
				/>
			</div>
		</div>
	)
}
