import { TaskStatusBadgeProps } from '@/interfaces/tasks';
import { RiHourglass2Fill } from 'react-icons/ri';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaClockRotateLeft } from 'react-icons/fa6';

export default function TaskStatusBadge({
	status,
	count
}: TaskStatusBadgeProps) {
	let statusColor;
	let icon;

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
	switch (status) {
		case 'open':
			icon = <RiHourglass2Fill />;
			break;
		case 'completed':
			icon = <IoMdCheckmarkCircleOutline />;
			break;
		case 'overdue':
			icon = <FaClockRotateLeft />;
	}

	return (
		<div
			className={`text-[#fdfafc] ${statusColor} flex items-center space-x-4 rounded-3xl py-1 px-2 w-max`}
		>
			<div className='text-2xl'>{icon}</div>
			<span className='capitalize text-sm'>{status}</span>
			<div
				className={`w-6 h-6 rounded-full flex items-center justify-center bg-white/20`}
			>
				{count}
			</div>
		</div>
	);
}
