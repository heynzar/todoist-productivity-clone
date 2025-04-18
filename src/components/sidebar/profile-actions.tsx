"use client";

import * as React from "react";
import {
  Activity,
  ArrowUp,
  BadgeCheck,
  BookOpen,
  ChevronDown,
  LogOut,
  Plus,
  Printer,
  RefreshCcw,
  Settings,
  TrendingUp,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = [
  [
    {
      label: "Settings",
      icon: Settings,
    },
    {
      label: "Resources",
      icon: BookOpen,
    },
    {
      label: "What's new",
      icon: ArrowUp,
    },
  ],

  [
    {
      label: "Upgrade to Pro",
      icon: BadgeCheck,
    },
  ],

  [
    {
      label: "Log out",
      icon: LogOut,
    },
  ],
];

export function ProfileActions() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 px-2 w-max data-[state=open]:bg-accent"
        >
          <Avatar className="size-5 rounded-lg">
            <AvatarImage src="https://avatars.githubusercontent.com/u/98880087" />
            <AvatarFallback>NZ</AvatarFallback>
          </Avatar>

          <span className="font-medium">Nzar</span>
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-56 overflow-hidden rounded-lg p-0"
        align="start"
      >
        <Sidebar collapsible="none" className="bg-transparent">
          <SidebarContent>
            {data.map((group, index) => (
              <SidebarGroup key={index} className="border-b last:border-none">
                <SidebarGroupContent className="gap-0">
                  <SidebarMenu>
                    {group.map((item, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton>
                          <item.icon /> <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
        </Sidebar>
      </PopoverContent>
    </Popover>
  );
}
