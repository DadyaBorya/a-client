'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import * as React from 'react'

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	return (
		<NextThemesProvider
			{...props}
			attribute='class'
			defaultTheme='dark'
			enableSystem={true}
			disableTransitionOnChange
		>
			{children}
		</NextThemesProvider>
	)
}
