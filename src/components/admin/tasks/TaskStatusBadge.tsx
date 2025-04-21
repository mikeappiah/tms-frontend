import { TaskStatusBadgeProps } from '@/interfaces/tasks';
import { RiHourglass2Fill } from 'react-icons/ri';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

export default function TaskStatusBadge({
	status,
	count
}: TaskStatusBadgeProps) {
	const statusColor = status === 'completed' ? 'bg-[#2FBA56]' : 'bg-[#5153FF]';

	return (
		<div
			className={`text-[#fdfafc] ${statusColor} flex items-center space-x-4 rounded-3xl py-1 px-2 w-max`}
		>
			<div className='text-2xl'>
				{status === 'open' ? (
					<RiHourglass2Fill />
				) : (
					<IoMdCheckmarkCircleOutline />
				)}
			</div>
			<span className='capitalize text-sm'>{status}</span>
			<div
				className={`w-6 h-6 rounded-full flex items-center justify-center bg-white/20`}
			>
				{count}
			</div>
		</div>
	);
}
