'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HiViewGrid } from 'react-icons/hi';
import { IoListSharp } from 'react-icons/io5';

interface TaskViewToggleProps {
	onViewChange: (view: 'board' | 'list') => void;
	currentView: 'board' | 'list';
}

export default function TaskViewToggle({
	onViewChange,
	currentView
}: TaskViewToggleProps) {
	const tabClasses =
		'gap-2 shadow-none! cursor-pointer text-red-500 data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-[5px]';
	return (
		<Tabs defaultValue={currentView} className='w-max'>
			<TabsList className='bg-[#F7F8FA]'>
				<TabsTrigger
					value='board'
					onClick={() => onViewChange('board')}
					className={tabClasses}
				>
					<HiViewGrid className='h-4 w-4' />
					Board
				</TabsTrigger>
				<TabsTrigger
					value='list'
					onClick={() => onViewChange('list')}
					className={tabClasses}
				>
					<IoListSharp className='h-4 w-4' />
					List
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
