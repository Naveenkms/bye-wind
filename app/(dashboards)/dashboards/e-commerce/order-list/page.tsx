import { Header } from "@/app/(dashboards)/_components/header";
import { PageTitle } from "@/app/(dashboards)/_components/page-title";
import { DataTable } from "./_components/data-table";
import { columns, Order } from "./_components/columns";

const data: Order[] = [
  {
    orderId: "#CM9801",
    user: {
      name: "Natali Craig",
      imgSrc: "/images/users/sample-1.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "01/01/2023",
    status: "in progress",
  },
  {
    orderId: "#CM9802",
    user: {
      name: "Drew Cano",
      imgSrc: "/images/users/sample-2.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "01/01/2023",
    status: "pending",
  },
  {
    orderId: "#CM9803",
    user: {
      name: "Kate Morrison",
      imgSrc: "/images/users/sample-3.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "01/01/2023",
    status: "complete",
  },
  {
    orderId: "#CM9804",
    user: {
      name: "Orlando Diggs",
      imgSrc: "/images/users/sample-4.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "01/01/2023",
    status: "approved",
  },
  {
    orderId: "#CM9805",
    user: {
      name: "Drew Cano",
      imgSrc: "/images/users/sample-2.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "01/05/2023",
    status: "in progress",
  },
  {
    orderId: "#CM9806",
    user: {
      name: "Kate Morrison",
      imgSrc: "/images/users/sample-3.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "01/10/2023",
    status: "pending",
  },
  {
    orderId: "#CM9807",
    user: {
      name: "Orlando Diggs",
      imgSrc: "/images/users/sample-4.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "01/15/2023",
    status: "complete",
  },
  {
    orderId: "#CM9808",
    user: {
      name: "Natali Craig",
      imgSrc: "/images/users/sample-1.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "01/20/2023",
    status: "approved",
  },
  {
    orderId: "#CM9809",
    user: {
      name: "Drew Cano",
      imgSrc: "/images/users/sample-2.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "01/25/2023",
    status: "in progress",
  },
  {
    orderId: "#CM9810",
    user: {
      name: "Kate Morrison",
      imgSrc: "/images/users/sample-3.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "01/30/2023",
    status: "pending",
  },
  {
    orderId: "#CM9811",
    user: {
      name: "Orlando Diggs",
      imgSrc: "/images/users/sample-4.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "02/01/2023",
    status: "complete",
  },
  {
    orderId: "#CM9812",
    user: {
      name: "Natali Craig",
      imgSrc: "/images/users/sample-1.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "02/05/2023",
    status: "approved",
  },
  {
    orderId: "#CM9813",
    user: {
      name: "Drew Cano",
      imgSrc: "/images/users/sample-2.png",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "02/10/2023",
    status: "in progress",
  },
];

export default function OrderListPage() {
  return (
    <>
      <Header title="Order List" />
      <div className="flex flex-1 flex-col gap-4 p-7">
        <PageTitle title="Order List" />
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
