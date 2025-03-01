"use client";

import * as React from "react";
import {
  BellDot,
  Goal,
  CircleCheckBig,
  Pentagon,
  Clock9,
  SwatchBook,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavWorkspaces } from "@/components/sidebar/nav-workspaces";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { ProfileActions } from "@/components/sidebar/profile-actions";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Pentagon,
      isActive: true,
    },
    {
      title: "Goals",
      url: "goals",
      icon: Goal,
    },
    {
      title: "Tasks",
      url: "tasks",
      icon: CircleCheckBig,
    },
    {
      title: "Pomodoros",
      url: "pomodoros",
      icon: Clock9,
    },
  ],

  workspaces: [
    {
      name: "Career Objectives & Milestones",
      url: "#",
      emoji: "🎯",
    },
    {
      name: "Skill Acquisition & Training Log",
      url: "#",
      emoji: "🧠",
    },
    {
      name: "Networking Contacts & Events",
      url: "#",
      emoji: "🤝",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <div className="flex justify-between gap-2 items-center mt-1.5">
          <ProfileActions />
          <SidebarTrigger />
        </div>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavWorkspaces workspaces={data.workspaces} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
