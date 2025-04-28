'use client';

import tasksData from '@/data/tasksData';
import TasksTable from './TasksTable';

export default function Page() {
	return (
		<main className='h-full'>
			<TasksTable tasks={tasksData} />
		</main>
	);
}
