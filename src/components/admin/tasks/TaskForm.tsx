import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';

import FormGroup from '@/components/FormGroup';
import DatePicker from './DatePicker';

interface TaskFormProps {
	inputClasses: string;
}

export default function TaskForm({ inputClasses }: TaskFormProps) {
	return (
		<div className='space-y-4'>
			<FormGroup label='Task title' htmlFor='name'>
				<Input id='name' className={inputClasses} />
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
							<SelectItem value='michaelappiah'>Michael Appiah</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</FormGroup>
			<FormGroup label='Description' htmlFor='description'>
				<Textarea
					placeholder='Provide detailed instructions for this task'
					className={inputClasses}
				/>
			</FormGroup>
		</div>
	);
}
