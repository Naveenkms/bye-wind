import { TimerIcon } from "@/components/icons/timer-icon";
import { Button } from "@/components/ui/button";

export function ActivitiesButton() {
  return (
    <Button variant="ghost" size="icon" className="rounded-full">
      <TimerIcon className="size-5"/>
    </Button>
  );
}
