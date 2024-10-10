import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/db";
import { sql } from "drizzle-orm";
export default async function Home() {
    const results=await db.execute(sql`SELECT current_database()`)
  return (
    <main className=" flex flex-col justify-center h-full  gap-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Create Invoice</h1>
      <div>
        {
            JSON.stringify(results)
        }
        <form action="" className="grid gap-4 max-w-xs">
            <div>
                <Label htmlFor="name" className="block font-semibold mb-2">Billing Name</Label>
                <Input type="text" name="name" id="name"/>
            </div>
            <div>
                <Label  htmlFor="email" className="block font-semibold mb-2">Billing email</Label>
                <Input type="email" name="email" id="email"/>
            </div>
            <div>
                <Label htmlFor="value" className="block font-semibold mb-2">Value</Label>
                <Input type="text" name="value" id="value" />
            </div>
            <div>
                <Label htmlFor="description" className="block font-semibold mb-2">Description</Label>
                <Textarea name="description" id="description"></Textarea>
            </div>
            <div>
                <Button className="w-full font-semibold">
                    Submit
                </Button>
            </div>
            
        </form>
      </div>
    </main>
  );
}
