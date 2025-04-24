'use client';

import { RiHourglass2Fill } from 'react-icons/ri';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaClockRotateLeft } from 'react-icons/fa6';

import MetricCard from '@/components/user/dashboard/MetricCard';
import Notifications from '@/components/user/dashboard/Notifications';
import { FaTasks } from 'react-icons/fa';
import { PageHeader } from '@/components/header';

import TasksTable from '@/components/user/dashboard/TasksTable';

export default function Dashboard() {
	return (
		<div className='min-h-screen bg-transparent'>
			<PageHeader title='Dashboard' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
				<MetricCard
					title='Total Tasks'
					value='2000'
					icon={<FaTasks className='h-4 w-4 text-slate-800' />}
					iconBg='bg-white'
					bgColor='bg-gradient-to-r from-slate-500 to-slate-800'
				/>
				<MetricCard
					title='Opened Tasks'
					value='300'
					icon={<RiHourglass2Fill className='h-4 w-4 text-indigo-400' />}
					iconBg='bg-white'
					bgColor='bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400'
				/>
				<MetricCard
					title='Completed Tasks'
					value='1500'
					icon={
						<IoMdCheckmarkCircleOutline className='h-4 w-4 text-teal-500' />
					}
					iconBg='bg-white'
					bgColor='bg-linear-to-r from-green-500 via-emerald-500 to-teal-500'
				/>
				<MetricCard
					title='Overdue Tasks'
					value='200'
					icon={<FaClockRotateLeft className='h-4 w-4 text-red-700' />}
					iconBg='bg-white'
					bgColor='bg-gradient-to-r from-red-400 to-red-700'
				/>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4'>
				<TasksTable />
				<Notifications />
			</div>
		</div>
	);
}
