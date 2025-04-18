'use client';

import React from 'react';
import TaskStatusBadge from '@/components/admin/tasks/TaskStatusBadge';
import TaskCard from '@/components/admin/tasks/TaskCard';
import tasksData from '@/data/tasksData';

export default function Tasks() {
	return (
		<div className='py-10'>
			<div>
				<h2 className='text-3xl text-[#232526] font-medium mb-10'>
					Tasks Board
				</h2>
				<div className='lg:flex lg:space-x-10 space-y-20 lg:space-y-0'>
					{tasksData.map((taskGroup, index) => (
						<div key={index} className='space-y-5'>
							<TaskStatusBadge
								status={taskGroup.status}
								count={taskGroup.count}
								color={taskGroup.color}
								Icon={taskGroup.icon}
							/>
							<div className='space-y-5'>
								{taskGroup.items.map((task, taskIndex) => (
									<TaskCard
										key={taskIndex}
										title={task.title}
										description={task.description}
										dueDate={task.dueDate}
										assignees={task.assignees}
										commentsCount={task.commentsCount}
										statusColor={task.statusColor}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
