import { AlertCircle, Download } from 'lucide-react'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/shared/components/ui'

export function WaitingFileCard({ isError }: { isError?: boolean }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className='flex items-center gap-2'>
					<Download className='h-5 w-5' />
					Результат
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='py-8 text-center'>
					{isError ? (
						<>
							<AlertCircle className='mx-auto mb-4 h-12 w-12 text-red-700 dark:text-red-400' />
							<p className='mb-2 font-medium text-red-700 dark:text-red-400'>
								Помилка обробки
							</p>
							<p className='text-muted-foreground text-sm'>
								Результат недоступний через помилку в процесі
								обробки
							</p>
						</>
					) : (
						<>
							<Download className='text-muted-foreground mx-auto mb-4 h-12 w-12' />
							<p className='text-muted-foreground'>
								Результат буде доступний після завершення
								обробки
							</p>
						</>
					)}
				</div>
			</CardContent>
		</Card>
	)
}
