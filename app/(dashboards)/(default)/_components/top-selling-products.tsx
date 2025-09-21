import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve  Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
  },
];

export function TopSellingProducts() {
  return (
    <Card className="flex-1 @3xl/main:flex-3/4 gap-1">
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-[16.5rem] overflow-auto w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[36.5%]">Name</TableHead>
                <TableHead className="w-[21.2%]">Price</TableHead>
                <TableHead className="w-[21.2%]">Quantity</TableHead>
                <TableHead className="w-[21.2%]">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((product) => (
                <TableRow key={product.name}>
                  <TableCell className="w-[36.5%]">{product.name}</TableCell>
                  <TableCell className="w-[21.2%]">{product.price}</TableCell>
                  <TableCell className="w-[21.2%]">
                    {product.quantity}
                  </TableCell>
                  <TableCell className="w-[21.2%]">{product.amount}</TableCell>
                </TableRow>
              ))}
              {data.map((product) => (
                <TableRow key={product.name}>
                  <TableCell className="w-[36.5%]">{product.name}</TableCell>
                  <TableCell className="w-[21.2%]">{product.price}</TableCell>
                  <TableCell className="w-[21.2%]">
                    {product.quantity}
                  </TableCell>
                  <TableCell className="w-[21.2%]">{product.amount}</TableCell>
                </TableRow>
              ))}
              {data.map((product) => (
                <TableRow key={product.name}>
                  <TableCell className="w-[36.5%]">{product.name}</TableCell>
                  <TableCell className="w-[21.2%]">{product.price}</TableCell>
                  <TableCell className="w-[21.2%]">
                    {product.quantity}
                  </TableCell>
                  <TableCell className="w-[21.2%]">{product.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
