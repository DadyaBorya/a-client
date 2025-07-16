import Link from 'next/link'

import { Logo } from '@/components/ui/elements'

import { ROUTES } from '@/libs/constants'

export function HeaderLogo() {
	return (
		<Link
			href={ROUTES.HOME.path}
			className='flex items-center gap-x-4 transition-opacity hover:opacity-75'
		>
			<Logo className='h-12 w-12' />
			<div className='hidden leading-tight lg:block'>
				<h2 className='text-accent-foreground text-lg font-semibold tracking-wider'>
					AnalysisPlus
				</h2>
				<p className='text-muted-foreground text-sm'>Аналіз даних</p>
			</div>
		</Link>
	)
}
