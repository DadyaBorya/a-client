'use client'

import { ThemeToggle } from '@/components/ui/elements'

import { HeaderLogo } from './HeaderLogo'
import { HeaderProfile } from './HeaderProfile'

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
