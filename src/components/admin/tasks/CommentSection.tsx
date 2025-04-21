import CommentList from './CommentList';

export default function CommentsSection() {
	const commentsData = [
		{
			name: 'Michael Appiah',
			avatarSrc: '/images/user1.png',
			fallbackText: 'MA',
			timestamp: '25 April 2025 - 2:15pm',
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
		},
		{
			name: 'Emmanuel Asidigbe',
			avatarSrc: '/images/user2.png',
			fallbackText: 'EA',
			timestamp: '24 April 2025 - 5:15pm',
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
		}
	];

	return (
		<div className='flex flex-col space-y-4 text-[#232526]'>
			<h3 className='text-lg'>Comments</h3>
			<CommentList comments={commentsData} />
		</div>
	);
}
