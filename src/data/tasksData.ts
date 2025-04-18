import { RxTarget } from 'react-icons/rx';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

interface Assignee {
	src: string;
	alt: string;
}

interface TaskItem {
	title: string;
	description: string;
	dueDate: string;
	assignees: Assignee[];
	commentsCount: number;
	statusColor: string;
}

interface TaskGroup {
	status: string;
	count: number;
	color: string;
	icon: React.ComponentType;
	items: TaskItem[];
}

const tasksData: TaskGroup[] = [
	{
		status: 'in progress',
		icon: RxTarget,
		count: 4,
		color: '#5153FF',
		items: [
			{
				title: 'Begin frontend design',
				description:
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
				dueDate: 'April 25, 2025',
				assignees: [
					{ src: '/images/user-1.png', alt: 'User logo' },
					{ src: '/images/user-2.png', alt: 'User logo' }
				],
				commentsCount: 7,
				statusColor: '#5153FF'
			}
		]
	},
	{
		status: 'completed',
		icon: IoMdCheckmarkCircleOutline,
		count: 1,
		color: '#2FBA56',
		items: [
			{
				title: 'Complete frontend design',
				description:
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
				dueDate: 'April 25, 2025',
				assignees: [
					{ src: '/images/user-1.png', alt: 'User logo' },
					{ src: '/images/user-2.png', alt: 'User logo' }
				],
				commentsCount: 7,
				statusColor: '#2FBA56'
			}
		]
	}
];

export default tasksData;
