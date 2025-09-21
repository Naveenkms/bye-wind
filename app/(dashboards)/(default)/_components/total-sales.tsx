"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

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

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function TotalSales() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <Card className="gap-4 flex-1 @3xl/main:flex-1/4">
      <CardHeader>
        <CardTitle>Total Sales</CardTitle>
      </CardHeader>
      <CardContent className="gap-4 flex-col">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            {/* <ChartLegend content={<ChartLegendContent />} /> */}

            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
        <div className="flex-1 space-y-3 text-xs w-full">
          <div className="h-[1.375rem] flex items-center justify-between">
            <div className="pl-1 flex items-center gap-[5px]">
              <div className="bg-foreground size-1.5 rounded-full" />
              <p>Direct</p>
            </div>
            <p>$300.56</p>
          </div>
          <div className="h-[1.375rem] flex items-center justify-between">
            <div className="pl-1 flex items-center gap-[5px]">
              <div className="bg-[var(--chart-4)] size-1.5 rounded-full" />
              <p>Affilliate</p>
            </div>
            <p>$135.18</p>
          </div>
          <div className="h-[1.375rem] flex items-center justify-between">
            <div className="pl-1 flex items-center gap-[5px]">
              <div className="bg-[var(--chart-5)] size-1.5 rounded-full" />
              <p>Sponsored</p>
            </div>
            <p>$154.02</p>
          </div>
           <div className="h-[1.375rem] flex items-center justify-between">
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
