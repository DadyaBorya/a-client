import { GeistSans } from 'geist/font/sans'

import {
	ApolloClientProvider,
	ThemeProvider,
	ToasterProvider
} from '@/providers'
import '@/shared/styles/globals.css'

export const metadata = {
	title: {
		default: 'AnalysisPlus',
		template: '%s | AnalysisPlus'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ua' suppressHydrationWarning>
			<head>
				<link rel='icon' href='/favicon.svg' type='image/svg+xml' />
			</head>
			<body className={`${GeistSans.className} antialiased`}>
				<ApolloClientProvider>
					<ThemeProvider>
						<ToasterProvider />
						{children}
					</ThemeProvider>
				</ApolloClientProvider>
			</body>
		</html>
	)
}
