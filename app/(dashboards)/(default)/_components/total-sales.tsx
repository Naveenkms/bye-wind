"use client";

import * as React from "react";
import {
  Label,
  Pie,
  PieChart,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  //   ChartLegend,
  //   ChartLegendContent,
} from "@/components/ui/chart";

export const description = "A radial chart with stacked sections";

const chartData = [
  { category: "direct", revenue: 300.56, fill: "#1f2937" },
  { category: "affiliate", revenue: 135.18, fill: "#86efac" },
  { category: "sponsored", revenue: 154.02, fill: "#8b5cf6" },
  { category: "email", revenue: 48.96, fill: "#7dd3fc" },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
  },
  direct: {
    label: "Direct",
    color: "var(--foreground)",
  },
  affiliate: {
    label: "Affiliate",
    color: "var(--chart-4)",
  },
  sponsored: {
    label: "Sponsored",
    color: "var(--chart-5)",
  },
  email: {
    label: "E-mail",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

export function TotalSales() {
  const totalRevenue = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.revenue, 0);
  }, []);

  const largestSegmentPercentage = React.useMemo(() => {
    const largest = Math.max(...chartData.map((item) => item.revenue));
    return ((largest / totalRevenue) * 100).toFixed(1);
  }, [totalRevenue]);

  return (
    <Card className="gap-4 flex-1 @3xl/main:flex-1/4">
      <CardHeader>
        <CardTitle>Total Sales</CardTitle>
      </CardHeader>
      <CardContent className="gap-4 flex-col">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[140px] w-[140px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="revenue"
              nameKey="category"
              innerRadius={40}
              outerRadius="100%"
              strokeWidth={5}
              paddingAngle={6}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-3 text-xs w-full">
          <div className="h-[1.375rem] flex items-center justify-center gap-4 md:justify-between">
            <div className="pl-1 flex items-center gap-[5px]">
              <div className="bg-foreground size-1.5 rounded-full" />
              <p>Direct</p>
            </div>
            <p>$300.56</p>
          </div>
          <div className="h-[1.375rem] flex items-center justify-center gap-4 md:justify-between">
            <div className="pl-1 flex items-center gap-[5px]">
              <div className="bg-[var(--chart-4)] size-1.5 rounded-full" />
              <p>Affilliate</p>
            </div>
            <p>$135.18</p>
          </div>
          <div className="h-[1.375rem] flex items-center justify-center gap-4 md:justify-between">
            <div className="pl-1 flex items-center gap-[5px]">
              <div className="bg-[var(--chart-5)] size-1.5 rounded-full" />
              <p>Sponsored</p>
            </div>
            <p>$154.02</p>
          </div>
          <div className="h-[1.375rem] flex items-center justify-center gap-4 md:justify-between">
            <div className="pl-1 flex items-center gap-[5px]">
              <div className="bg-[var(--chart-6)] size-1.5 rounded-full" />
              <p>E-mail</p>
            </div>
            <p>$48.96</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
