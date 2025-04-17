import { Label } from '@/components/ui/label';
import { ReactNode } from 'react';

interface FormGroupProps {
	label: string;
	htmlFor: string;
	children: ReactNode;
}

export default function FormGroup({
	label,
	htmlFor,
	children
}: FormGroupProps) {
	const labelClasses = 'text-sm text-[#1CAFF2]/75 font-medium';
	return (
		<div className='space-y-2'>
			<Label htmlFor={htmlFor} className={labelClasses}>
				{label}
			</Label>
			{children}
		</div>
	);
}
