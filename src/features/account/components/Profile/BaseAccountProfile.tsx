import { KeyRound, UserPen } from 'lucide-react'

import { Permission } from '@/graphql/generated/output'

import { AccountActionButton } from './AccountActionButton'
import { AccountMetadata } from './AccountMetadata'
import { AccountPermissions } from './AccountPermissions'
import { OwnProfileSession } from './OwnSession'
import { ProfileHeader } from './ProfileHeader'
import { ProfileIndicators } from './ProfileIndicators'
import { ProfileSessions } from './Sessions'
import { Spinner } from '@/shared/components/ui'
import { ROUTES } from '@/shared/constants'
import { useUserStore } from '@/shared/stores'

interface BaseAccountProfileProps {
	data?: {
		id: string
		displayName: string
		username: string
		permissions: Permission[]
		isSuperUser: boolean
		isTotpEnabled: boolean
		isBlocked: boolean
		createdAt: any
	}
	isLoading: boolean
}

export function BaseAccountProfile({
	data,
	isLoading = false
}: BaseAccountProfileProps) {
	const { user } = useUserStore()

	if (!data || isLoading) {
		return <Spinner />
	}

	return (
		<div>
			<div className='flex justify-between border-b px-6 py-4'>
				<ProfileHeader
					username={data.username}
					displayName={data.displayName}
				/>
				<div className='grid grid-cols-2'>
					<AccountActionButton
						icon={<UserPen className='size-5' />}
						href={ROUTES.ACCOUNT.UPDATE.build(data.id)}
						requiredPermissions={[
							Permission.UserRead,
							Permission.UserUpdate
						]}
						permissions={user?.permissions!}
						isSuperUser={user?.isSuperUser!}
					/>

					<AccountActionButton
						icon={<KeyRound className='size-5' />}
						href={ROUTES.ACCOUNT.RESET_PASSWORD.build(data.id)}
						requiredPermissions={[Permission.UserResetPassword]}
						permissions={user?.permissions!}
						isSuperUser={user?.isSuperUser!}
					/>
				</div>
			</div>

			<div className='space-y-4 px-6 py-4'>
				<ProfileIndicators
					isSuperUser={data.isSuperUser}
					isTotpEnabled={data.isTotpEnabled}
					isBlocked={data.isBlocked}
				/>

				<AccountMetadata id={data.id} createdAt={data.createdAt} />
				<AccountPermissions permissions={data.permissions} />
			</div>

			{user?.id === data.id && <OwnProfileSession />}

			<ProfileSessions userId={data.id} currentId={user?.id as string} />
		</div>
	)
}
