"use client";

import { CirclePlus, type LucideIcon } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AddTaskDialog } from "./add-task/add-task-dialog";
import { useTasks } from "@/context/TasksContext";

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
  const { addTask } = useTasks();

  return (
    <SidebarMenu className="mt-2 mb-4">
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
      <SidebarMenuItem className="mt-4">
        <AddTaskDialog addTask={addTask}>
          <SidebarMenuButton className="text-primary bg-muted hover:bg-muted/50 justify-center border border-dashed">
            <CirclePlus strokeWidth={1.5} />
            <span>Add Task</span>
          </SidebarMenuButton>
        </AddTaskDialog>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
