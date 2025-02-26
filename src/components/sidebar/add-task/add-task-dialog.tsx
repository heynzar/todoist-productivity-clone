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

export function AddTaskDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[525px] p-0 gap-0">
        <DialogHeader className="p-4">
          <DialogTitle className="sr-only">Add Task</DialogTitle>
          <input
            type="text"
            id="task-name"
            placeholder="Task Name"
            className="col-span-3 outline-none font-medium text-xl"
          />
          <input
            type="text"
            id="description"
            placeholder="Description"
            className="col-span-3 outline-none text-sm"
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
            <Button type="submit" size={"sm"}>
              Add Task
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
