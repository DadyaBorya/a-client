'use client'

import { Control, FieldPath, FieldValues } from 'react-hook-form'

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot
} from '@/components/ui/common'

interface FormOtpFieldProps<T extends FieldValues> {
	control: Control<T>
	name: FieldPath<T>
	label?: string
	description?: string
	disabled?: boolean
	length?: number
}

export function FormOtpField<T extends FieldValues>({
	control,
	name,
	label = 'Код',
	description,
	disabled = false,
	length = 6
}: FormOtpFieldProps<T>) {
	const leftSlots = Math.floor(length / 2)
	const rightSlots = length - leftSlots

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<InputOTP
							maxLength={length}
							{...field}
							disabled={disabled}
						>
							<InputOTPGroup className='w-full'>
								{[...Array(leftSlots)].map((_, i) => (
									<InputOTPSlot
										key={i}
										index={i}
										className='h-12 w-full'
									/>
								))}
							</InputOTPGroup>

							<InputOTPSeparator />

							<InputOTPGroup className='w-full'>
								{[...Array(rightSlots)].map((_, i) => (
									<InputOTPSlot
										key={i + leftSlots}
										index={i + leftSlots}
										className='h-12 w-full'
									/>
								))}
							</InputOTPGroup>
						</InputOTP>
					</FormControl>
					<FormMessage />
					{description && (
						<FormDescription>{description}</FormDescription>
					)}
				</FormItem>
			)}
		/>
	)
}
