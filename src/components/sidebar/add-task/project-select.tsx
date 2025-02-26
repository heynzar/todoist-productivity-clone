import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProjectSelect() {
  return (
    <Select>
      <SelectTrigger className="w-24">
        <SelectValue placeholder="Inbox" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Projects</SelectLabel>
          <SelectItem value="inbox">Inbox</SelectItem>
          <SelectItem value="project1">project 1</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
