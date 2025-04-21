'use client';
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.'
	}),
	email: z.string().email({
		message: 'Please enter a valid email address.'
	})
});

type FormValues = z.infer<typeof formSchema>;

interface CreateMemberDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const labelClasses = 'text-sm text-[#5153FF]/75 font-medium';

const inputClasses =
	'rounded-[2px] col-span-3 shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2';

const buttonClasses =
	'bg-[#5153FF] hover:bg-[#4649db] rounded-[2px] cursor-pointer';

export function CreateMemberDialog({
	open,
	onOpenChange
}: Readonly<CreateMemberDialogProps>) {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: ''
		}
	});

	function onSubmit(values: FormValues) {
		setIsSubmitting(true);

		// Simulate API call
		setTimeout(() => {
			console.log(values);
			setIsSubmitting(false);
			form.reset();
			onOpenChange(false);
		}, 1000);
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle className='text-[#5153FF]'>Add new member</DialogTitle>
					<DialogDescription>
						Enter the details of the new team member.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel className={labelClasses}>Name</FormLabel>
									<FormControl>
										<Input
											placeholder='John Doe'
											{...field}
											className={inputClasses}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel className={labelClasses}>Email</FormLabel>
									<FormControl>
										<Input
											placeholder='john.doe@example.com'
											type='email'
											{...field}
											className={inputClasses}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter>
							<Button
								type='button'
								variant='outline'
								onClick={() => onOpenChange(false)}
								className='rounded-[2px]'
							>
								Cancel
							</Button>
							<Button
								type='submit'
								disabled={isSubmitting}
								className={buttonClasses}
							>
								{isSubmitting ? 'Creating...' : 'Create member'}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
