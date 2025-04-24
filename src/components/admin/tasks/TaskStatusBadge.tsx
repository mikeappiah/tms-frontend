import { TaskStatusBadgeProps } from '@/interfaces/tasks';
import getStatusIcon from '@/utils/getStatusIcon';

export default function TaskStatusBadge({
	status,
	count
}: TaskStatusBadgeProps) {
	let statusColor;

	switch (status) {
		case 'open':
			statusColor = 'bg-[#5153FF]';
			break;
		case 'completed':
			statusColor = 'bg-[#2FBA56]';
			break;
		case 'overdue':
			statusColor = 'bg-[#d32f2f]';
	}
	const Icon = getStatusIcon(status);

	return (
		<div
			className={`text-[#fdfafc] ${statusColor} flex items-center space-x-4 rounded-3xl py-1 px-2 w-max`}
		>
			<div className='text-2xl'>{<Icon />}</div>
			<span className='capitalize text-sm'>{status}</span>
			<div
				className={`w-6 h-6 rounded-full flex items-center justify-center bg-white/20`}
			>
				{count}
			</div>
		</div>
	);
}
