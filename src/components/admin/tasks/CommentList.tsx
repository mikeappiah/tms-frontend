import { Separator } from '@/components/ui/separator';
import CommentItem from './CommentItem';

interface CommentListProps {
	comments: {
		name: string;
		avatarSrc?: string;
		fallbackText: string;
		timestamp: string;
		content: string;
	}[];
}

export default function CommentList({ comments }: CommentListProps) {
	return (
		<div className='space-y-5'>
			{comments.map((comment, index) => (
				<>
					<div key={index}>
						<CommentItem {...comment} />
					</div>
					{index < comments.length - 1 && <Separator />}
				</>
			))}
		</div>
	);
}
