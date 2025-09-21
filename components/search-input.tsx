import { cn } from "@/lib/cn";
import { Input } from "./ui/input";
import { Lens } from "./icons/lens";

export function SearchInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <div className={cn("w-40 h-7 px-2 rounded-lg border flex items-center gap-1 border-input overflow-hidden", className)}>
        <Lens/>
      <Input placeholder="Search" className="h-full border-none ring-0 outline-0 p-0 focus-visible:ring-0" {...props} />
    </div>
  );
}
