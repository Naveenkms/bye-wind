import { Header } from "@/app/(dashboards)/_components/header";
import { PageTitle } from "@/app/(dashboards)/_components/page-title";
import { DataTable } from "./_components/data-table";
import { columns, Payment } from "./_components/columns";

const data: Payment[] = [
  { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
];

export default function EcommercePage() {
  return (
    <>
      <Header title="Order List" />
      <div className="flex flex-1 flex-col gap-4 p-7">
        <PageTitle title="eCommerce" />
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
