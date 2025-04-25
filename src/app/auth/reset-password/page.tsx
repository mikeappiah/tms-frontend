'use client';

import ResetPasswordForm from '@/components/auth/reset-password/ResetPasswordForm';
import Logo from '@/components/Logo';

export default function ResetPassword() {
	return (
		<div className='h-screen flex justify-center items-center py-20'>
			<div className='mx-auto w-[95%] md:w-5/6 lg:w-1/2'>
				<div className='absolute top-3 right-0'>
					<Logo />
				</div>
				<div className='text-[#5153FF] space-y-12 w-11/12 sm:w-5/6 md:w-3/5 lg:w-5/6 xl:w-2/3 mx-auto'>
					<h2 className='text-4xl font-medium'>Reset password</h2>
					<ResetPasswordForm />
				</div>
			</div>
		</div>
	);
}
