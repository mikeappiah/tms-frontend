'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Task } from '@/interfaces/tasks';
// import tasksData from '@/data/tasksData';
import TasksTable from './TasksTable';

export default function Page() {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const response = await axios.get('/api/tasks');
				setTasks(response.data.tasks);
			} catch (err) {
				console.error('Error fetching tasks:', err);
			}
		};

		fetchTasks();
	}, []);

	return (
		<main className='h-full'>
			<TasksTable tasks={tasks} />
		</main>
	);
}
