'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormGroup from '@/components/FormGroup';

const inputClasses =
	'rounded-[2px] shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2';

const buttonClasses =
	'w-full bg-[#5153FF] hover:bg-[#4649db] rounded-[2px] cursor-pointer';

export default function ResetPasswordForm() {
	return (
		<form className='space-y-5'>
			<FormGroup label='New Password' htmlFor='password'>
				<Input
					id='password'
					className={inputClasses}
					type='password'
					placeholder='Enter password'
				/>
			</FormGroup>
			<FormGroup label='Confirm Password' htmlFor='confirmPassword'>
				<Input
					id='confirmPassword'
					className={inputClasses}
					type='password'
					placeholder='Confirm password'
				/>
			</FormGroup>
			<Button className={buttonClasses}>Reset</Button>
		</form>
	);
}
