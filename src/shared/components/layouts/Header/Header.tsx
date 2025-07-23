import { HeaderLogo } from './HeaderLogo'
import { HeaderProfile } from './HeaderProfile'
import { ThemeToggle } from '@/shared/components/common'

export function Header() {
	return (
		<header className='border-border bg-card flex h-full items-center justify-between gap-x-4 border-b p-4'>
			<HeaderLogo />
			<div className='flex items-center gap-x-4'>
				<HeaderProfile />
				<ThemeToggle />
			</div>
		</header>
	)
}
