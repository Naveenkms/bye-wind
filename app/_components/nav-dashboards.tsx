"use client";
import Link from "next/link";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

type Item = {
  title: string;
  url: string;
};

type Dashboard = {
  title: string;
  icon?: React.ElementType;
  items?: Item[];
};

export function NavDashboards({
  defaultDashboard,
  dashboards,
}: {
  defaultDashboard: Item & { icon: React.ElementType };
  dashboards: Dashboard[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuSubButton isActive asChild>
          <Link href={defaultDashboard.url}>
            <defaultDashboard.icon />
            <span>{defaultDashboard.title}</span>
          </Link>
        </SidebarMenuSubButton>
        {dashboards.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            // defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link href={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
