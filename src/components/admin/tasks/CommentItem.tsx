import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CommentItemProps {
	name: string;
	avatarSrc?: string;
	fallbackText: string;
	timestamp: string;
	content: string;
}

export default function CommentItem({
	name,
	avatarSrc,
	fallbackText,
	timestamp,
	content
}: CommentItemProps) {
	return (
		<div className='space-y-3'>
			<div className='flex items-center space-x-8'>
				<div className='flex items-center space-x-3'>
					<Avatar className='w-7 h-7 bg-blue-300'>
						<AvatarImage src={avatarSrc} />
						<AvatarFallback>{fallbackText}</AvatarFallback>
					</Avatar>
					<span className='text-sm font-medium'>{name}</span>
				</div>
				<div>
					<span className='text-xs text-[#7A7B88]'>{timestamp}</span>
				</div>
			</div>
			<div className='text-[#7A7B88]'>
				<p>{content}</p>
			</div>
		</div>
	);
}
