import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AlarmClock, CircleHelp, Info } from "lucide-react";
import { RemindersDialog } from "./reminders-dialog";

export function RemindersPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="relative shadow-none h-6"
          variant="outline"
          size={"sm"}
        >
          <AlarmClock className={`text-muted-foreground`} />
          <span>Reminders</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-64 p-2 rounded-lg overflow-hidden"
      >
        <span className="text-sm font-bold">Reminders</span>

        <div className="rounded-full flex mt-2 items-center justify-end gap-2 p-0.5 text-xs font-bold w-full h-10 bg-muted">
          <RemindersDialog />
          <button className="h-full px-6 bg-white rounded-full">
            Before Task
          </button>
        </div>

        <p className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
          <Info className="size-4" strokeWidth={1.5} />
          <span>Add a time to the task first.</span>
        </p>

        <div className="flex items-center justify-between mt-6">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="size-7 text-muted-foreground"
          >
            <CircleHelp />
          </Button>

          <Button className="h-7 text-sm" disabled>
            Add reminder
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
