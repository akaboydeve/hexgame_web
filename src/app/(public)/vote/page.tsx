import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const votingSites = [
  { name: 'TopMinecraftServers.org', link: 'https://topminecraftservers.org/server/23476' },
  { name: 'Servers-minecraft.net', link: 'https://servers-minecraft.net/server-hexgame.40992' },
  { name: 'Topg.org', link: 'https://topg.org/minecraft-servers/server-670526' },
  { name: 'Minecraft-mp.com', link: 'https://minecraft-mp.com/server-s340732' }
]

export default function VotePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Vote for Our Server</h1>
      <p className="text-center mb-8">Support us by voting on these websites. Each vote helps us grow and improve!</p>
      <div className="flex justify-center items-center m-4 space-x-4">
        {votingSites.map((site) => (
          <Card key={site.name} className="bg-zinc-800">
            <CardHeader>
              <CardTitle>{site.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Vote for us on {site.name} to help us climb the rankings!</p>
            </CardContent>
            <CardFooter>
              <Button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
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
            <li>/back</li>
            <li>10 min fly</li>
            <li>2 Diamonds</li>
            <li>$1000 in-game currency</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

