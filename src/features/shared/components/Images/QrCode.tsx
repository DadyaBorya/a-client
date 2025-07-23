import Image from 'next/image'

import { Spinner } from '@/shared/components/ui'

interface QrCodeProps {
	src?: string
	alt?: string
	size?: number
}

export const QrCode = ({ src, alt = 'QR code', size = 200 }: QrCodeProps) => {
	return (
		<div
			className='flex items-center justify-center'
			style={{ height: size }}
		>
			{src ? (
				<Image src={src} alt={alt} width={size} height={size} />
			) : (
				<Spinner />
			)}
		</div>
	)
}
