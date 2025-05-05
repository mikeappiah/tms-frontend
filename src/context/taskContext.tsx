import { createContext, useState, useContext } from "react";
import axios from "axios";
import useSWR from "swr";

import { Task } from "@/interfaces/tasks";

const TaskContext = createContext<{
  tasks: Task[];
  isLoading: boolean;
  error: unknown | null;
  setTasks: (tasks: Task[]) => void;
}>({
  tasks: [],
  setTasks: () => {},
  isLoading: false,
  error: null,
});

const fetcher = (url: string) => axios.get(url).then((res) => res.data.tasks);

function TaskProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { error, isLoading } = useSWR("/api/tasks", fetcher, {
    onSuccess: (data) => setTasks(data),
  });

  return (
    <TaskContext.Provider value={{ tasks, setTasks, isLoading, error }}>
      {children}
    </TaskContext.Provider>
  );
}
function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
}
export { TaskProvider, useTaskContext };
