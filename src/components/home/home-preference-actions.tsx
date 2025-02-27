"use client";

import * as React from "react";
import { Settings2, SquareKanban, SquareMenu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";

type View = "list" | "board";

type HomeHeader = {
  view: View;
  setView: React.Dispatch<React.SetStateAction<View>>;
  showPrayerSection: boolean;
  setShowPrayerSection: React.Dispatch<React.SetStateAction<boolean>>;
};

interface ViewOption {
  id: View;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const views: ViewOption[] = [
  {
    id: "list",
    label: "List",
    icon: SquareMenu,
  },
  {
    id: "board",
    label: "Board",
    icon: SquareKanban,
  },
];

export function HomePreferenceActions({
  view,
  setView,
  showPrayerSection,
  setShowPrayerSection,
}: HomeHeader) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <Settings2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-2" align="end">
        <span className="text-xs font-semibold ">View</span>
        <Card className="border-0 shadow-none space-y-4">
          <div className="grid grid-cols-2 bg-muted rounded-lg p-1 gap-1">
            {views.map((option) => {
              return (
                <Button
                  key={option.id}
                  variant="ghost"
                  className={`flex h-20 hover:bg-white w-full flex-col items-center justify-center gap-2 p-0 ${
                    view === option.id ? "bg-white" : ""
                  }`}
                  onClick={() => setView(option.id)}
                >
                  <option.icon className="!size-6" strokeWidth={1} />
                  <span className="text-xs font-normal">{option.label}</span>
                </Button>
              );
            })}
          </div>
          <div className="flex items-center justify-between py-2 border-t">
            <Label htmlFor="completed-tasks" className="text-sm">
              Show Prayer Section
            </Label>
            <Switch
              id="completed-tasks"
              checked={showPrayerSection}
              onCheckedChange={setShowPrayerSection}
            />
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
