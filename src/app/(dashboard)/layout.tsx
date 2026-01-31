"use client";

import { useEffect } from "react";
import { useLoading } from "@/components/providers/loading-provider";
import { SidebarProvider } from "@/components/providers/sidebar-provider";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { useCurrentRole } from "@/lib/use-current-role";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { hide } = useLoading();
  const role = useCurrentRole();

  useEffect(() => {
    hide();
  }, [hide]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar role={role} />

        <div className="flex-1 flex flex-col">
          <Topbar role={role} />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}