import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight
} from 'lucide-react'
import React from 'react'

import {
	Button,
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious
} from '@/components/ui/common'

export const BasePagination = ({
	pages,
	currentPage,
	hasNext,
	hasPrev,
	onPageChange
}: {
	pages: number
	currentPage: number
	hasNext: boolean
	hasPrev: boolean
	onPageChange: (page: number) => void
}) => {
	if (pages <= 1) return null

	const generatePageNumbers = () => {
		const pageNumbers = []

		if (pages <= 7) {
			for (let i = 1; i <= pages; i++) {
				pageNumbers.push(i)
			}
		} else {
			if (currentPage <= 4) {
				pageNumbers.push(1, 2, 3, 4, 5, '...', pages)
			} else if (currentPage >= pages - 3) {
				pageNumbers.push(
					1,
					'...',
					pages - 4,
					pages - 3,
					pages - 2,
					pages - 1,
					pages
				)
			} else {
				pageNumbers.push(
					1,
					'...',
					currentPage - 1,
					currentPage,
					currentPage + 1,
					'...',
					pages
				)
			}
		}

		return pageNumbers
	}

	const pageNumbers = generatePageNumbers()

	return (
		<div className='mt-4 flex items-center justify-center space-x-2'>
			<Button
				variant='outline'
				size='icon'
				disabled={!hasPrev}
				onClick={() => onPageChange(1)}
				className='h-8 w-8'
			>
				<ChevronsLeft className='h-4 w-4' />
			</Button>

			<Button
				variant='outline'
				size='icon'
				disabled={!hasPrev}
				onClick={() => onPageChange(currentPage - 1)}
				className='h-8 w-8'
			>
				<ChevronLeft className='h-4 w-4' />
			</Button>

			{pageNumbers.map((page, index) => (
				<React.Fragment key={index}>
					{page === '...' ? (
						<span className='px-2 text-gray-500'>...</span>
					) : (
						<Button
							variant={
								page === currentPage ? 'default' : 'outline'
							}
							size='icon'
							onClick={() => onPageChange(page as number)}
							className='h-8 w-8'
						>
							{page}
						</Button>
					)}
				</React.Fragment>
			))}

			<Button
				variant='outline'
				size='icon'
				disabled={!hasNext}
				onClick={() => onPageChange(currentPage + 1)}
				className='h-8 w-8'
			>
				<ChevronRight className='h-4 w-4' />
			</Button>

			<Button
				variant='outline'
				size='icon'
				disabled={!hasNext}
				onClick={() => onPageChange(pages)}
				className='h-8 w-8'
			>
				<ChevronsRight className='h-4 w-4' />
			</Button>
		</div>
	)
}
