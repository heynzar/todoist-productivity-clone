"use client";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import React, { useState } from "react";
import SubGoalsList from "@/components/home/tasks-section";
import HomeHeader from "@/components/home/home-header";

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Convert the current time into a degree value (0 to 360)
const degrees =
  (hours % 12) * 30 + (minutes / 60) * 30 + (seconds / 60 / 60) * 30;

const style = {
  background: `conic-gradient(#7c3aed ${degrees}deg, #fff 0deg)`,
};

type View = "list" | "board";

const prayers = [
  { title: "fajr", time: "12:30" },
  { title: "dhuhr", time: "12:30" },
  { title: "asr", time: "12:30" },
  { title: "magherb", time: "12:30" },
  { title: "isha", time: "12:30" },
  { title: "tahajud", time: "12:30" },
  { title: "sunrise", time: "12:30" },
  { title: "sunset", time: "12:30" },
];

export default function Page() {
  const [view, setView] = useState<View>("list");
  const [showPrayerSection, setShowPrayerSection] = useState(true);

  return (
    <>
      <HomeHeader
        view={view}
        setView={setView}
        showPrayerSection={showPrayerSection}
        setShowPrayerSection={setShowPrayerSection}
      />
      <main className="flex flex-col gap-4">
        {showPrayerSection && (
          <section className="flex items-center gap-4">
            <div className="w-full h-72 bg-muted rounded-lg grid grid-cols-4 grid-rows-2 gap-4 p-4">
              {prayers.map(({ title, time }) => (
                <div
                  key={title}
                  className="bg-muted-foreground/20 rounded-md flex flex-col items-start pl-4 justify-center"
                >
                  <span className="capitalize text-lg">{title}</span>
                  <span className="text-4xl">{time}</span>
                </div>
              ))}
            </div>
            <div className="min-w-72 h-72 bg-muted rounded-lg flex items-center justify-center">
              <div
                style={style}
                className=" relative rounded-[100%] bg-white size-56 flex items-center justify-center"
              >
                <div className="rounded-[100%] bg-muted size-[13.3rem] flex flex-col items-center justify-center">
                  <span>Asr Prayer After</span>
                  <span className="text-3xl">1h 12min</span>
                </div>

                <span className="absolute text-xs text-white -right-3 bg-violet-600 size-8 rounded-full flex items-center justify-center">
                  Fajr
                </span>
              </div>
            </div>
          </section>
        )}

        <section className="flex items-center gap-4">
          <div className="w-full h-12 bg-muted rounded-lg flex items-center justify-center gap-4 px-5">
            <div className="w-full h-3 rounded-full bg-muted-foreground/30">
              <div className="w-1/2 bg-violet-600 h-3 rounded-full align-baseline" />
            </div>
            <span>50%</span>
          </div>
          <Button className="min-w-72 h-12 bg-violet-600 rounded-lg">
            <Sparkles />
            Get Today's Barakah
          </Button>
        </section>

        <section className="w-full p-4 bg-muted rounded-lg">
          <SubGoalsList />
        </section>
      </main>
    </>
  );
}
