export interface User {
	createdAt: Date;
	role: 'member' | 'admin';
	email: string;
	name: string;
	createdBy: string;
	userId: string;
}
