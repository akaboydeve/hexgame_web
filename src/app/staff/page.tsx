"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { initialStaff as staff } from "@/mcinfo"
import { useToast } from "@/hooks/use-toast"

export default function StaffPage() {
  const { toast } = useToast()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Staff</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {staff.map((member) => (
          <Card key={member.name}>
            <CardHeader>
              <Image
                src={member.avatar}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mx-auto"
              />
              <CardTitle className="text-center">{member.name}</CardTitle>
              <CardDescription className="text-center">{member.role}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" onClick={() => toast({title: "Coming Soon", description: "Till then enjoy the server!"})} >Join Our Team</Button>
      </div>
    </div>
  )
}

