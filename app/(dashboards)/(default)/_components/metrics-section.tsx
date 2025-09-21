import { TrendingDownIcon } from "@/components/icons/trending-down-icon";
import { TrendingUpIcon } from "@/components/icons/trending-up-icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MetricsSection() {
  return (
    <div className="grid auto-rows-max @xs/main:col-span-2 @xs/main:grid-cols-2 @3xl/main:col-span-2 gap-7">
      <Card variant="blue">
        <CardHeader>
          <CardTitle>Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-semibold text-2xl">3,781</div>
          <div className="flex items-center gap-1 text-xs">
            <span>+11.01%</span>
            <TrendingUpIcon />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-semibold text-2xl">1,219</div>
          <div className="flex items-center gap-1 text-xs">
            <span>-0.03%</span>
            <TrendingDownIcon />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-semibold text-2xl">$695</div>
          <div className="flex items-center gap-1 text-xs">
            <span>+15.03%</span>
            <TrendingUpIcon />
          </div>
        </CardContent>
      </Card>
      <Card variant="purple">
        <CardHeader>
          <CardTitle>Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-semibold text-2xl">30.1%</div>
          <div className="flex items-center gap-1 text-xs">
            <span>+6.08%</span>
            <TrendingUpIcon />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
