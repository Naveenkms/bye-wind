"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", currentWeek: 12, previousWeek: 8 },
  { month: "Feb", currentWeek: 10, previousWeek: 15 },
  { month: "Mar", currentWeek: 8, previousWeek: 18 },
  { month: "Apr", currentWeek: 15, previousWeek: 16 },
  { month: "May", currentWeek: 18, previousWeek: 12 },
  { month: "Jun", currentWeek: 20, previousWeek: 10 },
];

const chartConfig = {
  previousWeek: {
    label: "Previous Week",
    color: "var(--chart-1)",
  },
  currentWeek: {
    label: "Current Week",
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
          className="min-[14.5rem] h-[14.5rem] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            // margin={{
            //   left: 12,
            //   right: 12,
            // }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>  value === 0 ? "0" : `${value}M`}
              domain={[0, 30]}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="currentWeek"
              type="natural"
              stroke="var(--color-currentWeek)"
              strokeWidth={4}
              // strokeDasharray="5 5"
              dot={false}
            />
            <Line
              dataKey="previousWeek"
              type="natural"
              stroke="var(--color-previousWeek)"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
