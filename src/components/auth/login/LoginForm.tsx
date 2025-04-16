import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormGroup from './FormGroup';

export default function LoginForm() {
	const inputClasses =
		'rounded-[1px] shadow-none px-3 py-2 text-secondary focus-visible:border-0 focus-visible:ring-primary/50 focus-visible:ring-2';

	const buttonClasses = 'w-full bg-primary rounded-[1px] cursor-pointer';

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
