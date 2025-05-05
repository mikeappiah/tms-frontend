import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Task } from "@/interfaces/tasks";

import ReOpenTaskForm from "./ReopenTaskForm";
import { useState } from "react";

const inputClasses =
  "rounded-[2px] col-span-3 shadow-none px-3 py-2 text-[#232526] focus-visible:border-0 focus-visible:ring-[#5153FF] focus-visible:ring-2";

interface EditTaskDialogProps {
  task: Task;
  children: React.ReactNode;
}

export default function ReOpenTaskDialog({
  task,
  children,
}: Readonly<EditTaskDialogProps>) {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="text-[#232526] py-5">
        <SheetDescription>
          <div className="space-y-10 px-3">
            <ReOpenTaskForm
              handleOpenChange={handleOpenChange}
              task={task}
              inputClasses={inputClasses}
            />
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
