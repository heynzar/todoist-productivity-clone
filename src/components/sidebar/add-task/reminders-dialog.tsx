import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { BadgeCheck } from "lucide-react";

export function RemindersDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-1">
          <span>Date & Time</span>
          <BadgeCheck className="text-yellow-500 size-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[520px] p-4">
        <DialogHeader>
          <DialogTitle>Unlock reminders</DialogTitle>
        </DialogHeader>
        <div
          className="w-full"
          style={{
            backgroundImage:
              "url(https://todoist.b-cdn.net/assets/images/89cffa3c01dd26d9bdcc355d5d8fe119.jpg)",
            backgroundSize: "cover",
          }}
        >
          <video
            loop
            autoPlay
            width={500}
            src="https://todoist.b-cdn.net/assets/video/cb41746229fee5a3c37b755f369dd40f.webm"
          ></video>
        </div>
        <DialogFooter className="sm:flex-col">
          <span className="text-sm text-muted-foreground">
            {
              "With Pro, you can set reminders at a specific time or location so you’ll never forget a task again."
            }
          </span>
          <div className="flex justify-end gap-2 mt-2">
            <DialogClose asChild>
              <Button variant={"secondary"} size={"sm"} className="h-7">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" size={"sm"} className="h-7" disabled>
              Upgrade
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
