'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormGroup from '@/components/FormGroup';

import { LoginCredentials, LoginResponse } from '@/interfaces/auth';

const inputClasses =
	'rounded-[2px] shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2';

const buttonClasses =
	'w-full bg-[#5153FF] hover:bg-[#4649db] rounded-[2px] cursor-pointer';

export default function ResetPasswordForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMessage('');
		setIsLoading(true);

		if (!email || !password) {
			setErrorMessage('Please fill in all fields.');
			setIsLoading(false);

			return;
		}

		try {
			const session = localStorage.getItem('session');
			const response = await axios.post(
				'https://9buy272svi.execute-api.eu-central-1.amazonaws.com/test/reset-password',
				JSON.stringify({
					username: email,
					newPassword: password,
					session
				} as LoginCredentials)
			);

			const data: LoginResponse = response.data;

			if (data.token) {
				switch (data.user?.role) {
					case 'admin':
						router.push('/admin');
						break;
					case 'member':
						router.push('/user');
						break;
					default:
						setErrorMessage('Invalid user role.');
						return;
				}
			} else {
				setErrorMessage('Password reset failed.');
			}
		} catch (error) {
			console.error('Password reset error:', error);
			setErrorMessage('An unexpected error occurred.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className='space-y-5' onSubmit={handleSubmit}>
			{errorMessage && <div className='text-red-500'>{errorMessage}</div>}
			<FormGroup label='Email' htmlFor='email'>
				<Input
					id='email'
					className={inputClasses}
					type='text'
					placeholder='Enter email'
					disabled={isLoading}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormGroup>
			<FormGroup label='New Password' htmlFor='password'>
				<Input
					id='password'
					className={inputClasses}
					type='password'
					placeholder='Enter password'
					disabled={isLoading}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</FormGroup>

			<Button className={buttonClasses} type='submit' disabled={isLoading}>
				{isLoading ? 'Resetting' : 'Reset'}
			</Button>
		</form>
	);
}
