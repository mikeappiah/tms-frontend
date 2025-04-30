import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Task } from '@/interfaces/tasks';
import formatDate from '@/utils/formatDate';
import getStatusIcon from '@/utils/getStatusIcon';
import getInitials from '@/utils/getInitials';

import { MoreHorizontal } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem
} from '@/components/ui/dropdown-menu';

interface TaskTableRowProps {
	task: Task;
	onAction: (action: string, taskId: string) => void;
}

export default function TaskTableRow({ task, onAction }: TaskTableRowProps) {
	const Icon = getStatusIcon(task.status);

	let badgeStyle;

	switch (task.status) {
		case 'open':
			badgeStyle =
				'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100';
			break;
		case 'completed':
			badgeStyle =
				'bg-green-100 text-green-800 border-green-200 hover:bg-green-100';
			break;
		case 'overdue':
			badgeStyle = 'bg-red-100 text-red-800 border-red-200 hover:bg-red-100';
	}
	return (
		<tr className='border-b hover:bg-gray-50'>
			<td className='p-2 sm:p-3 font-medium text-xs'>{task.name}</td>
			<td className='p-2 sm:p-3 text-gray-600 text-xs hidden sm:table-cell'>
				{task.description}
			</td>
			<td className='p-2 sm:p-3 text-gray-600 text-xs hidden md:table-cell'>
				{formatDate(task.deadline)}
			</td>
			<td className='p-2 sm:p-3 table-cell'>
				<Badge
					variant='outline'
					className={`${badgeStyle} text-xs px-1.5 py-0.5 rounded-[3px]`}
				>
					<span className='mr-1'>
						<Icon />
					</span>
					{task.status}
				</Badge>
			</td>
			<td className='p-2 sm:p-3'>
				<div className='flex items-center justify-center'>
					<Avatar key={task.taskOwner.userId} className='h-8 w-8'>
						<AvatarImage
							src={`/images/`}
							alt={task.taskOwner.name}
							className='bg-indigo-100'
						/>
						<AvatarFallback className={`bg-red-100 text-[8px] text-red-800`}>
							{getInitials(task.taskOwner.name)}
						</AvatarFallback>
					</Avatar>
				</div>
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
							onClick={() => onAction('edit', task.taskId)}
						>
							<span>Edit</span>
						</DropdownMenuItem>
						<DropdownMenuItem
							className='text-xs!'
							onClick={() => onAction('delete', task.taskId)}
						>
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</td>
		</tr>
	);
}
