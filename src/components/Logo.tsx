import Image from 'next/image';

export default function Logo() {
	return (
		<div className='w-24 h-24 relative'>
			<Image
				src='/images/logo.png'
				alt='TMS Logo'
				className='object-center object-cover'
				layout='fill'
			/>
		</div>
	);
}
