import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import getInitials from '@/utils/getInitials';

export default function CommentsSection({
	assignee,
	comment
}: {
	assignee: string;
	comment: string;
}) {
	return (
		<div className='flex flex-col space-y-4 text-[#232526]'>
			<h3 className='text-lg'>Comments</h3>
			<div className='space-y-3'>
				<div className='flex items-center space-x-8'>
					<div className='flex items-center space-x-3'>
						<Avatar className='w-7 h-7 bg-blue-300'>
							<AvatarImage src='/images/user1.png' />
							<AvatarFallback>{getInitials(assignee)}</AvatarFallback>
						</Avatar>
					</div>
				</div>
				<div className='text-[#7A7B88]'>
					<p>{comment}</p>
				</div>
			</div>
		</div>
	);
}
