'use client'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

import { CreateHstsMvsForm } from '../features/process/hsts-mvs/create'
import { BorderWrapper } from '../ui/elements'

function CreateHstsMvsFormPage() {
	return (
		<BorderWrapper>
			<CreateHstsMvsForm />
		</BorderWrapper>
	)
}

export default withAuth(CreateHstsMvsFormPage, [Permission.HstsMvsCreate])
