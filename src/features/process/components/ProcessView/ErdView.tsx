import { Download, FileText } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { ProcessView } from './View'
import { useFindErdProcess, usePollingProcess } from '@/features/process'
import { FileCard } from '@/features/shared'
import { Spinner } from '@/shared/components/ui'

export function ErdProcessView() {
	const router = useRouter()
	const { id } = useParams()

	const { data, isLoading, redirectPath, refetch } = useFindErdProcess(
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
				{data.acceptedInputFile && (
					<FileCard
						title='Прийняті довіреності'
						icon={FileText}
						file={data.acceptedInputFile}
						type={data.process.type}
					/>
				)}

				{data.grantedInputFile && (
					<FileCard
						title='Надані довіреності'
						icon={FileText}
						file={data.grantedInputFile}
						type={data.process.type}
					/>
				)}
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
