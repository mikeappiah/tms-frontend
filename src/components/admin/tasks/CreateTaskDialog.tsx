import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import FormGroup from '@/components/FormGroup';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';

import DatePicker from './DatePicker';

const inputClasses =
	'rounded-[1px] col-span-3 shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2';

const buttonClasses =
	'bg-[#5153FF] hover:bg-[#4649db] rounded-[1px] cursor-pointer';

export default function CreateTaskDialog({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader className='px-2 text-left'>
					<DialogTitle className='text-[#5153FF]'>Create New Task</DialogTitle>
					<DialogDescription>
						Create a new task and assign it to a team member
					</DialogDescription>
				</DialogHeader>
				<ScrollArea className='h-[200px]'>
					<div className='grid gap-4 py-4 px-2'>
						<FormGroup label='Task title' htmlFor='name'>
							<Input
								id='name'
								placeholder='Enter task title'
								className={inputClasses}
							/>
						</FormGroup>
						<FormGroup label='Description' htmlFor='description'>
							<Textarea
								placeholder='Provide detailed instructions for this task'
								className={inputClasses}
							/>
						</FormGroup>
						<FormGroup label='Status' htmlFor='status'>
							<Select>
								<SelectTrigger className='w-full shadow-none'>
									<SelectValue placeholder='Select task status' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value='open'>open</SelectItem>
										<SelectItem value='completed'>completed</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</FormGroup>
						<FormGroup label='Deadline' htmlFor='deadline'>
							<DatePicker />
						</FormGroup>
						<FormGroup label='Assign to' htmlFor='responsibility'>
							<Select>
								<SelectTrigger className='w-full shadow-none'>
									<SelectValue placeholder='Select team member' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value='emmanuelasidigbe'>
											Emmanuel Asidigbe
										</SelectItem>
										<SelectItem value='michaelappiah'>
											Michael Appiah
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</FormGroup>
					</div>
				</ScrollArea>

				<DialogFooter>
					<Button type='submit' className={buttonClasses}>
						Create
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
