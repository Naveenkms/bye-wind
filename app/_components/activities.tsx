import { Slot } from "@radix-ui/react-slot";

import { BugIcon } from "@/components/ui/bug-icon";
import { cn } from "@/lib/cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/components/icons/user";

const data = [
  {
    _id: 1,
    title: "You have a bug that needs to be fixed.",
    user: "user 1",
    imgSrc: "/images/contributors/sample-1.png",
    date: new Date(),
  },
  {
    _id: 2,
    title: "You have a bug that needs to be fixed.",
    user: "user 2",
    imgSrc: "/images/contributors/sample-2.png",
    date: new Date(),
  },
  {
    _id: 3,
    title: "You have a bug that needs to be fixed.",
    user: "user 3",
    imgSrc: "/images/contributors/sample-3.png",
    date: new Date(),
  },
  {
    _id: 4,
    title: "You have a bug that needs to be fixed.",
    user: "user 4",
    imgSrc: "/images/contributors/sample-4.png",
    date: new Date(),
  },
  {
    _id: 5,
    title: "You have a bug that needs to be fixed.",
    user: "user 5",
    imgSrc: "/images/contributors/sample-5.png",
    date: new Date(),
  },
];

function Activities() {
  return (
    <div>
      <h3 className="font-semibold text-sm px-1 py-2 mb-2">Activities</h3>
      <div className="space-y-2">
        {data.map((item, index) => (
          <Activity key={item._id} hideTrail={index === data.length - 1}>
            <ActivityUser src={item.imgSrc} alt={`${item.user} image`} />
            <ActivityContent>
              <ActivityHeader>
                You have a bug that needs to be fixed.
              </ActivityHeader>
              <ActivityDescription>sds</ActivityDescription>
            </ActivityContent>
          </Activity>
        ))}
      </div>
    </div>
  );
}

function Activity({
  hideTrail = false,
  children,
}: {
  hideTrail?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mr-2 flex items-start gap-2 p-1 relative">
      {children}
      <div
        className={cn(
          "absolute w-2 left-0 -bottom-1 translate-x-3 flex justify-center h-3.5",
          hideTrail && "hidden"
        )}
      >
        <div className="w-[1px] bg-border h-full" />
      </div>
    </div>
  );
}

function ActivityUser({ ...props }: React.ComponentProps<typeof AvatarImage>) {
  return (
    <Avatar className="size-6">
      <AvatarImage {...props} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
  );
}

function ActivityContent({ children }: { children?: React.ReactNode }) {
  return <div>{children}</div>;
}

function ActivityHeader({ children }: { children?: React.ReactNode }) {
  return <h5 className="line-clamp-1 text-sm">{children}</h5>;
}

function ActivityDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-secondary-foreground">{children}</p>;
}

export { Activities };
