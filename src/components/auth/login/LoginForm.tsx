'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormGroup from '@/components/FormGroup';

const inputClasses =
	'rounded-[1px] shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2';

const buttonClasses =
	'w-full bg-[#5153FF] hover:bg-[#4649db] rounded-[1px] cursor-pointer';

export default function LoginForm() {
	return (
		<form className='space-y-5'>
			<FormGroup label='Email address' htmlFor='email'>
				<Input
					id='email'
					className={inputClasses}
					type='email'
					placeholder='Enter email'
				/>
			</FormGroup>
			<FormGroup label='Password' htmlFor='password'>
				<Input
					id='password'
					className={inputClasses}
					type='password'
					placeholder='Enter password'
				/>
			</FormGroup>
			<Button className={buttonClasses}>Login</Button>
		</form>
	);
}
