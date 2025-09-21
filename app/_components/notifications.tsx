import { Slot } from "@radix-ui/react-slot";

import { BugIcon } from "@/components/ui/bug-icon";
import { cn } from "@/lib/cn";
import { User } from "@/components/icons/user";
import { SignalIcon } from "@/components/ui/signal-icon";
import { formatRelativeDate } from "@/lib/date";

function Notifications() {
  return (
    <div>
      <h3 className="font-semibold text-sm px-1 py-2 mb-2">Notifications</h3>
      <div className="space-y-2">
        <Notification>
          <NotificationIcon>
            <BugIcon />
          </NotificationIcon>
          <NotificationContent>
            <NotificationHeader>
              You have a bug that needs to be fixed.
            </NotificationHeader>
            <NotificationDescription>
              {formatRelativeDate(new Date())}
            </NotificationDescription>
          </NotificationContent>
        </Notification>
        <Notification>
          <NotificationIcon>
            <div className="bg-primary-purple text-primary-foreground flex items-center justify-center">
              <User />
            </div>
          </NotificationIcon>
          <NotificationContent>
            <NotificationHeader>
              You have a bug that needs to be fixed.
            </NotificationHeader>
            {/* 59 minutes ago */}
            <NotificationDescription>
              {formatRelativeDate(new Date(Date.now() - 59 * 60 * 1000))}
            </NotificationDescription>
          </NotificationContent>
        </Notification>
        <Notification>
          <NotificationIcon>
            <BugIcon />
          </NotificationIcon>
          <NotificationContent>
            <NotificationHeader>
              You have a bug that needs to be fixed.
            </NotificationHeader>
            {/* 12 hours ago */}
            <NotificationDescription>
              {formatRelativeDate(new Date(Date.now() - 12 * 60 * 60 * 1000))}
            </NotificationDescription>
          </NotificationContent>
        </Notification>
        <Notification>
          <NotificationIcon>
            <SignalIcon />
          </NotificationIcon>
          <NotificationContent>
            <NotificationHeader>
              Andi Lane subscribed to you{" "}
            </NotificationHeader>
            <NotificationDescription>
              {formatRelativeDate(new Date(Date.now() - 24 * 60 * 60 * 1000))}
            </NotificationDescription>
          </NotificationContent>
        </Notification>
      </div>
    </div>
  );
}

function Notification({ children }: { children?: React.ReactNode }) {
  return <div className="mr-2 flex items-start gap-2 p-1">{children}</div>;
}

function NotificationIcon({
  className,
  ...props
}: React.ComponentProps<typeof Slot>) {
  return (
    <Slot
      className={cn("size-6 flex-shrink-0 rounded-lg", className)}
      {...props}
    />
  );
}

function NotificationContent({ children }: { children?: React.ReactNode }) {
  return <div>{children}</div>;
}

function NotificationHeader({ children }: { children?: React.ReactNode }) {
  return <h5 className="line-clamp-1 text-sm">{children}</h5>;
}

function NotificationDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-secondary-foreground">{children}</p>;
}

export { Notifications };
