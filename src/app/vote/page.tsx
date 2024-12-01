import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const votingSites = [
  { name: 'MinecraftServers.org', link: '#' },
  { name: 'TopG', link: '#' },
  { name: 'Planet Minecraft', link: '#' },
  { name: 'Minecraft-MP', link: '#' },
]

export default function VotePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Vote for Our Server</h1>
      <p className="text-center mb-8">Support us by voting on these websites. Each vote helps us grow and improve!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {votingSites.map((site) => (
          <Card key={site.name}>
            <CardHeader>
              <CardTitle>{site.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Vote for us on {site.name} to help us climb the rankings!</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={site.link} target="_blank" rel="noopener noreferrer">Vote Now</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Voting Rewards</h2>
        <div className="text-center">
          For each vote, you'll receive:
          <ul className="list-disc list-inside mt-2">
            <li>10 Diamonds</li>
            <li>1 Voting Crate Key</li>
            <li>$1000 in-game currency</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

