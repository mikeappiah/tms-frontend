import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IoMdNotifications } from 'react-icons/io';

import NotificationItem from './NotificationItem';

export default function Notifications() {
	return (
		<Card className='bg-white border border-gray-200 shadow-sm lg:col-span-2 relative'>
			<CardHeader>
				<CardTitle className='text-[#232526] text-xl'>Notifications</CardTitle>
			</CardHeader>
			<CardContent className='space-y-6'>
				<NotificationItem
					color='bg-blue-500'
					title='User confirmation'
					message='Hai Mike, are you available for todays session'
					time='2 months ago.'
				/>
				<NotificationItem
					color='bg-green-500'
					title='Continuous evaluation'
					message='Pick up Mary from school on the way to office'
					time='6 months ago.'
				/>
				<NotificationItem
					color='bg-red-500'
					title='Promotion'
					message='Can you please assign the task for the team'
					time='1 year ago.'
				/>
			</CardContent>
			<button className='absolute bottom-4 right-4 p-2 bg-green-500 rounded-full'>
				<IoMdNotifications className='h-5 w-5 text-white' />
			</button>
		</Card>
	);
}
