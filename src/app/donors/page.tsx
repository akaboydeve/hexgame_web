import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

const donors = [
  { name: 'Player1', amount: 50 },
  { name: 'Player2', amount: 75 },
  { name: 'Player3', amount: 100 },
  { name: 'Player4', amount: 25 },
  { name: 'Player5', amount: 200 },
]

export default function DonorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Top Donors</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Player Name</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donors.map((donor) => (
            <TableRow key={donor.name}>
              <TableCell>{donor.name}</TableCell>
              <TableCell>${donor.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-8 text-center">
        <Link href="/ranks">
          <Button size="lg">Donate Now</Button>
        </Link>
      </div>
    </div>
  )
}

