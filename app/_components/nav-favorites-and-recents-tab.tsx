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
        <TabsTrigger value="favorites" className="hover:bg-accent">Favorites</TabsTrigger>
        <TabsTrigger value="recently" className="hover:bg-accent">Recently</TabsTrigger>
      </TabsList>
      <TabsContent value="favorites" className="px-2 pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuSubButton asChild>
              <Link href="/">
                <span>buuton style pending</span>
              </Link>
            </SidebarMenuSubButton>
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
