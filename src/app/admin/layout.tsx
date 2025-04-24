'use client';

import { MdDashboard } from 'react-icons/md';
import { FaTasks } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { HiUser } from 'react-icons/hi2';

import DashboardLayout from '@/components/layouts/DashboardLayout';

const adminItems = [
	{
		title: 'dashboard',
		url: '/admin',
		icon: MdDashboard
	},
	{
		title: 'members',
		url: '/admin/members',
		icon: HiUser
	},
	{
		title: 'tasks',
		url: '/admin/tasks',
		icon: FaTasks
	},
	{
		title: 'notifications',
		url: '/admin/notifications',
		icon: IoMdNotifications
	}
];

export default function AdminLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <DashboardLayout items={adminItems}>{children}</DashboardLayout>;
}
