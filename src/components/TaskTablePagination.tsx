import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TaskTablePaginationProps {
	currentPage: number;
	totalPages: number;
	onNext: () => void;
	onPrev: () => void;
	onPageChange: (page: number) => void;
}

export default function TaskTablePagination({
	currentPage,
	totalPages,
	onNext,
	onPrev,
	onPageChange
}: TaskTablePaginationProps) {
	return (
		<div className='flex items-center justify-between border-t p-2 text-xs'>
			<div className='text-gray-500'>
				Showing page {currentPage} of {totalPages}
			</div>
			<div className='flex items-center space-x-1'>
				<Button
					variant='outline'
					size='sm'
					className='h-6 w-6 p-0'
					onClick={onPrev}
					disabled={currentPage === 1}
				>
					<ChevronLeft className='h-3 w-3' />
					<span className='sr-only'>Previous</span>
				</Button>

				{[...Array(totalPages)].map((_, i) => (
					<Button
						key={i}
						variant={currentPage === i + 1 ? 'default' : 'outline'}
						size='sm'
						className='h-6 w-6 p-0 text-xs bg-[#5153FF]'
						onClick={() => onPageChange(i + 1)}
					>
						{i + 1}
					</Button>
				))}

				<Button
					variant='outline'
					size='sm'
					className='h-6 w-6 p-0'
					onClick={onNext}
					disabled={currentPage === totalPages}
				>
					<ChevronRight className='h-3 w-3' />
					<span className='sr-only'>Next</span>
				</Button>
			</div>
		</div>
	);
}
