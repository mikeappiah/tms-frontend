import { Badge } from '@/components/ui/badge';

export default function TaskTableHeader({ numTasks }: { numTasks: number }) {
	return (
		<div className='flex items-center p-2 sm:p-3 border-b'>
			<h2 className='text-sm font-medium'>Tasks List</h2>
			<Badge
				variant='secondary'
				className='ml-2 bg-indigo-100 rounded-[5px] font-semibold text-indigo-800 hover:bg-indigo-100 text-xs'
			>
				{numTasks}
			</Badge>
		</div>
	);
}
