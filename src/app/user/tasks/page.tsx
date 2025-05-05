"use client";

import { useTaskContext } from "@/context/taskContext";
import TasksTable from "./TasksTable";

export default function Page() {
  const { tasks, isLoading, error } = useTaskContext();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        Error loading tasks
      </div>
    );
  }
  return (
    <main className="h-full">
      <TasksTable
        tasks={tasks}
        // setTasks={(taskId, newStatus) => {
        //   setTasks((prevTasks) =>
        //     prevTasks.map((task) =>
        //       task.taskId === taskId ? { ...task, status: newStatus } : task
        //     )
        //   );
        // }}
      />
    </main>
  );
}
