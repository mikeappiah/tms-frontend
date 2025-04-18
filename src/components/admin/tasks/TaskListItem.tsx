import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaRegCommentDots } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { RiEditFill } from 'react-icons/ri';

import { Task } from '@/interfaces/tasks';

export default function TaskListItem({ task }: { task: Task }) {
	const statusColor = task.status === 'completed' ? '#2FBA56' : '#5153FF';

	return (
		<div
			className={`flex items-center p-4 group bg-white space-x-4 hover:bg-[${statusColor}] rounded-[5px]`}
		>
			<div className='flex-1 space-y-1'>
				<Badge
					className={`bg-[${statusColor}] inline-block mb-3 px-4 py-1 group-hover:bg-white text-white group-hover:text-black rounded-2xl text-xs`}
				>
					{task.status}
				</Badge>
				<div className='flex items-center space-x-2'>
					<h3 className='capitalize font-medium text-[#232526] group-hover:text-white'>
						{task.name}
					</h3>
					<RiEditFill className='text-[#7A7B88] text-xl cursor-pointer group-hover:text-white' />
				</div>

				<p className='text-sm text-[#7A7B88] group-hover:text-white'>
					{task.description}
				</p>
				<span className='text-xs text-[#7A7B88] group-hover:text-white'>
					{task.deadline.toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</span>
			</div>
			<div className='flex items-center space-x-2'>
				<div className='flex -space-x-2 rtl:space-x-reverse'>
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
				<div className='flex items-center space-x-1 text-xs text-gray-600 group-hover:text-white'>
					<FaRegCommentDots className='h-4 w-4' />
					<span>{task.user_comment.length || 5} </span>
				</div>
			</div>
		</div>
	);
}
