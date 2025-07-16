import Link from 'next/link'

import { ProcessType } from '@/graphql/generated/output'

import { ROUTES } from '@/libs/constants'

const routes = {
	[ProcessType.HstsMvs]: ROUTES.PROCESS.HSTS_MVS.VIEW.build
}

export function ProcessLink({ id, type }: { id: string; type: ProcessType }) {
	const shortId = id.length > 8 ? `${id.slice(0, 4)}...${id.slice(-4)}` : id

	return (
		<Link href={routes[type](id)} className='underline'>
			{shortId}
		</Link>
	)
}
