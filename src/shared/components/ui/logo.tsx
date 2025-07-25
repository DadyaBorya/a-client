export function Logo({ className }: { className?: string }) {
	return (
		<div className={`${className} text-black dark:text-white`}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 512 512'
				fill='currentColor'
				className='h-full w-full'
			>
				<path d='M456 128a40 40 0 0 0-37.23 54.6l-84.17 84.17a39.86 39.86 0 0 0-29.2 0l-60.17-60.17a40 40 0 1 0-74.46 0L70.6 306.77a40 40 0 1 0 22.63 22.63L193.4 229.23a39.86 39.86 0 0 0 29.2 0l60.17 60.17a40 40 0 1 0 74.46 0l84.17-84.17A40 40 0 1 0 456 128' />
			</svg>
		</div>
	)
}
