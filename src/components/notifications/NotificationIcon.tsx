import { Notification } from '@/interfaces/notifications';

export default function NotificationIcon({
	notification
}: {
	notification: Notification;
}) {
	switch (notification.type) {
		case 'joined':
			return (
				<div className='bg-green-500 text-white text-xs py-1 px-2 rounded-[2px]'>
					Joined New User
				</div>
			);
		case 'message':
			return (
				<div className='bg-orange-400 text-white text-xs py-1 px-2 rounded-[2px]'>
					Message
				</div>
			);
		case 'comment':
			return (
				<div className='bg-purple-600 text-white text-xs py-1 px-2 rounded-[2px]'>
					Comment
				</div>
			);
		case 'connect':
			return (
				<div className='bg-blue-500 text-white text-xs py-1 px-2 rounded-[2pz]'>
					Connect
				</div>
			);
	}
}
