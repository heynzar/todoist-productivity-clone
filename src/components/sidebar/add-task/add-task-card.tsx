import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PriorityPopover } from "./priority-popover";
import { RemindersPopover } from "./reminders-popover";
import { DatePopover } from "./date-popover";
import { MorePopover } from "./more-popover";
import { ProjectSelect } from "./project-select";
import { Task } from "@/context/TasksContext";
import { CalendarSync } from "lucide-react";

export function AddTaskCard() {
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

    setTaskName(""); // Reset input
    setDescription("");
  };

  return (
    <Card className="w-full bg-white border border-neutral-400 shadow-none mt-2 ml-2 rounded-lg">
      <CardContent className="p-2">
        <input
          type="text"
          placeholder="Task Name"
          className="w-full bg-transparent outline-none font-medium text-md rounded"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full bg-transparent outline-none text-xs rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex items-center gap-2 mt-2">
          <DatePopover />
          <PriorityPopover />
          <Button
            className="relative shadow-none h-6 bg-transparent border-neutral-400"
            variant="outline"
            size={"sm"}
          >
            <CalendarSync className="text-muted-foreground" />
            <span>Repeat Task</span>
          </Button>
        </div>
      </CardContent>

      <CardFooter className="p-2 pt-4 flex justify-between items-center border-t">
        <ProjectSelect />
        <div className="space-x-2">
          <Button
            size={"sm"}
            variant={"secondary"}
            onClick={() => setTaskName("")}
          >
            Cancel
          </Button>
          <Button size={"sm"} onClick={handleAddTask}>
            Add Task
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
