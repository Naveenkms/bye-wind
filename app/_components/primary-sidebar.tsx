"use client";

import * as React from "react";

import { NavTitle } from "@/app/_components/nav-title";
import { NavDashboards } from "@/app/_components/nav-dashboards";
import { NavPages } from "@/app/_components/nav-pages";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavFavoritesAndRecentsTab } from "./nav-favorites-and-recents-tab";
import { CircularPie } from "@/components/icons/circular-pie";
import { Bag } from "@/components/icons/bag";
import { Folder } from "@/components/icons/folder";
import { OpenedBook } from "@/components/icons/opened-book";
import { UserId } from "@/components/icons/user-id";
import { UserDetail } from "@/components/icons/user-detail";
import { PeopleGroup } from "@/components/icons/people-group";
import { Blog } from "@/components/icons/blog";
import { Social } from "@/components/icons/social";

const data = {
  defaultDashboards: {
    title: "Default",
    url: "/",
    icon: CircularPie,
  },
  dashboards: [
    {
      title: "eCommerce",
      url: "/dashboards/e-commerce",
      icon: Bag,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Projects",
      url: "/dashboards/projects",
      icon: Folder,
      items: [],
    },
    {
      title: "Online Courses",
      url: "/dashboards/online-courses",
      icon: OpenedBook,
      items: [],
    },
  ],
  pages: [
    {
      title: "User Profile",
      icon: UserId,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Projects",
          url: "#",
        },
        {
          title: "Campaigns",
          url: "#",
        },
        { title: "Documents", url: "#" },
        { title: "Followers", url: "#" },
      ],
    },
    {
      title: "Account",
      icon: UserDetail,
    },
    {
      title: "Corporate",
      icon: PeopleGroup,
    },
    {
      title: "Blog",
      icon: Blog,
    },
    {
      title: "Social",
      icon: Social,
    },
  ],
};

export function PrimarySidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="px-4 pb-4 pt-5 mb-4">
        <NavTitle />
      </SidebarHeader>
      <SidebarContent>
        <NavFavoritesAndRecentsTab />
        <NavDashboards
          defaultDashboard={data.defaultDashboards}
          dashboards={data.dashboards}
        />
        <NavPages pages={data.pages} />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
    </Sidebar>
  );
}
