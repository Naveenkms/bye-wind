"use client";
import type * as React from "react";

import { Button } from "@/components/ui/button";
import { useSecondarySidebar } from "./secondary-sidebar-provider";
import { PanelLeftIcon } from "@/components/icons/panel-left-icon";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { cn } from "@/lib/cn";
import { Notifications } from "./notifications";
import { Activities } from "./activities";
import { Contacts } from "./contacts";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Favorites",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "Other",
      items: ["Travel", "Reminders", "Deadlines"],
    },
  ],
};

export function SecondarySidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { isOpen } = useSecondarySidebar();

  return (
    <Sidebar
      collapsible="none"
      // side="right"
      className={cn(
        "sticky top-0 h-svh border-l transition-all duration-300 ease-in-out w-[17.5rem] hidden",
        isOpen ? "lg:flex" : "hidden"
      )}
      {...props}
    >
      <SidebarContent className="p-5">
        <Notifications />
        <Activities />
        <Contacts />
      </SidebarContent>
    </Sidebar>
  );
}

export function SecondarySidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSecondarySidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon className="size-5" />
      <span className="sr-only">Toggle Secondary Sidebar</span>
    </Button>
  );
}
