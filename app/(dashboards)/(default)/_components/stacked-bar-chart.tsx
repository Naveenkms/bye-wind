"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", projections: 16, actuals: 4 },
  { month: "February", projections: 19, actuals: 6 },
  { month: "March", projections: 17, actuals: 4 },
  { month: "April", projections: 22, actuals: 6 },
  { month: "May", projections: 14, actuals: 4 },
  { month: "June", projections: 19, actuals: 6 },
];

const chartConfig = {
  projections: {
    label: "Actuals",
    color: "var(--chart-1)",
  },
  actuals: {
    label: "Projections",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function StackedBarChart() {
  return (
    <Card className="flex-1 @3xl/main:flex-1/2 gap-4 dark:stroke-accent">
      <CardHeader>
        <CardTitle>Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="min-h-[10.5rem] h-[10.5rem] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            maxBarSize={20}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(value) => (value === 0 ? "0" : `${value}M`)}
            />{" "}
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="projections"
              stackId="a"
              fill="var(--color-projections)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="actuals"
              stackId="a"
              fill="var(--color-actuals)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
