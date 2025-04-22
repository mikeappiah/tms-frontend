import { Notification } from '@/interfaces/notifications';

export default function NotificationTitle({
	notification
}: {
	notification: Notification;
}) {
	switch (notification.type) {
		case 'joined':
			return <div className='font-medium'>{notification.title}</div>;
		case 'message':
			return <div className='font-medium'>{notification.title}</div>;
		case 'comment':
			return <div className='font-medium'>{notification.title}</div>;
		case 'connect':
			return (
				<div className='font-medium'>
					{notification.from} <span className='text-blue-500'>Connect</span>{' '}
					{notification.to}
				</div>
			);
	}
}
