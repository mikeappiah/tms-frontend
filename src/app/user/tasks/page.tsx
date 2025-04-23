"use client";

import TodoList from "@/components/user/task/taskTable";

export default function Page() {
  return (
    <main className="flex h-full gap-10 flex-col items-center">
      <TodoList heading="In rome" />
      <TodoList heading="Hello world" />
      <TodoList heading="killer" />
    </main>
  );
}
