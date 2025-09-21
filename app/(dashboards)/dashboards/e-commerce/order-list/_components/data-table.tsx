"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/components/icons/plus-icon";
import { SortIcon } from "@/components/icons/sort-icon";
import { ArrowUpAndDown } from "@/components/icons/arrow-up-and-down";
import { SearchInput } from "@/components/search-input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronRight } from "@/components/icons/chevron-right";
import { ChevronLeft } from "@/components/icons/chevron-left";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <div>
      <div className="mb-4 p-2 h-11 flex items-center justify-between bg-primary-light dark:bg-background/5 rounded-lg">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <PlusIcon className="size-5" />
          </Button>
          <Button
            onClick={() => {
              table
                .getColumn("orderId")
                ?.toggleSorting(
                  table.getColumn("orderId")?.getIsSorted() === "asc"
                );
            }}
            variant="ghost"
            size="icon"
          >
            <SortIcon className="size-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ArrowUpAndDown className="size-5" />
          </Button>
        </div>
        <SearchInput
          value={(table.getColumn("orderId")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("orderId")?.setFilterValue(event.target.value)
          }
        />
      </div>
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="first:px-1 py-0 h-10 last:pr-1"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="[&_tr:last-child]:border-b">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-b border-foreground/5 hover:bg-primary-light"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="first:px-1 py-0 h-10 last:pr-1"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
        <Pagination className="py-3 justify-end">
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft className="size-5" />
              </Button>{" "}
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <ChevronRight className="size-5" />
              </Button>{" "}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
    </div>
  );
}
