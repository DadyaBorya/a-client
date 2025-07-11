'use client'

import Image from 'next/image'

import { Skeleton } from '@/components/ui/common'

interface QrCodeBoxProps {
	src?: string
	alt?: string
	size?: number
}

export const QrCodeBox = ({
	src,
	alt = 'QR code',
	size = 200
}: QrCodeBoxProps) => {
	return (
		<div
			className='flex items-center justify-center'
			style={{ height: size }}
		>
			{src ? (
				<Image
					src={src}
					alt={alt}
					width={size}
					height={size}
					unoptimized
				/>
			) : (
				<Skeleton
					className='rounded-sm'
					style={{ height: size, width: size }}
				/>
			)}
		</div>
	)
}
