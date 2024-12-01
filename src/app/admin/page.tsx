"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { initialDonors, initialRanks, initialStaff } from "@/mcinfo"
import { Trash2 } from "lucide-react"



export default function AdminDashboard() {
  const [ranks, setRanks] = useState(initialRanks)
  const [staff, setStaff] = useState(initialStaff)
  const [donors, setDonors] = useState(initialDonors)

  const [rankData, setRankData] = useState({
    name: "",
    price: 0,
    benefits: "",
  });

  // Handle input change for any field dynamically
  const handleInputChange = (e: any) => {
    const { name, value } = e.target; // Get the input's name and value
    
    setRankData((prevData: any) => ({
      ...prevData, // Preserve the other fields
      [name]: value, // Update the specific field in the state
    }));
  };

  const handleDeleteRank = (name: string) => {
    setRanks((prev) => prev.filter((rank) => rank.name !== name))
  }
  // Dummy functions for adding/removing items
  const addRank = (e: any) => {
    e.preventDefault()
    setRanks((prev) => [...prev, rankData])
    setRankData({ name: "", price: 0, benefits: "" })
  }

  const addStaff = () => {
    setStaff([...staff, { name: 'New Staff', role: 'New Role', avatar: '/placeholder.svg' }])
  }

  const addDonor = () => {
    setDonors([...donors, { name: 'New Donor', amount: 0 }])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ranks</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Benefits</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>  
            <TableBody>
              {ranks.map((rank) => (
                <TableRow key={rank.name}>
                  <TableCell>{rank.name}</TableCell>
                  <TableCell>${rank.price}</TableCell>
                  <TableCell>{rank.benefits}</TableCell>
                  <TableCell><Button onClick={() => handleDeleteRank(rank.name)}><Trash2 color="red" /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <form action="" className="flex" onSubmit={addRank}>
            <label htmlFor="name" className="sr-only">name</label>
            <Input name="name" id="name" type="text" placeholder="Name" autoComplete="off" value={rankData.name} onChange={handleInputChange}/>

            <label htmlFor="price" className="sr-only">price</label>
            <Input name="price" id="price" type="text" placeholder="Price" value={rankData.price} onChange={handleInputChange}/>

            <label htmlFor="benefits" className="sr-only">benefits</label>
            <Input name="benefits" id="benefits" type="text" placeholder="Benefits" value={rankData.benefits} onChange={handleInputChange}/>

            <Button type="submit">Add Rank</Button>
          </form>
        </CardFooter>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Staff</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staff.map((member) => (
                <TableRow key={member.name}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button onClick={addStaff}>Add Staff</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Donors</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
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
        </CardContent>
        <CardFooter>
          <Button onClick={addDonor}>Add Donor</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

