import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';

import { ScrollArea } from '@/components/ui/scroll-area';

import AddTaskForm from './AddTaskForm';

export default function CreateTaskDialog({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader className='px-4 text-left'>
					<DialogTitle className='text-[#5153FF]'>Create New Task</DialogTitle>
					<DialogDescription>
						Create a new task and assign it to a team member
					</DialogDescription>
				</DialogHeader>
				<ScrollArea className='h-[200px]'>
					<div className='p-4'>
						<AddTaskForm />
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
}
