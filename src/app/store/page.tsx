'use client'

import { useState } from 'react'
import Image from 'next/image'
import { discordLink, ranks as storeItems } from '@/mcinfo'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import axios from 'axios'
import { useToast } from '@/hooks/use-toast'
import { Loader } from 'lucide-react'

interface Rank {
  id: number;
  name: string;
  price: number;
  image: string;
  features: string[];
  commands: string[];
  weeklyRewards: string[];
  specials?: string[];
}

export default function StorePage() {
  const [selectedRank, setSelectedRank] = useState<Rank | null>(null);
  const [purchaseRank, setPurchaseRank] = useState<Rank | null>(null);
  const [payerName, setPayerName] = useState('');
  const [discordName, setDiscordName] = useState('');
  const [minecraftIgn, setMinecraftIgn] = useState('');
  const [loading, setLoading] = useState(false);

  const openModal = (rank: Rank) => setSelectedRank(rank);
  const openPurchaseModal = (rank: Rank) => setPurchaseRank(rank);
  const { toast } = useToast();

  const handlePurchase = async(e: any) => {
    e.preventDefault()

    setLoading(true)
    try {
      const res = await axios.post("/api/send-details", {
        discordName,
        minecraftIgn,
        rankName: purchaseRank?.name,
        payerName,
      });
      
      console.log(res)

      if (res.status === 200) {
        toast({title: 'Data sent to Discord successfully!'});
      }
    } catch (error) {
      console.error('Error sending data to Discord:', error);
      toast({title: 'Failed to send data.', variant: "destructive"});
    }
    finally {
      setLoading(false);
    }

    setPurchaseRank(null);
    setPayerName('');
    setDiscordName('');
    setMinecraftIgn('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center minecraft-font text-[#FFD700]">Server Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {storeItems.map((item) => (
          <div key={item.id} className="minecraft-card group hover:scale-105 transition-transform duration-200">
            <div className="relative w-full h-[200px] mb-4">
              <Image src={item.image} alt={item.name} fill className="object-contain" />
            </div>
            <h2 className="text-2xl font-bold mb-2 minecraft-font text-[#FFD700] text-center">{item.name}</h2>
            <p className="text-[#FFD700] text-center text-xl mb-4">Rs.{item.price}/month</p>
            <div className="space-y-4 mb-4">
              <ItemList title="Features" items={item.features.slice(0, 3)} />
              <ItemList title="Commands" items={item.commands.slice(3, 6)} />
              <ItemList title="Weekly Rewards" items={item.weeklyRewards} />
            </div>
            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={() => openModal(item)}>See More</Button>
              <Button onClick={() => openPurchaseModal(item)}>Purchase</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Details Dialog */}
      <Dialog open={!!selectedRank} onOpenChange={() => setSelectedRank(null)}>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedRank?.name} Details</DialogTitle>
          </DialogHeader>
          {selectedRank && (
            <div className="mt-2">
              <ItemList title="Features" items={selectedRank.features} />
              <ItemList title="Commands" items={selectedRank.commands} />
              <ItemList title="Weekly Rewards" items={selectedRank.weeklyRewards} />
              {selectedRank.specials && <ItemList title="Specials" items={selectedRank.specials} />}
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setSelectedRank(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Purchase Dialog */}
      <Dialog open={!!purchaseRank} onOpenChange={() => setPurchaseRank(null)} >
        <DialogContent className="z-[1001] bg-gray-950 max-h-screen overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Purchase {purchaseRank?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Scan the QR code below to complete the payment:</p>
            <div className="flex justify-center">
              <Image src="/qr.png" alt="QR Code" width={300} height={300} />
            </div>
            <p className="text-center">
              Need help? Join our <a href={discordLink} target="_blank" className="text-blue-500 underline">Discord</a>.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input
                placeholder="PAYER Name"
                value={payerName}
                onChange={(e) => setPayerName(e.target.value)}
              />
              <Input
                placeholder="Discord Name"
                value={discordName}
                onChange={(e) => setDiscordName(e.target.value)}
              />
              <Input
                placeholder="Minecraft IGN"
                value={minecraftIgn}
                onChange={(e) => setMinecraftIgn(e.target.value)}
              />
            </form>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPurchaseRank(null)}>Cancel</Button>
            <Button onClick={handlePurchase}>{loading ? (<>Confirming <Loader /></>) : ("Confirm") }</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ItemList({ title, items }: { title: string, items: string[] }) {
  return (
    <Card className="mb-4 border-0">
      <CardHeader className="pt-0 text-[#6B9B3C]">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li key={index} className="text-sm text-[#5B8731]">{item}</li>
          ))}
          {items.length === 3 && <li className="text-sm text-[#85d23c] font-[500]">and more...</li>}
        </ul>
      </CardContent>
    </Card>
  );
}
