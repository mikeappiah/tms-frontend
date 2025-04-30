import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { Task } from '@/interfaces/tasks';

const TaskContext = createContext<{
	tasks: Task[];
	setTasks: (tasks: Task[]) => void;
}>({
	tasks: [],
	setTasks: () => {}
});

function TaskProvider({ children }: { children: React.ReactNode }) {
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
		<TaskContext.Provider value={{ tasks, setTasks }}>
			{children}
		</TaskContext.Provider>
	);
}
function useTaskContext() {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error('useTaskContext must be used within a TaskProvider');
	}
	return context;
}
export { TaskProvider, useTaskContext };
