"use client";
import React, { useState } from "react";
import { Calendar, Check } from "lucide-react";

export default function TaskCard({
  task,
  description,
  isCompleted,
}: {
  task: string;
  description: string;
  isCompleted: boolean;
}) {
  const [check, setCheck] = useState(isCompleted);
  return (
    <div className="flex items-start gap-2 w-full border-b py-2">
      <button
        onClick={() => setCheck(!check)}
        className={`mt-1 group size-[18px] rounded-full p-0.5 border-[1.5px] hover:scale-105 active:scale-90 transition-transform duration-200 border-red-400 ${
          check ? "bg-red-400 text-white" : "bg-white text-red-400"
        }`}
      >
        <Check
          className={`size-full transition-opacity ${
            check ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          strokeWidth={3}
        />
      </button>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm">{task}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
        <button className="py-1 w-max gap-1 flex">
          <Calendar className="size-3.5" strokeWidth={1} />
          <span className="text-xs">Jun 10 2024</span>
        </button>
      </div>
    </div>
  );
}
