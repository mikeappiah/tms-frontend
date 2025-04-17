'use client';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/navigation/AppSidebar';
import { IconType } from 'react-icons';

type SidebarItem = {
	title: string;
	url: string;
	icon: IconType;
};

interface DashboardLayoutProps {
	children: React.ReactNode;
	items: SidebarItem[];
}

export default function DashboardLayout({
	children,
	items
}: DashboardLayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar items={items} />
			<main>
				<SidebarTrigger className='hover:bg-transparent hover:text-[#1CAFF2]' />
				{children}
			</main>
		</SidebarProvider>
	);
}
