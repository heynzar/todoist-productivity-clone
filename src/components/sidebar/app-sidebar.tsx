"use client";

import * as React from "react";
import {
  BellDot,
  Calendar,
  CalendarDays,
  Inbox,
  LayoutGrid,
  Search,
  SwatchBook,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavWorkspaces } from "@/components/sidebar/nav-workspaces";
// import { NavFavorites } from "@/components/nav-favorites";
// import { NavSecondary } from "@/components/nav-secondary";
// import { TeamSwitcher } from "@/components/team-switcher";
// import { NavActions } from "./nav-actions";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProfileActions } from "@/components/sidebar/profile-actions";

const data = {
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Inbox",
      url: "inbox",
      icon: Inbox,
    },
    {
      title: "Today",
      url: "today",
      icon: Calendar,
      isActive: true,
    },
    {
      title: "Upcoming",
      url: "upcoming",
      icon: CalendarDays,
      badge: "10",
    },
    {
      title: "Filters & Labels",
      url: "filters-labels",
      icon: LayoutGrid,
    },
  ],

  workspaces: [
    {
      name: "Personal Life Management",
      emoji: "🏠",
      pages: [
        {
          name: "Daily Journal & Reflection",
          url: "#",
          emoji: "📔",
        },
      ],
    },
    {
      name: "Professional Development",
      emoji: "💼",
      pages: [
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
    },
    {
      name: "Creative Projects",
      emoji: "🎨",
      pages: [
        {
          name: "Writing Ideas & Story Outlines",
          url: "#",
          emoji: "✍️",
        },
        {
          name: "Art & Design Portfolio",
          url: "#",
          emoji: "🖼️",
        },
        {
          name: "Music Composition & Practice Log",
          url: "#",
          emoji: "🎵",
        },
      ],
    },
    {
      name: "Home Management",
      emoji: "🏡",
      pages: [
        {
          name: "Household Budget & Expense Tracking",
          url: "#",
          emoji: "💰",
        },
        {
          name: "Home Maintenance Schedule & Tasks",
          url: "#",
          emoji: "🔧",
        },
        {
          name: "Family Calendar & Event Planning",
          url: "#",
          emoji: "📅",
        },
      ],
    },
    {
      name: "Travel & Adventure",
      emoji: "🧳",
      pages: [
        {
          name: "Trip Planning & Itineraries",
          url: "#",
          emoji: "🗺️",
        },
        {
          name: "Travel Bucket List & Inspiration",
          url: "#",
          emoji: "🌎",
        },
        {
          name: "Travel Journal & Photo Gallery",
          url: "#",
          emoji: "📸",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <div className="flex justify-between gap-2 items-center mt-1.5">
          <ProfileActions />
          <Link href={"/notifications"}>
            <Button variant="ghost" className="size-7">
              <BellDot />
            </Button>
          </Link>
        </div>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavWorkspaces workspaces={data.workspaces} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton className="text-sidebar-foreground">
          <SwatchBook />
          <span>Browse templates</span>
        </SidebarMenuButton>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
