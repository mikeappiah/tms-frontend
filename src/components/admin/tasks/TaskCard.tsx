import { FaRegCommentDots } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RiEditFill } from 'react-icons/ri';
import { Task } from '@/interfaces/tasks';
import EditTaskDialog from '@/components/admin/tasks/EditTaskDialog';
import { RiDeleteBin4Fill } from 'react-icons/ri';

export default function TaskCard({ task }: { task: Task }) {
	let statusColor;

	switch (task.status) {
		case 'open':
			statusColor = 'hover:bg-[#5153FF]';
			break;
		case 'completed':
			statusColor = 'hover:bg-[#2FBA56]';
			break;
		case 'overdue':
			statusColor = 'hover:bg-[#d32f2f]';
	}

	return (
		<div
			className={`bg-white group ${statusColor} transition-all p-5 rounded-[5px] space-y-4 border border-[#EFEFEF]`}
		>
			<div className='space-y-3'>
				<div className='flex items-center space-x-2'>
					<h3 className='font-medium capitalize text-[#232526] group-hover:text-white'>
						{task.name}
					</h3>
					<EditTaskDialog>
						<RiEditFill className='text-[#7A7B88] text-xl cursor-pointer group-hover:text-white' />
					</EditTaskDialog>
					<RiDeleteBin4Fill className='text-[#7A7B88] text-xl cursor-pointer group-hover:text-white' />
				</div>

				<p className='text-sm text-[#7A7B88] group-hover:text-white'>
					{task.description}
				</p>
			</div>
			<div>
				<span className='text-sm font-medium text-[#7A7B88] group-hover:text-white'>
					{task.deadline.toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</span>
			</div>
			<div className='flex items-center justify-between'>
				<div className='flex'>
					<Avatar className='w-10 h-10'>
						<AvatarImage
							src={`/images/${task.responsibility.avatar}`}
							alt={task.responsibility.name}
							className={`bg-[${statusColor}] group-hover:bg-white rounded-full`}
						/>
						<AvatarFallback>
							{task.responsibility.name
								.split(' ')
								.slice(0, 2)
								.map((part) => part[0])
								.join('')}
						</AvatarFallback>
					</Avatar>
				</div>
				<div>
					<div className='flex items-center space-x-1 font-medium text-[#7A7B88] group-hover:text-white'>
						<FaRegCommentDots />
						<span>{task.user_comment.length || 5} </span>
					</div>
				</div>
			</div>
		</div>
	);
}
