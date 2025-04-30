'use client';

import { useState } from 'react';
import { useUserContext } from '@/context/userContext';
// import { useRouter } from 'next/navigation';
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
import { Button } from '@/components/ui/button';
import FormGroup from '@/components/FormGroup';
import DatePicker from './DatePicker';
import axios from 'axios';

interface TaskFormProps {
	inputClasses: string;
}
const buttonClasses =
	'bg-[#5153FF] hover:bg-[#4649db] rounded-[2px] cursor-pointer';

export default function TaskForm({ inputClasses }: TaskFormProps) {
	// const router = useRouter();
	const { users } = useUserContext();

	const [name, setName] = useState('');
	const [status, setStatus] = useState('open');
	const [user, setUser] = useState('');
	const [deadline, setDeadline] = useState<Date>();
	const [description, setDescription] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMessage('');
		setIsLoading(true);

		console.log(user);

		if (!name || !deadline || !user || !description) {
			setErrorMessage('Please fill in all required fields.');
			setIsLoading(false);
			return;
		}

		const taskData = {
			userId: user,
			name,
			description,
			deadline,
			status
		};
		console.log(taskData);

		try {
			await axios.post('/api/tasks', taskData, {
				headers: {
					'Content-Type': 'application/json'
				}
			});
		} catch (error) {
			console.error('Error creating task:', error);
			setErrorMessage('An unexpected error occurred.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className='space-y-4' onSubmit={handleSubmit}>
			{errorMessage && <div className='text-red-600'>{errorMessage}</div>}
			<FormGroup label='Task title' htmlFor='name'>
				<Input
					id='name'
					className={inputClasses}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</FormGroup>
			<FormGroup label='Status' htmlFor='status'>
				<Select value={status} onValueChange={setStatus} defaultValue='open'>
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
				<DatePicker deadline={deadline} setDeadline={setDeadline} />
			</FormGroup>
			<FormGroup label='Assign to' htmlFor='responsibility'>
				<Select value={user} onValueChange={setUser} defaultValue=''>
					<SelectTrigger className='w-full shadow-none'>
						<SelectValue placeholder='Select team member' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{users?.map((user) => (
								<SelectItem key={user.userId} value={user.userId}>
									{user.name}
								</SelectItem>
							))}
							`
						</SelectGroup>
					</SelectContent>
				</Select>
			</FormGroup>
			<FormGroup label='Description' htmlFor='description'>
				<Textarea
					placeholder='Provide detailed instructions for this task'
					className={inputClasses}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</FormGroup>
			<Button className={buttonClasses} type='submit' disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Create Task'}
			</Button>
		</form>
	);
}
