'use client'

import { CreateDmsuForm } from '@/components/features/process/dmsu/create'
import { BorderWrapper } from '@/components/ui/elements'

import { Permission } from '@/graphql/generated/output'

import withAuth from '@/hooks/auth/withAuth'

function CreateDmsuFormPage() {
	return (
		<BorderWrapper>
			<CreateDmsuForm />
		</BorderWrapper>
	)
}

export default withAuth(CreateDmsuFormPage, [Permission.DmsuCreate])
