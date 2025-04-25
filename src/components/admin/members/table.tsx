'use client';
import { useState } from 'react';
import {
	MoreHorizontal,
	ChevronLeft,
	ChevronRight,
	UserPlus
} from 'lucide-react';
import formatDate from '@/utils/formatDate';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
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
import membersData from '@/data/membersData';

export function MembersTable() {
	const [page, setPage] = useState(1);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const itemsPerPage = 5;
	const totalPages = Math.ceil(membersData.length / itemsPerPage);

	const paginatedMembers = membersData.slice(
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
					Showing {paginatedMembers.length} of {membersData.length} members
				</div>
				<Button
					onClick={() => setIsDialogOpen(true)}
					className='bg-[#5153FF] hover:bg-[#4649db] cursor-pointer rounded-[2px]'
				>
					<UserPlus className='mr-2 h-4 w-4' />
					Add Member
				</Button>
			</div>

			<div className='text-[#232526]'>
				<Table className='rounded-[2px] overflow-hidden'>
					<TableHeader className='bg-[#5153FF]'>
						<TableRow>
							<TableHead className='text-white'>Name</TableHead>
							<TableHead className='hidden md:table-cell text-white'>
								Email
							</TableHead>
							<TableHead className='hidden md:table-cell text-white'>
								Created
							</TableHead>
							<TableHead className='text-white text-right'>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className='bg-white'>
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
									{formatDate(member.createdAt)}
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
											<DropdownMenuItem>Edit member</DropdownMenuItem>
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
