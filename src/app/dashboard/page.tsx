import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-12">
        <div className=" flex justify-between">
        <h1 className="text-3xl font-semibold justify-center text-center">Dashboard</h1>
        <p>
            <Button variant="ghost" className="inline-flex" asChild>
                <Link href="/invoices/new"> 
                <CirclePlus className="h-4 w-4 gap-2"/>
                Create Invoice
                </Link>
            </Button>
        </p>
        </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] p-4">Date

            </TableHead>
            <TableHead className="p-4" >Customer</TableHead>
          <TableHead className="p-4">Email</TableHead>
            <TableHead className="p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className=" text-left font-medium">
              <span className="font-semibold">10/31/22024</span>
            </TableCell>
            <TableCell className="text-left">Sunil Neupane</TableCell>
            <TableCell className="text-left">
              sunilneupane956@gmail.com
            </TableCell>
            <TableCell className="text-left">
                <Badge >
                      Open
                </Badge>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
