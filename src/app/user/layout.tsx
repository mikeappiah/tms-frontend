'use client';

import { MdDashboard } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';

import DashboardLayout from '@/components/layouts/DashboardLayout';

const userItems = [
	{
		title: 'dashboard',
		url: '/user',
		icon: MdDashboard
	},
	{
		title: 'tasks',
		url: '/user/tasks',
		icon: FaTasks
	}
];

export default function UserLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <DashboardLayout items={userItems}>{children}</DashboardLayout>;
}
