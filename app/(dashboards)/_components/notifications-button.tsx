import { BellIcon } from "@/components/icons/bell-icon";
import { Button } from "@/components/ui/button";

export function NotificationButton() {
  return (
    <Button variant="ghost" size="icon" className="rounded-full">
      <BellIcon className="size-5" />
    </Button>
  );
}
