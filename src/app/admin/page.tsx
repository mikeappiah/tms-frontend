'use client';

import { RiHourglass2Fill } from 'react-icons/ri';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaClockRotateLeft } from 'react-icons/fa6';

import TaskBarChart from '@/components/admin/dashboard/TaskBarChart';
import MetricCard from '@/components/admin/dashboard/MetricCard';
import Notifications from '@/components/admin/dashboard/Notifications';
import { FaTasks } from 'react-icons/fa';
import { PageHeader } from '@/components/header';

export default function Dashboard() {
	return (
		<div className='min-h-screen bg-transparent'>
			<PageHeader title='Dashboard' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
				<MetricCard
					title='Total Tasks'
					value='2000'
					icon={<FaTasks className='h-4 w-4 text-[#495057]' />}
					iconBg='bg-white'
					bgColor='bg-[#495057]'
				/>
				<MetricCard
					title='Opened Tasks'
					value='300'
					icon={<RiHourglass2Fill className='h-4 w-4 text-[#5153FF]' />}
					iconBg='bg-white'
					bgColor='bg-[#5153FF]'
				/>
				<MetricCard
					title='Completed Tasks'
					value='1500'
					icon={
						<IoMdCheckmarkCircleOutline className='h-4 w-4 text-[#2FBA56]' />
					}
					iconBg='bg-white'
					bgColor='bg-[#2FBA56]'
				/>
				<MetricCard
					title='Overdue Tasks'
					value='200'
					icon={<FaClockRotateLeft className='h-4 w-4 text-[#d32f2f]' />}
					iconBg='bg-white'
					bgColor='bg-[#d32f2f]'
				/>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4'>
				<TaskBarChart />
				<Notifications />
			</div>
		</div>
	);
}
