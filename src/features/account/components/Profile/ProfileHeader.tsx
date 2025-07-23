import { User } from 'lucide-react'

interface ProfileHeaderProps {
	displayName: string
	username: string
}

export function ProfileHeader({ displayName, username }: ProfileHeaderProps) {
	return (
		<div className='flex items-center space-x-3'>
			<div className='bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full'>
				<User className='text-primary h-6 w-6' />
			</div>
			<div>
				<h1 className='text-foreground text-xl font-semibold'>
					{displayName}
				</h1>
				<p className='text-muted-foreground text-sm'>@{username}</p>
			</div>
		</div>
	)
}
