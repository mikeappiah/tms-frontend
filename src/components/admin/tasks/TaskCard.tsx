import Image from 'next/image';
import { FaRegCommentDots } from 'react-icons/fa';

interface Assignee {
	src: string;
	alt: string;
}

interface TaskCardProps {
	title: string;
	description: string;
	dueDate: string;
	assignees: Assignee[];
	commentsCount: number;
	statusColor: string;
}

export default function TaskCard({
	title,
	description,
	dueDate,
	assignees,
	commentsCount,
	statusColor
}: TaskCardProps) {
	return (
		<div
			className={`bg-white group hover:bg-[${statusColor}] transition-all p-5 rounded-[5px] space-y-4 border border-[#EFEFEF]`}
		>
			<div className='space-y-3'>
				<h3 className='font-medium capitalize text-[#232526] group-hover:text-white'>
					{title}
				</h3>
				<p className='text-sm text-[#7A7B88] group-hover:text-white'>
					{description}
				</p>
			</div>
			<div>
				<span className='text-sm font-medium text-[#7A7B88] group-hover:text-white'>
					{dueDate}
				</span>
			</div>
			<div className='flex items-center justify-between'>
				<div className='flex'>
					{assignees.map((assignee, index) => (
						<Image
							key={index}
							src={assignee.src}
							alt={assignee.alt}
							className={`bg-[${statusColor}] group-hover:bg-white rounded-full ${
								index > 0 ? '-translate-x-5 z-10' : ''
							}`}
							width={35}
							height={35}
						/>
					))}
				</div>
				<div>
					<div className='flex items-center space-x-1 font-medium text-[#7A7B88] group-hover:text-white'>
						<FaRegCommentDots />
						<span>{commentsCount}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
