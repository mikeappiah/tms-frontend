import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/interfaces/tasks";
import formatDate from "@/utils/formatDate";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RiHourglass2Fill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { mutate } from "swr";

interface TaskTableRowProps {
  task: Task;
  onAction: (action: string, taskId: string, comment?: string) => void;
}

export default function TaskTableRow({
  task,
  onAction,
}: Readonly<TaskTableRowProps>) {
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);
  const [comment, setComment] = useState("");

  const getBadgeStyle = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100";
      case "completed":
        return "bg-green-100 text-green-800 border-green-200 hover:bg-green-100";
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200 hover:bg-red-100";
      default:
        return "";
    }
  };

  const getStatusIconForDropdown = (status: string) => {
    switch (status) {
      case "open":
        return <RiHourglass2Fill className="mr-2 h-4 w-4" />;
      case "completed":
        return <IoMdCheckmarkCircleOutline className="mr-2 h-4 w-4" />;
      case "overdue":
        return <FaClockRotateLeft className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  const handleSubmitComment = async () => {
    const newComment = comment;

    // Optimistically update UI (optional)
    onAction("comment", task.taskId, newComment);
    setComment("");
    setIsCommentDialogOpen(false);

    try {
      await fetch(`/api/users/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: newComment,
          taskId: task.taskId,
        }),
      });

      mutate(`/api/tasks`);
      window.location.reload(); // Reload the page to reflect changes

      console.log("Comment submitted successfully");
    } catch (error) {
      console.error("Error submitting comment:", error);
      // Optionally rollback UI state or show error toast
    }
  };

  const handleStatusChange = async () => {
    try {
      await fetch(`/api/users/tasks`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ taskId: task.taskId }),
      });

      // Refresh task list or task details
      mutate("/api/tasks");
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <>
      <tr className="border-b hover:bg-gray-50">
        <td className="px-4 py-3">{task.name}</td>
        <td className="px-4 py-3">
          <span className="text-xs resize-none">{task.description}</span>
        </td>
        <td className="px-4 py-3">
          <span className="text-xs resize-none">{task.userComment}</span>
        </td>

        <td className="px-4 py-3">{formatDate(task.deadline)}</td>
        <td className="px-4 py-3">
          <Badge
            variant="outline"
            className={`${getBadgeStyle(
              task.status
            )} text-xs px-1.5 py-0.5 rounded-[3px] cursor-pointer`}
          >
            {task.status}
          </Badge>
        </td>
        <td className="px-4 py-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {task.status === "open" && (
                <DropdownMenuItem
                  onClick={() => handleStatusChange()}
                  className="cursor-pointer"
                >
                  {getStatusIconForDropdown("completed")}
                  Completed
                </DropdownMenuItem>
              )}
              <DropdownMenuItem onClick={() => setIsCommentDialogOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                Comment
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </td>
      </tr>

      <Dialog open={isCommentDialogOpen} onOpenChange={setIsCommentDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Comment</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              placeholder="Type your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="h-32"
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCommentDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmitComment}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
