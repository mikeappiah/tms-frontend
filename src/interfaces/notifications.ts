type NotificationType = 'joined' | 'message' | 'comment' | 'connect';

export interface Notification {
	id: string;
	type: NotificationType;
	title: string;
	description: string;
	from: string;
	to?: string;
	timestamp: string;
}
