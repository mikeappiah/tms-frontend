"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/sidebar";
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconNotification,
  IconUsers,
} from "@tabler/icons-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Members",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Tasks",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Notifications",
      url: "#",
      icon: IconNotification,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar data={data}>{children}</Sidebar>
      </body>
    </html>
  );
}
