import { Spinner } from '@/shared/components/ui'

interface SecretTextProps {
	value?: string
}

export const SecretText = ({ value }: SecretTextProps) => {
	return (
		<div className='flex h-12 items-center justify-center'>
			{value ? (
				<div className='rounded-md border px-4 py-2 text-center font-mono text-lg select-all'>
					{value}
				</div>
			) : (
				<Spinner />
			)}
		</div>
	)
}
