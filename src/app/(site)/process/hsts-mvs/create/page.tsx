'use client'

import { CreateHstsMvsForm } from '@/components/features/process/hsts-mvs/create'
import { BorderWrapper } from '@/components/ui/elements'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

function CreateHstsMvsFormPage() {
	return (
		<BorderWrapper>
			<CreateHstsMvsForm />
		</BorderWrapper>
	)
}

export default withAuth(CreateHstsMvsFormPage, [Permission.HstsMvsCreate])
