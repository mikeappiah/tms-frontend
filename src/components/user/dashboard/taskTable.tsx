"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Task = {
  id: string;
  name: string;
  assignee: string;
  dueDate: string;
  status: "Completed" | "In Progress" | "Pending" | "Overdue";
};

export default function TasksTable() {
  // Sample task data
  const allTasks: Task[] = [
    {
      id: "TASK-1234",
      name: "Update product descriptions",
      assignee: "John Smith",
      dueDate: "2025-04-25",
      status: "Completed",
    },
    {
      id: "TASK-1235",
      name: "Review Q2 marketing plan",
      assignee: "Sarah Johnson",
      dueDate: "2025-04-26",
      status: "In Progress",
    },
    {
      id: "TASK-1236",
      name: "Finalize budget report",
      assignee: "Mike Chen",
      dueDate: "2025-04-28",
      status: "Pending",
    },
    {
      id: "TASK-1237",
      name: "Client presentation preparation",
      assignee: "Emily Davis",
      dueDate: "2025-04-22",
      status: "Overdue",
    },
    {
      id: "TASK-1238",
      name: "Website redesign kickoff",
      assignee: "Alex Turner",
      dueDate: "2025-04-30",
      status: "Pending",
    },
    {
      id: "TASK-1239",
      name: "Quarterly team review",
      assignee: "Lisa Wong",
      dueDate: "2025-05-02",
      status: "In Progress",
    },
    {
      id: "TASK-1240",
      name: "Update sales dashboard",
      assignee: "Robert Johnson",
      dueDate: "2025-04-24",
      status: "Completed",
    },
  ];

  // Filter tasks based on view
  const tasks = allTasks.slice(0, 5); // Show only 5 most recent tasks

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  // Get status badge color
  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "In Progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "Overdue":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="overflow-x-auto lg:col-span-3 bg-white rounded-[8px] p-5 shadow-none border-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Task ID</TableHead>
            <TableHead>Task Name</TableHead>
            <TableHead>Assignee</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.id}</TableCell>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.assignee}</TableCell>
              <TableCell>{formatDate(task.dueDate)}</TableCell>
              <TableCell>
                <Badge
                  className={cn("font-normal", getStatusColor(task.status))}
                >
                  {task.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
