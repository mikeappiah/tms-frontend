import { cn } from '@/lib/utils';

export default function NotificationsItem({
	color,
	title,
	message,
	time
}: Readonly<{
	color: string;
	title: string;
	message: string;
	time: string;
}>) {
	return (
		<div className='flex gap-3'>
			<div className={cn('h-3 w-3 rounded-full mt-1.5', color)} />
			<div className='space-y-1'>
				<h4 className='font-medium text-gray-800'>{title}</h4>
				<p className='text-gray-600'>{message}</p>
				<div className='flex items-center text-gray-500 text-sm'>
					<span className='mr-1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-clock'
						>
							<circle cx='12' cy='12' r='10' />
							<polyline points='12 6 12 12 16 14' />
						</svg>
					</span>
					{time}
				</div>
			</div>
		</div>
	);
}
