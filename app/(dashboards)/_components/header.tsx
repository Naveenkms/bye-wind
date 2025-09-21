import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger as PrimarySidebarTrigger } from "@/components/ui/sidebar";
import { FavoriteButton } from "@/components/favorite-button";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { ActivitiesButton } from "./activities-button";
import { NotificationButton } from "./notifications-button";
import SearchButton from "./search-button";
import { SecondarySidebarTrigger } from "@/app/_components/secondary-sidebar";

export function Header({ title }: { title?: string }) {
  return (
    <header className="flex  dark:stroke-foreground shrink-0 items-center gap-2 transition-[width,height] ease-linear py-5 px-7 justify-between border-b h-[4.25rem]">
      <div className="flex items-center gap-2">
        <div className="flex gap-2 items-center">
          <PrimarySidebarTrigger />
          <FavoriteButton />
        </div>
        <div className="py-1 px-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Dashboards </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <SearchButton />
        <div className="flex gap-2">
          <DarkModeToggle />
          <ActivitiesButton />
          <NotificationButton />
          <SecondarySidebarTrigger />
        </div>
      </div>
    </header>
  );
}
