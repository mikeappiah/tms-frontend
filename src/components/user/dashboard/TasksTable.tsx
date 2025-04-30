'use client';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import formatDate from '@/utils/formatDate';
import { useTaskContext } from '@/context/taskContext';

export default function TasksTable() {
	const { tasks } = useTaskContext();

	const tasksData = tasks.slice(0, 5);

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

	return (
		<div className='overflow-x-auto lg:col-span-3 bg-white rounded-[5px] p-5 shadow-none border-0'>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='w-[100px]'>Task ID</TableHead>
						<TableHead>Task Name</TableHead>
						<TableHead>Due Date</TableHead>
						<TableHead>Status</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{tasksData.map((task) => (
						<TableRow key={task.taskId}>
							<TableCell className='font-medium'>{task.taskId}</TableCell>
							<TableCell>{task.name}</TableCell>
							<TableCell>{formatDate(task.deadline)}</TableCell>
							<TableCell>
								<Badge
									variant='outline'
									className={`${getBadgeStyle(
										task.status
									)} text-xs px-1.5 py-0.5 rounded-[3px] cursor-pointer`}
								>
									{task.status}
								</Badge>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
