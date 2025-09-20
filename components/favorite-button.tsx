import { StarIcon } from "@/components/icons/star-icon";
import { Button } from "./ui/button";

export function FavoriteButton() {
  return (
    <Button variant="ghost" size="icon" className="rounded-full">
      <StarIcon className="size-5" />
    </Button>
  );
}
