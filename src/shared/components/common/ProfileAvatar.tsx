import '@/shared/components/ui'
import { Avatar, AvatarFallback, Spinner } from '@/shared/components/ui'

interface ProfileAvatarProps {
	username?: string
	loading?: boolean
}

export function ProfileAvatar({
	username,
	loading = false
}: ProfileAvatarProps) {
	return (
		<div className='relative cursor-pointer'>
			<Avatar className='flex size-11 items-center'>
				{loading ? (
					<Spinner />
				) : username ? (
					<AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
				) : (
					<></>
				)}
			</Avatar>
		</div>
	)
}
