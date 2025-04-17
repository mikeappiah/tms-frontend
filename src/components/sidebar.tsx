import { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Icon } from "@tabler/icons-react";

type SidebarProps = {
  children: ReactNode;
  data: {
    user: {
      name: string;
      email: string;
      avatar: string;
    };
    navMain: {
      title: string;
      url: string;
      icon?: Icon;
    }[];
  };
};

export default function Sidebar({ children, data }: Readonly<SidebarProps>) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="offcanvas" data={data} />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
