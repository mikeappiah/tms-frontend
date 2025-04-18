'use client';

import { Label } from '@/components/ui/label';
import { ReactNode } from 'react';

interface FormGroupProps {
	label: string;
	htmlFor: string;
	children: ReactNode;
}
const labelClasses = 'text-sm text-[#5153FF]/75 font-medium';

export default function FormGroup({
	label,
	htmlFor,
	children
}: FormGroupProps) {
	return (
		<div className='space-y-2'>
			<Label htmlFor={htmlFor} className={labelClasses}>
				{label}
			</Label>
			{children}
		</div>
	);
}
