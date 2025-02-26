import TaskCard from "@/components/task/task";
import { Plus } from "lucide-react";

function pape() {
  return (
    <main className="px-32">
      <h2 className="font-bold text-2xl">Inbox</h2>
      <section className="py-6">
        <TaskCard />
        <TaskCard />
        <TaskCard />

        <button className="w-full py-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-red-400">
          <Plus className="size-5" strokeWidth={1} />
          <span className="">Add Task</span>
        </button>
      </section>
    </main>
  );
}

export default pape;
