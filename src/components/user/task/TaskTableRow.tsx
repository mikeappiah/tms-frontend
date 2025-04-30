import { Badge } from '@/components/ui/badge';
import { Task } from '@/interfaces/tasks';
import formatDate from '@/utils/formatDate';
import getStatusIcon from '@/utils/getStatusIcon';
import { MoreHorizontal } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { RiHourglass2Fill } from 'react-icons/ri';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaClockRotateLeft } from 'react-icons/fa6';

interface TaskTableRowProps {
	task: Task;
	// onStatusChange: (
	// 	taskId: string,
	// 	newStatus: 'open' | 'completed' | 'overdue'
	// ) => void;
	onAction: (action: string, taskId: string) => void;
}

export default function TaskTableRow({
	task,
	// onStatusChange,
	onAction
}: TaskTableRowProps) {
	const Icon = getStatusIcon(task.status);

	const getBadgeStyle = (status: string) => {
		switch (status) {
			case 'open':
				return 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100';
			case 'completed':
				return 'bg-green-100 text-green-800 border-green-200 hover:bg-green-100';
			case 'overdue':
				return 'bg-red-100 text-red-800 border-red-200 hover:bg-red-100';
			default:
				return '';
		}
	};

	const getStatusIconForDropdown = (status: string) => {
		switch (status) {
			case 'open':
				return <RiHourglass2Fill className='mr-2 h-4 w-4' />;
			case 'completed':
				return <IoMdCheckmarkCircleOutline className='mr-2 h-4 w-4' />;
			case 'overdue':
				return <FaClockRotateLeft className='mr-2 h-4 w-4' />;
			default:
				return null;
		}
	};

	return (
		<tr className='border-b hover:bg-gray-50'>
			<td className='p-2 sm:p-3 font-medium text-xs'>{task.name}</td>
			<td className='p-2 sm:p-3 text-gray-600 text-xs hidden sm:table-cell'>
				{task.description}
			</td>
			<td className='p-2 sm:p-3 text-gray-600 text-xs hidden md:table-cell'>
				{formatDate(task.deadline)}
				{/* {task.deadline.toLocaleDateString('en-US', {})} */}
			</td>
			<td className='p-2 sm:p-3 table-cell'>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Badge
							variant='outline'
							className={`${getBadgeStyle(
								task.status
							)} text-xs px-1.5 py-0.5 rounded-[3px] cursor-pointer`}
						>
							<span className='mr-1'>
								<Icon />
							</span>
							{task.status}
						</Badge>
					</DropdownMenuTrigger>
					{task.status === 'openg' && (
						<DropdownMenuContent className='p-0'>
							<DropdownMenuItem

							// onSelect={() => onStatusChange(task.taskId, 'completed')}
							>
								{getStatusIconForDropdown('completed')}
								<span className='text-xs font-medium'>Completed</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					)}
				</DropdownMenu>
			</td>
			<td className='p-2 sm:p-3 text-right'>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button className='text-gray-500 hover:text-gray-700 focus:outline-none'>
							<MoreHorizontal className='h-5 w-5' />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuItem
							className='text-xs!'
							onClick={() => onAction('comment', task.taskId)}
						>
							Comment
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</td>
		</tr>
	);
}
