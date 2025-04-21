export interface Assignee {
	userId: string;
	name: string;
	avatar: string;
}

export interface Task {
	id: string;
	name: string;
	description: string;
	status: string;
	deadline: Date;
	responsibility: Assignee;
	completed_at: number | null;
	user_comment: string[];
}

export interface TaskStatusBadgeProps {
	status: string;
	count: number;
}
