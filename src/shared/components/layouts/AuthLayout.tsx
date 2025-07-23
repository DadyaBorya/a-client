import { PropsWithChildren } from 'react'

import { Card, CardContent, CardHeader, CardTitle, Logo } from '../ui'

interface AuthLayoutProps {
	heading: string
}

export function AuthLayout({
	children,
	heading
}: PropsWithChildren<AuthLayoutProps>) {
	return (
		<div className='flex h-full items-center justify-center'>
			<Card className='w-full max-w-[450px]'>
				<CardHeader className='flex flex-row items-center justify-center gap-x-4'>
					<Logo className='h-12 w-12' />
					<CardTitle>{heading}</CardTitle>
				</CardHeader>
				<CardContent>{children}</CardContent>
			</Card>
		</div>
	)
}
