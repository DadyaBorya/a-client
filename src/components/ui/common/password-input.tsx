import { Eye, EyeOff } from 'lucide-react'
import * as React from 'react'

import { Input } from './input'

interface PasswordInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

export function PasswordInput({ className, ...props }: PasswordInputProps) {
	const [showPassword, setShowPassword] = React.useState(false)
	const toggleVisibility = () => setShowPassword(prev => !prev)

	return (
		<div className='relative'>
			<Input
				type={showPassword ? 'text' : 'password'}
				className={className}
				{...props}
			/>
			<button
				type='button'
				onClick={toggleVisibility}
				tabIndex={-1}
				className='text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer transition-colors'
			>
				{showPassword ? (
					<EyeOff className='size-4' />
				) : (
					<Eye className='size-4' />
				)}
			</button>
		</div>
	)
}
