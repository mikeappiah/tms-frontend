'use client';

import TaskTable from '@/components/user/task/TaskTable';
import tasksData from '@/data/tasksData';

export default function Page() {
	return (
		<main className='h-full'>
			<TaskTable tasks={tasksData} />
		</main>
	);
}
