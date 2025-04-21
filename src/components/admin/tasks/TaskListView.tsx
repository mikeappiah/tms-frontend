'use client';

import TaskListItem from './TaskListItem';
import { Task } from '@/interfaces/tasks';

export default function TaskListView({ tasks }: { tasks: Task[] }) {
	return (
		<div className='space-y-5'>
			{tasks.map((task, index) => {
				return <TaskListItem key={index} task={task} />;
			})}
		</div>
	);
}
