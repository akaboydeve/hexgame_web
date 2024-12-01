import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { recentDonors as donors } from "@/mcinfo"

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

