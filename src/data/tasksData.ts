import { Task } from '@/interfaces/tasks';

const tasksData: Task[] = [
	{
		id: 'task-1',
		name: 'Begin frontend design',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		status: 'open',
		deadline: new Date('2025-04-25'),
		responsibility: {
			userId: 'user-1',
			name: 'Michael Appiah',
			avatar: 'user1.png'
		},

		completed_at: null,
		user_comment: []
	},
	{
		id: 'task-2',
		name: 'complete frontend design',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		status: 'completed',
		deadline: new Date('2025-04-25'),
		responsibility: {
			userId: 'user-2',
			name: 'Emmanuel Asidigbe',
			avatar: 'user2.png'
		},
		completed_at: new Date().getTime(),
		user_comment: []
	}
];

export default tasksData;
