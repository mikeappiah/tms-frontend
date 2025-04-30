'use client';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover';

export default function DatePicker({
	deadline,
	setDeadline
}: {
	deadline: Date | undefined;
	setDeadline: (date: Date) => void;
}) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'w-full hover:text-muted-foreground justify-start text-left font-normal',
						!deadline && 'text-muted-foreground'
					)}
				>
					<CalendarIcon />
					{deadline ? (
						format(deadline, 'PPP')
					) : (
						<span>Select task deadline</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0' align='start'>
				<Calendar
					mode='single'
					selected={deadline || undefined}
					onSelect={(date) => date && setDeadline(date)}
					initialFocus
					className='bg-transparent'
				/>
			</PopoverContent>
		</Popover>
	);
}
