import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTrigger
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Task } from '@/interfaces/tasks';

import EditTaskForm from './EditTaskForm';
import CommentsSection from './CommentSection';

const inputClasses =
	'rounded-[2px] col-span-3 shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2';

interface EditTaskDialogProps {
	task: Task;
	children: React.ReactNode;
}

export default function EditTaskDialog({
	task,
	children
}: EditTaskDialogProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='text-[#232526] py-5'>
				<SheetDescription>
					<ScrollArea className='h-[500px]'>
						<div className='space-y-10 px-3'>
							<EditTaskForm task={task} inputClasses={inputClasses} />
							<CommentsSection
								assignee={task.taskOwner.name}
								comment={task.userComment}
							/>
						</div>
					</ScrollArea>
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
}
