import Link from "next/link";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function NavFavoritesAndRecentsTab() {
  return (
    <Tabs defaultValue="favorites" className="px-4">
      <TabsList className="w-full">
        <TabsTrigger value="favorites" className="hover:bg-accent">
          Favorites
        </TabsTrigger>
        <TabsTrigger value="recently" className="hover:bg-accent">
          Recently
        </TabsTrigger>
      </TabsList>
      <TabsContent value="favorites" className="px-2 pb-3">
        <SidebarMenu className=" text-sm space-y-1">
          <SidebarMenuItem className="h-[1.75rem] flex items-center gap-[9px]">
            <div className="size-1.5 bg-muted-foreground rounded-full"></div>
            <div>Overview</div>
          </SidebarMenuItem>
          <SidebarMenuItem className="h-[1.75rem] flex items-center gap-[9px]">
            <div className="size-1.5 bg-muted-foreground rounded-full"></div>
            <div>Projects</div>
          </SidebarMenuItem>
        </SidebarMenu>
      </TabsContent>
      <TabsContent value="recently" className="px-2 pb-3">
        pending ui
      </TabsContent>
    </Tabs>
  );
}

function VisitedPageMenuButton({}) {
  return <div>Visited Page</div>;
}
