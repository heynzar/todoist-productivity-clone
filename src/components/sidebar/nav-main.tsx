"use client";

import { CirclePlus, type LucideIcon } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AddTaskDialog } from "./add-task/add-task-dialog";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <AddTaskDialog>
          <SidebarMenuButton className="text-primary">
            <CirclePlus className="!size-5" strokeWidth={1.5} />
            <span>Add Task</span>
          </SidebarMenuButton>
        </AddTaskDialog>
      </SidebarMenuItem>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.isActive}>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
