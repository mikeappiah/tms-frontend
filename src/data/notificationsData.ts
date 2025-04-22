import { Notification } from '@/interfaces/notifications';

const notificationsData: Notification[] = [
	{
		id: '1',
		type: 'joined',
		title: 'New Registration: Finibus Bonorum et Malorum',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
		from: 'Allen Deu',
		timestamp: '24 Nov 2018 at 9:30 AM'
	},
	{
		id: '2',
		type: 'message',
		title: 'Darren Smith sent new message',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
		from: 'Darren',
		timestamp: '24 Nov 2018 at 9:30 AM'
	},
	{
		id: '3',
		type: 'comment',
		title: 'Arin Gansihram Commented on post',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
		from: 'Arin Gansihram',
		timestamp: '24 Nov 2018 at 9:30 AM'
	},
	{
		id: '4',
		type: 'connect',
		title: 'Connect request',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
		from: 'Juliet Den',
		to: 'Allen Depk',
		timestamp: '24 Nov 2018 at 9:30 AM'
	},
	{
		id: '5',
		type: 'connect',
		title: 'Connect request',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
		from: 'Juliet Den',
		to: 'Allen Depk',
		timestamp: '24 Nov 2018 at 9:30 AM'
	},
	{
		id: '6',
		type: 'message',
		title: 'Darren Smith sent new message',
		description:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
		from: 'Juliet Den',
		timestamp: '24 Nov 2018 at 9:30 AM'
	}
];

export default notificationsData;
