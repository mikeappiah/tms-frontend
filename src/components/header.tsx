import type React from 'react';

interface PageHeaderProps {
	title: string;
	description?: string;
}

export function PageHeader({ title, description }: Readonly<PageHeaderProps>) {
	return (
		<div className='space-y-2'>
			<h1 className='text-3xl text-[#232526] font-medium'>{title}</h1>

			{description && <p className='text-muted-foreground'>{description}</p>}
		</div>
	);
}
