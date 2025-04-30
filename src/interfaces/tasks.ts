export interface Assignee {
	userId: string;
	name: string;
	avatar: string;
}

export interface Task {
	taskId: string;
	name: string;
	description: string;
	status: string;
	deadline: Date;
	responsibility: string;
	taskOwner: Assignee;
	completed_at: number | null;
	userComment: string;
}

export interface TaskStatusBadgeProps {
	status: string;
	count: number;
}
