import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/components/icons/user";
import { APP_NAME } from "@/constants/meta";

export function NavTitle() {
  return (
    <div className="flex items-center p-1 gap-x-2">
      <Avatar className="size-6">
        <AvatarImage src="/avatars/user.png" alt="user logo" />
        <AvatarFallback>
          <User />
        </AvatarFallback>
      </Avatar>
      <span className="text-sm">{APP_NAME}</span>
    </div>
  );
}
