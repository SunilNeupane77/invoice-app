import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
  

export default function Home() {
    return (
<Card >
  <CardHeader>
    <CardTitle>Sunil Neupane Card</CardTitle>
    <CardDescription>Card Made By Sunil Neupane using Shadcn Ui library</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-yellow-600 align-middle"> The following paragraph display the information about the content of the card</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    )};