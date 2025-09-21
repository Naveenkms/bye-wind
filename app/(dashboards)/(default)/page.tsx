import { Header } from "@/app/(dashboards)/_components/header";
import { PageTitle } from "@/app/(dashboards)/_components/page-title";
import { MetricsSection } from "./_components/metrics-section";
import { StackedBarChart } from "./_components/stacked-bar-chart";
import { RevenueChart } from "./_components/revenue-chart";
import { RevenueByLocation } from "./_components/revenue-by-location";
import { TopSellingProducts } from "./_components/top-selling-products";
import { TotalSales } from "./_components/total-sales";

export default function DefaultPage() {
  return (
    <>
      <Header title="Default" />
      <div className="@container/main flex flex-1 flex-col gap-4 p-7">
        <PageTitle title="eCommerce" />
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-7 @3xl/main:flex-row">
            <MetricsSection />
            <StackedBarChart />
          </div>
          <div className="flex flex-col gap-7 @3xl/main:flex-row">
            <RevenueChart />
            <RevenueByLocation />
          </div>
          <div className="flex flex-col gap-7 @3xl/main:flex-row">
            <TopSellingProducts />
            <TotalSales />
          </div>
        </div>
      </div>
    </>
  );
}
