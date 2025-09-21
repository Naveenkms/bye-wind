import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const data = [
  {
    name: "New York",
    value: 72000
  },
  {
    name: "San Francisco",
    value: 39000,
  },
  {
    name: "Sydney",
    value: 25000,
  },
  {
    name: "Singapore",
    value: 61000,
  },
];

export function RevenueByLocation() {
  return (
    <Card className="flex-1 @3xl/main:flex-1/4 gap-4">
      <CardHeader>
        <CardTitle>Revenue by Location</CardTitle>
      </CardHeader>
      <CardContent className="flex-col gap-4">
        <Image src="/world-map.png" alt="World Map" width={154} height={82} />
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between h-5 text-xs">
                <span>{item.name}</span>
                <span>{(item.value / 1000).toFixed(0)}k</span>
              </div>
              <Progress value={(item.value / 100000) * 100} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
