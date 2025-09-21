"use client";
import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "@/components/icons/user";
import { CalendarIcon } from "@/components/icons/calendar-icon";
import { formatRelativeDate } from "@/lib/date";
import { cn } from "@/lib/cn";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  orderId: string;
  user: {
    name: string;
    imgSrc: string;
  };
  project: string;
  address: string;
  date: string;
  status: "in progress" | "pending" | "complete" | "approved" | "rejected";
};

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderId",
    header: "Order ID",
    cell: ({ row }) => row.original.orderId,
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar className="size-6">
          <AvatarImage
            src={row.original.user.imgSrc}
            alt={`image of user ${row.original.user.name}`}
          />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <span className="capitalize">{row.original.user.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "project",
    header: "Project",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <CalendarIcon className="size-4" />
        <span>{formatRelativeDate(row.original.date)}</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex items-center gap-[5px]">
        <div
          className={cn(
            "size-1.5 rounded-full shrink-0",
            row.original.status === "in progress" && "bg-in-progress",
            row.original.status === "pending" && "bg-pending",
            row.original.status === "complete" && "bg-complete",
            row.original.status === "approved" && "bg-approved",
            row.original.status === "rejected" && "bg-rejected"
          )}
        />
        <span
          className={cn(
            "capitalize",
            row.original.status === "in progress" && "text-in-progress",
            row.original.status === "pending" && "text-pending",
            row.original.status === "complete" && "text-complete",
            row.original.status === "approved" && "text-approved",
            row.original.status === "rejected" && "text-rejected"
          )}
        >
          {row.original.status}
        </span>
      </div>
    ),
  },
  // {
  //   accessorKey: "email",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  // },
];
