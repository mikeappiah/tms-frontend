interface TaskStatusBadgeProps {
	status: string;
	count: number;
	color: string;
	Icon: React.ComponentType;
}

export default function TaskStatusBadge({
	status,
	count,
	Icon,
	color
}: TaskStatusBadgeProps) {
	return (
		<div
			className={`text-[#fdfafc] bg-[${color}] flex items-center space-x-4 rounded-3xl py-1 px-2 w-max`}
		>
			<div className='text-2xl'>
				<Icon />
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
