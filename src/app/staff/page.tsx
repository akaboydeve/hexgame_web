import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"


const staff = [
  { name: 'Admin Steve', role: 'Server Owner', avatar: 'https://mc-heads.net/avatar/hypixel/100' },
  { name: 'Mod Alex', role: 'Head Moderator', avatar: 'https://mc-heads.net/avatar/shadow/100' },
  { name: 'Builder Creeper', role: 'Lead Builder', avatar: 'https://mc-heads.net/avatar/vennormal/100' },
  { name: 'Dev Enderman', role: 'Plugin Developer', avatar: 'https://mc-heads.net/avatar/akaboy/100' },
]

export default function StaffPage() {
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
        <Button size="lg">Join Our Team</Button>
      </div>
    </div>
  )
}

