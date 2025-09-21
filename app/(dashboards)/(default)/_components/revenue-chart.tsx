"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <Card className="flex-1 @3xl/main:flex-3/4 gap-4">
      <CardHeader>
        <CardTitle className="flex gap-4 items-center h-[1.375rem]">
          <div>Revenue</div>
          <span className="text-muted-foreground">|</span>
          <div className="flex items-center gap-[5px] px-2">
            <div className="size-1.5 rounded-full bg-primary-foreground" />
            <p className="text-xs">
              Current Week <strong className="font-semibold">$58,211</strong>
            </p>
          </div>
          <div className="flex items-center gap-[5px] px-2">
            <div className="size-1.5 rounded-full bg-secondary-cyan" />
            <p className="text-xs">
              Previous Week <strong className="font-semibold">$68,768</strong>
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="min-[7.5rem] h-[7.5rem] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="natural"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
