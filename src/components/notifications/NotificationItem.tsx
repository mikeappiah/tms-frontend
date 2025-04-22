import { Notification } from '@/interfaces/notifications';
import NotificationIcon from './NotificationIcon';
import NotificationTitle from './NotificationTitle';
import { X } from 'lucide-react';

export default function NotificationItem({
	notification
}: {
	notification: Notification;
}) {
	return (
		<div className='py-6 border-b last:border-0'>
			<div className='flex items-start'>
				<div className='p-1 bg-gray-100 rounded mr-3 hover:bg-gray-300 hover:text-gray-50 duration-300'>
					<X className='w-4 h-4 text-gray-400 cursor-pointer' />
				</div>
				<div className='flex-1'>
					<div className='flex justify-between mb-1'>
						<NotificationIcon notification={notification} />
						<div className='text-gray-400 text-sm'>
							{notification.timestamp}
						</div>
					</div>
					<NotificationTitle notification={notification} />
					<p className='text-gray-500 text-sm mt-1'>
						{notification.description}
					</p>
				</div>
			</div>
		</div>
	);
}
