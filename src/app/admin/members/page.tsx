'use client';
import { PageHeader } from '@/components/header';
import { MembersTable } from '@/components/admin/members/table';

export default function MembersPage() {
	return (
		<div className='space-y-6'>
			<PageHeader
				title='Members'
				description='Manage your team members and their account access.'
			/>
			<MembersTable />
		</div>
	);
}
