'use client';
import { useState } from 'react';
import {
	MoreHorizontal,
	ChevronLeft,
	ChevronRight,
	UserPlus
} from 'lucide-react';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CreateMemberDialog } from './create-dialog';

// Mock data for the table
const members = [
	{
		id: '1',
		name: 'John Doe',
		email: 'john.doe@example.com',
		createdAt: new Date('2023-01-15'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '2',
		name: 'Jane Smith',
		email: 'jane.smith@example.com',
		createdAt: new Date('2023-02-20'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '3',
		name: 'Robert Johnson',
		email: 'robert.johnson@example.com',
		createdAt: new Date('2023-03-10'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '4',
		name: 'Emily Davis',
		email: 'emily.davis@example.com',
		createdAt: new Date('2023-04-05'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '5',
		name: 'Michael Wilson',
		email: 'michael.wilson@example.com',
		createdAt: new Date('2023-05-12'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '6',
		name: 'Sarah Brown',
		email: 'sarah.brown@example.com',
		createdAt: new Date('2023-06-18'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '7',
		name: 'David Miller',
		email: 'david.miller@example.com',
		createdAt: new Date('2023-07-22'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '8',
		name: 'Lisa Taylor',
		email: 'lisa.taylor@example.com',
		createdAt: new Date('2023-08-30'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '9',
		name: 'James Anderson',
		email: 'james.anderson@example.com',
		createdAt: new Date('2023-09-14'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '10',
		name: 'Patricia Thomas',
		email: 'patricia.thomas@example.com',
		createdAt: new Date('2023-10-05'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '11',
		name: 'Mark Jackson',
		email: 'mark.jackson@example.com',
		createdAt: new Date('2023-11-11'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	},
	{
		id: '12',
		name: 'Jennifer White',
		email: 'jennifer.white@example.com',
		createdAt: new Date('2023-12-20'),
		avatarUrl: '/placeholder.svg?height=40&width=40'
	}
];

export function MembersTable() {
	const [page, setPage] = useState(1);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const itemsPerPage = 5;
	const totalPages = Math.ceil(members.length / itemsPerPage);

	const paginatedMembers = members.slice(
		(page - 1) * itemsPerPage,
		page * itemsPerPage
	);

	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const handleNextPage = () => {
		if (page < totalPages) {
			setPage(page + 1);
		}
	};

	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<div className='text-sm text-muted-foreground'>
					Showing {paginatedMembers.length} of {members.length} members
				</div>
				<Button
					onClick={() => setIsDialogOpen(true)}
					className='bg-green-500 hover:bg-green-400 cursor-pointer rounded-[2px]'
				>
					<UserPlus className='mr-2 h-4 w-4' />
					Add Member
				</Button>
			</div>

			<div className='rounded-md border text-[#232526]'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>User</TableHead>
							<TableHead className='hidden md:table-cell'>Email</TableHead>
							<TableHead className='hidden md:table-cell'>Created</TableHead>
							<TableHead className='text-right'>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedMembers.map((member) => (
							<TableRow key={member.id}>
								<TableCell className='font-medium'>
									<div className='flex items-center gap-3'>
										<Avatar>
											<AvatarImage
												src={member.avatarUrl || '/placeholder.svg'}
												alt={member.name}
											/>
											<AvatarFallback>
												{member.name.substring(0, 2).toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<div>
											<div className='font-medium'>{member.name}</div>
											<div className='text-sm text-muted-foreground md:hidden'>
												{member.email}
											</div>
										</div>
									</div>
								</TableCell>
								<TableCell className='hidden md:table-cell'>
									{member.email}
								</TableCell>
								<TableCell className='hidden md:table-cell'>
									{format(member.createdAt, 'MMM d, yyyy')}
								</TableCell>
								<TableCell className='text-right'>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant='ghost' size='icon'>
												<MoreHorizontal className='h-4 w-4' />
												<span className='sr-only'>Open menu</span>
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align='end'>
											<DropdownMenuLabel>Actions</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>View details</DropdownMenuItem>
											<DropdownMenuItem>Edit member</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem className='text-destructive'>
												Delete member
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			<div className='flex items-center justify-end space-x-2'>
				<Button
					variant='outline'
					size='sm'
					onClick={handlePreviousPage}
					disabled={page === 1}
				>
					<ChevronLeft className='h-4 w-4' />
					<span className='sr-only'>Previous page</span>
				</Button>
				<div className='text-sm font-medium'>
					Page {page} of {totalPages}
				</div>
				<Button
					variant='outline'
					size='sm'
					onClick={handleNextPage}
					disabled={page === totalPages}
				>
					<ChevronRight className='h-4 w-4' />
					<span className='sr-only'>Next page</span>
				</Button>
			</div>

			<CreateMemberDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
		</div>
	);
}
