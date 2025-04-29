export interface LoginCredentials {
	username: string;
	password?: string;
	newPassword?: string;
}

export interface LoginResponse {
	token?: string;
	challenge?: string;
	session?: string;
	user?: User;
}

interface User {
	createdAt: Date;
	role: 'admin' | 'member';
	email: string;
	name: string;
	createdBy: string;
	userId: string;
	groups: string[];
	email_verified: boolean;
	sub: string;
	authenticationTime: Date;
}
