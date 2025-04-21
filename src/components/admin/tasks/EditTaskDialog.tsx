import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

import TaskForm from './TaskForm';
import CommentsSection from './CommentSection';

const inputClasses =
	'rounded-[1px] col-span-3 shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2';

const buttonClasses =
	'w-full bg-[#5153FF] hover:bg-[#4649db] rounded-[1px] cursor-pointer';

interface EditTaskDialogProps {
	children: React.ReactNode;
}

export default function EditTaskDialog({ children }: EditTaskDialogProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='text-[#232526] py-5'>
				<SheetDescription>
					<ScrollArea className='h-[500px]'>
						<div className='space-y-10 px-3'>
							<TaskForm inputClasses={inputClasses} />
							<CommentsSection />
						</div>
					</ScrollArea>
				</SheetDescription>

				<SheetClose asChild>
					<div className='px-3'>
						<Button type='submit' className={buttonClasses}>
							Save
						</Button>
					</div>
				</SheetClose>
			</SheetContent>
		</Sheet>
	);
}
