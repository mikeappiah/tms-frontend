"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Link from "next/link";

interface SidebarItem {
  title: string;
  url: string;
  icon: React.ComponentType;
}

export default function AppSidebar({
  items,
}: Readonly<{ items: SidebarItem[] }>) {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent className="flex flex-col justify-between h-full">
        <div>
          <SidebarGroup className="space-y-5">
            <SidebarGroupLabel className="pl-0 ">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/logo.png"
                  alt="TMS Logo"
                  className="object-center object-cover"
                  layout="fill"
                />
              </div>
              <h3 className="text-[#5153FF] text-base">TMS</h3>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-3">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`text-[#7A7B88] active:text-[#5153FF] hover:text-[#5153FF] ${
                        pathname === item.url &&
                        "text-[#5153FF] bg-sidebar-accent"
                      } `}
                    >
                      <Link href={item.url} className="space-x-2">
                        <item.icon />
                        <span className="capitalize">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        <div className="px-3 py-5">
          <button className="flex items-center space-x-2 text-[#7A7B88] hover:text-red-500 transition-all cursor-pointer justify-start">
            <RiLogoutBoxRLine />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
