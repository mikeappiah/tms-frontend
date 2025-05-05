"use client";

import { MdDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { UserProvider } from "@/context/userContext";

const adminItems = [
  {
    title: "dashboard",
    url: "/admin",
    icon: MdDashboard,
  },
  {
    title: "members",
    url: "/admin/members",
    icon: HiUser,
  },
  {
    title: "tasks",
    url: "/admin/tasks",
    icon: FaTasks,
  },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <DashboardLayout items={adminItems}>{children}</DashboardLayout>
    </UserProvider>
  );
}
