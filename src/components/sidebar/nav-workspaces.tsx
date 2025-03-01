import { ChevronRight, Plus } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavWorkspaces({
  workspaces,
}: {
  workspaces: {
    name: string;
    emoji: React.ReactNode;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <Collapsible defaultOpen>
            <SidebarMenuItem>
              <SidebarGroupLabel>My Goals</SidebarGroupLabel>
              <CollapsibleTrigger asChild>
                <SidebarMenuAction className="right-0 bg-sidebar-accent text-sidebar-accent-foreground data-[state=open]:rotate-90">
                  <ChevronRight />
                </SidebarMenuAction>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {workspaces.map((goal) => (
                    <SidebarMenuSubItem key={goal.name}>
                      <SidebarMenuSubButton asChild className="px-1">
                        <a href="#">
                          <span>{goal.emoji}</span>
                          <span>{goal.name}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
