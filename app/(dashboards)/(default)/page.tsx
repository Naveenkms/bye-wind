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
      <div className="flex flex-1 flex-col gap-4 p-7">
        <PageTitle title="eCommerce" />
        <div className="grid auto-rows-min gap-7 md:grid-cols-2">
          <MetricsSection />
          <StackedBarChart/>
          <RevenueChart/>
          <RevenueByLocation />
          <TopSellingProducts />
          <TotalSales />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </>
  );
}
