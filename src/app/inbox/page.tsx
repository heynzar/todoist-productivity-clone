"use client";
import { AddTaskDialog } from "@/components/sidebar/add-task/add-task-dialog";
import TaskCard from "@/components/task/task";
import { Plus } from "lucide-react";
import { useTasks } from "@/context/TasksContext";
function pape() {
  const { tasks, addTask } = useTasks();

  return (
    <main className="px-32">
      <h2 className="font-bold text-2xl">Inbox</h2>
      <section className="py-6">
        {tasks.map(({ id, task, description, isCompleted }) => (
          <TaskCard
            key={id}
            task={task}
            description={description}
            isCompleted={isCompleted}
          />
        ))}

        <AddTaskDialog addTask={addTask}>
          <button className="w-full py-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-red-400">
            <Plus className="size-5" strokeWidth={1} />
            <span className="">Add Task</span>
          </button>
        </AddTaskDialog>
      </section>
    </main>
  );
}

export default pape;
