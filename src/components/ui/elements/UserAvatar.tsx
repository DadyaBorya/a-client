import { Skeleton } from '@/components/ui/common'
import { Avatar, AvatarFallback } from '@/components/ui/common'

export function UserAvatar({ username }: { username?: string }) {
	return (
		<div className='relative cursor-pointer'>
			{username ? (
				<Avatar className='flex size-11 items-center'>
					<AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
				</Avatar>
			) : (
				<Skeleton className='size-11 rounded-full' />
			)}
		</div>
	)
}
