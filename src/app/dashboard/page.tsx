import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
  
export default function Home() {
  return (
    <main className=" flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto">
      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Date</TableHead>
      <TableHead>Customer</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className=" text-left font-medium">
       <span className="font-semibold">
       10/31/22024
       </span>
       
        </TableCell>
      <TableCell className="text-left">Sunil Neupane</TableCell>
      <TableCell className="text-left">sunilneupane956@gmail.com</TableCell>
      <TableCell className="text-left">success</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </main>
  ); 
}
