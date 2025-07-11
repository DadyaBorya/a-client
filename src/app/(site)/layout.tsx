import { Header } from '@/components/features/header'
import { Sidebar } from '@/components/features/sidebar'
import { LayoutContainer } from '@/components/layouts'

export default function SiteLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='flex h-full flex-col'>
			<div className='fixed inset-y-0 z-50 h-[75px] w-full'>
				<Header />
			</div>
			<Sidebar />
			<LayoutContainer>{children}</LayoutContainer>
		</div>
	)
}
