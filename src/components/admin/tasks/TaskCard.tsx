import { FaRegCommentDots } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RiEditFill } from 'react-icons/ri';
import { Task } from '@/interfaces/tasks';
import EditTaskDialog from '@/components/admin/tasks/EditTaskDialog';

export default function TaskCard({ task }: { task: Task }) {
	const statusColor =
		task.status === 'completed' ? 'bg-[#2FBA56]' : 'bg-[#5153FF]';

	return (
		<div
			className={`bg-white group hover:${statusColor} transition-all p-5 rounded-[5px] space-y-4 border border-[#EFEFEF]`}
		>
			<div className='space-y-3'>
				<div className='flex items-center space-x-2'>
					<h3 className='font-medium capitalize text-[#232526] group-hover:text-white'>
						{task.name}
					</h3>
					<EditTaskDialog>
						<RiEditFill className='text-[#7A7B88] text-xl cursor-pointer group-hover:text-white' />
					</EditTaskDialog>
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
							className={`${statusColor} group-hover:bg-white rounded-full`}
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
