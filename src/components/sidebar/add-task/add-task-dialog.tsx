import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PriorityPopover } from "./priority-popover";
import { RemindersPopover } from "./reminders-popover";
import { DialogClose } from "@radix-ui/react-dialog";
import { DatePopover } from "./date-popover";
import { MorePopover } from "./more-popover";
import { ProjectSelect } from "./project-select";
import { Task } from "@/context/TasksContext";

export function AddTaskDialog({
  children,
  addTask,
}: {
  children: React.ReactNode;
  addTask: (task: Task) => void;
}) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (!taskName.trim()) return; // Prevent adding empty tasks

    const newTask: Task = {
      id: Date.now(), // Generate a unique ID
      task: taskName,
      description,
      date: "No Date", // Default value
      priority: "p3", // Default priority
      project: "inbox", // Default project
      isCompleted: false,
    };

    addTask(newTask);
    setTaskName(""); // Reset input
    setDescription("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[525px] p-0 gap-0">
        <DialogHeader className="p-4">
          <DialogTitle className="sr-only">Add Task</DialogTitle>
          <input
            type="text"
            placeholder="Task Name"
            className="col-span-3 outline-none font-medium text-xl"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="col-span-3 outline-none text-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex items-center gap-2 mt-2">
            <DatePopover />
            <PriorityPopover />
            <RemindersPopover />
            <MorePopover />
          </div>
        </DialogHeader>

        <DialogFooter className="border-t p-4 flex sm:justify-between items-center">
          <ProjectSelect />

          <div className="space-x-2">
            <DialogClose asChild>
              <Button size={"sm"} variant={"secondary"}>
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button size={"sm"} onClick={handleAddTask}>
                Add Task
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
