'use client';

import { useEffect, useState } from 'react';
import tasksData from '@/data/tasksData';
// import axios from 'axios';

import { Button } from '@/components/ui/button';
import { IoMdAdd } from 'react-icons/io';
import TaskStatusBadge from '@/components/admin/tasks/TaskStatusBadge';
import TaskCard from '@/components/admin/tasks/TaskCard';
import TaskListView from '@/components/admin/tasks/TaskListView';
import TaskViewToggle from '@/components/admin/tasks/TaskViewToggle';
import CreateTaskDialog from '@/components/admin/tasks/CreateTaskDialog';
import { PageHeader } from '@/components/header';

export default function Tasks() {
	const [currentView, setCurrentView] = useState<'board' | 'list'>('board');

	const handleViewChange = (view: 'board' | 'list') => {
		setCurrentView(view);
	};

	useEffect(() => {}, []);

	const openTasks = tasksData.filter((task) => task.status === 'open');
	const completedTasks = tasksData.filter(
		(task) => task.status === 'completed'
	);
	const overdueTasks = tasksData.filter((task) => task.status === 'overdue');

	return (
		<div>
			<div>
				<div className='flex justify-between items-center mb-10 w-full'>
					<PageHeader
						title='Tasks'
						description='Create, manage, and track team tasks.'
					/>
					<CreateTaskDialog>
						<Button className='bg-[#5153FF] hover:bg-[#5153FF]/80 cursor-pointer rounded-[2px]'>
							<IoMdAdd />
							Add new task
						</Button>
					</CreateTaskDialog>
				</div>
				<div className='flex items-center space-x-4 mb-10'>
					<TaskViewToggle
						onViewChange={handleViewChange}
						currentView={currentView}
					/>
				</div>
				{currentView === 'board' && (
					<div className='lg:flex lg:space-x-3 space-y-10 lg:space-y-0'>
						<div className='space-y-2'>
							<TaskStatusBadge status='open' count={openTasks.length} />
							<div className='space-y-5'>
								{openTasks.map((task) => (
									<TaskCard key={task.id} task={task} />
								))}
							</div>
						</div>
						<div className='space-y-2'>
							<TaskStatusBadge
								status='completed'
								count={completedTasks.length}
							/>
							<div className='space-y-5'>
								{completedTasks.map((task) => (
									<TaskCard key={task.id} task={task} />
								))}
							</div>
						</div>
						<div className='space-y-2'>
							<TaskStatusBadge status='overdue' count={overdueTasks.length} />
							<div className='space-y-5'>
								{overdueTasks.map((task) => (
									<TaskCard key={task.id} task={task} />
								))}
							</div>
						</div>
					</div>
				)}
				{currentView === 'list' && <TaskListView tasks={tasksData} />}
			</div>
		</div>
	);
}
