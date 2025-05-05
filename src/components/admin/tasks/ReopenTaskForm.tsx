"use client";

import { useState } from "react";
import { useUserContext } from "@/context/userContext";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import FormGroup from "@/components/FormGroup";
import { Task } from "@/interfaces/tasks";
import DatePicker from "./DatePicker";
import { mutate } from "swr";

interface TaskFormProps {
  task: Task;
  inputClasses: string;
  handleOpenChange: (open: boolean) => void;
}

const buttonClasses =
  "bg-[#5153FF] hover:bg-[#4649db] rounded-[2px] cursor-pointer";

export default function ReOpenTaskForm({
  task,
  inputClasses,
  handleOpenChange,
}: Readonly<TaskFormProps>) {
  const { users } = useUserContext();

  const [status, setStatus] = useState(task.status);
  const [user, setUser] = useState(task.taskOwner.userId);
  const [deadline, setDeadline] = useState<Date | undefined>(
    task.deadline ? new Date(task.deadline) : undefined
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      await axios.post(`/api/tasks/reopen`, {
        taskId: task.taskId,
        status,
        deadline,
        userId: user,
      });

      mutate("/api/tasks"); // Revalidate or refresh the task list in SWR
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setIsLoading(false);
      handleOpenChange(false); // Close the modal after submission
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {errorMessage && <div className="text-red-600">{errorMessage}</div>}

      <FormGroup label="Task title" htmlFor="name">
        <Input
          id="name"
          className={`${inputClasses}`}
          value={task.name}
          disabled
        />
      </FormGroup>

      <FormGroup label="Status" htmlFor="status">
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-full shadow-none">
            <SelectValue placeholder="Select task status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="open">open</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormGroup>

      <FormGroup label="Deadline" htmlFor="deadline">
        <DatePicker deadline={deadline} setDeadline={setDeadline} />
      </FormGroup>

      <FormGroup label="Assign to" htmlFor="responsibility">
        <Select value={user} onValueChange={setUser}>
          <SelectTrigger className="w-full shadow-none">
            <SelectValue placeholder="Select team member" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {users?.map((user) => (
                <SelectItem key={user.userId} value={user.userId}>
                  {user.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormGroup>

      <FormGroup label="Description" htmlFor="description">
        <Textarea
          placeholder="Provide detailed instructions for this task"
          className={inputClasses}
          value={task.description}
          disabled
        />
      </FormGroup>

      <Button className={buttonClasses} type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Reopen Task"}
      </Button>
    </form>
  );
}
