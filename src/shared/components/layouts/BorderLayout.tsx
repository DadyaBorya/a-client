import { PropsWithChildren } from 'react'

export function BorderLayout({ children }: PropsWithChildren) {
	return <div className='rounded-lg border'>{children}</div>
}
