import LoginForm from '@/components/auth/login/LoginForm';
import Logo from '@/components/Logo';

export default function Login() {
	return (
		<div className='h-screen lg:flex'>
			<div className='bg-cover bg-gray-50 bg-[url(/images/login.png)] bg-center h-full hidden lg:block lg:w-1/2' />
			<div className='h-full bg-white lg:w-1/2 flex items-center justify-center relative'>
				<div className='absolute top-3 right-0'>
					<Logo />
				</div>
				<div className='text-[#050a44] space-y-12 w-11/12 sm:w-5/6 md:w-3/5 lg:w-5/6 xl:w-2/3 mx-auto'>
					<h2 className='text-4xl font-medium'>Welcome!</h2>
					<LoginForm />
				</div>
			</div>
		</div>
	);
}
