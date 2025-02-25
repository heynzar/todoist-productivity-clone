"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BadgeCheck, Blocks, Ellipsis, Tag } from "lucide-react";

const moreList = [
  { icon: Tag, title: "Labels", color: "text-muted-foreground" },
  { icon: BadgeCheck, title: "Location", color: "text-yellow-600" },
  { icon: BadgeCheck, title: "Deadline", color: "text-yellow-600" },
  { icon: Blocks, title: "Add extension...", color: "text-muted-foreground" },
];

export function MorePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="relative shadow-none size-6"
          variant="outline"
          size={"icon"}
        >
          <Ellipsis className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-52 p-1.5 rounded-lg overflow-hidden"
      >
        <div className="flex flex-col">
          {moreList.map(({ icon: Icon, title, color }, index) => (
            <Button
              key={index}
              variant="ghost"
              className="justify-start px-2 rounded-sm"
            >
              <Icon className={color} />
              <span className="text-xs">{title}</span>
            </Button>
          ))}
        </div>
        <hr className="my-1" />
        <Button
          variant="ghost"
          className="px-2 w-full justify-start rounded-sm text-red-400 hover:text-red-400"
        >
          <span className="text-xs">Edit task actions</span>
        </Button>
      </PopoverContent>
    </Popover>
  );
}
