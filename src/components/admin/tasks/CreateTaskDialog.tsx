import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';

import { ScrollArea } from '@/components/ui/scroll-area';

import TaskForm from './TaskForm';

const inputClasses =
	'rounded-[2px] col-span-3 shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2';

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
						<TaskForm inputClasses={inputClasses} />
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
}
