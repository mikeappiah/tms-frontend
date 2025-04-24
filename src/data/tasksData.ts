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
		name: 'Complete frontend design',
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
	},
	{
		id: 'task-3',
		name: 'Begin backend design',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
		status: 'overdue',
		deadline: new Date('2025-04-25'),
		responsibility: {
			userId: 'user-2',
			name: 'Emmanuel Asidigbe',
			avatar: 'user2.png'
		},
		completed_at: new Date().getTime(),
		user_comment: []
	},
	{
		id: 'task-4',
		name: 'Setup CI/CD pipeline',
		description:
			'Configure GitHub Actions for continuous integration and deployment.',
		status: 'open',
		deadline: new Date('2025-04-27'),
		responsibility: {
			userId: 'user-3',
			name: 'Sandra Owusu',
			avatar: 'user3.png'
		},
		completed_at: null,
		user_comment: []
	},
	{
		id: 'task-5',
		name: 'API Gateway Configuration',
		description:
			'Set up routes and custom domain for API Gateway to handle frontend and backend routing.',
		status: 'completed',
		deadline: new Date('2025-04-28'),
		responsibility: {
			userId: 'user-4',
			name: 'Kwame Mensah',
			avatar: 'user4.png'
		},
		completed_at: null,
		user_comment: []
	},
	{
		id: 'task-6',
		name: 'Database schema design',
		description:
			'Design relational and non-relational schemas for user and task data.',
		status: 'completed',
		deadline: new Date('2025-04-24'),
		responsibility: {
			userId: 'user-1',
			name: 'Michael Appiah',
			avatar: 'user1.png'
		},
		completed_at: new Date().getTime(),
		user_comment: []
	},
	{
		id: 'task-7',
		name: 'Deploy backend services',
		description:
			'Push backend microservices to ECS and verify routing through ALB.',
		status: 'overdue',
		deadline: new Date('2025-04-30'),
		responsibility: {
			userId: 'user-2',
			name: 'Emmanuel Asidigbe',
			avatar: 'user2.png'
		},
		completed_at: null,
		user_comment: []
	},
	{
		id: 'task-8',
		name: 'Test and document APIs',
		description:
			'Write unit tests and generate OpenAPI documentation using Swagger.',
		status: 'open',
		deadline: new Date('2025-04-29'),
		responsibility: {
			userId: 'user-3',
			name: 'Sandra Owusu',
			avatar: 'user3.png'
		},
		completed_at: null,
		user_comment: []
	}
];

export default tasksData;
