"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/navigation/AppSidebar";
import { IconType } from "react-icons";
import { TaskProvider } from "@/context/taskContext";
// import { UserProvider } from "@/context/userContext";

type SidebarItem = {
  title: string;
  url: string;
  icon: IconType;
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  items: SidebarItem[];
}

export default function DashboardLayout({
  children,
  items,
}: Readonly<DashboardLayoutProps>) {
  return (
    <TaskProvider>
      {/* <UserProvider> */}
      <SidebarProvider>
        <AppSidebar items={items} />
        <main className="w-full">
          <SidebarTrigger className="hover:bg-transparent hover:text-[#5153FF]" />
          <div className="px-5 py-10">{children}</div>
        </main>
      </SidebarProvider>
      {/* </UserProvider> */}
    </TaskProvider>
  );
}
