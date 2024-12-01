'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ranks as storeItems } from '@/mcinfo'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Rank {
  id: number;
  name: string;
  price: number;
  image: string;
  features: string[];
  commands: string[];
  weeklyRewards: string[];
  specials?: string[]; // Optional field for ranks with specials
}

export default function StorePage() {
  const [selectedRank, setSelectedRank] = useState<Rank | null>(null);

  const openModal = (rank: Rank) => {
    setSelectedRank(rank);
  }

  const handlePurchase = (e: any) => {
    e.preventDefault();

  } 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center minecraft-font text-[#FFD700]">Server Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {storeItems.map((item, idx) => (
          <div key={item.id} className="minecraft-card group hover:scale-105 transition-transform duration-200">
            <div className="relative w-full h-[200px] mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
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
              <Button onSubmit={handlePurchase}>Purchase</Button>
            </div>
          </div>
        ))}
      </div>
      <Dialog open={!!selectedRank} onOpenChange={() => setSelectedRank(null)}>
        <DialogContent className='max-h-[80vh] overflow-y-auto'>
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
    </div>
  )
}

function ItemList({ title, items }: { title: string, items: string[] }) {
  return (
    <Card className="mb-4 border-0">
      <CardHeader className=" pt-0 text-[#6B9B3C]">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li key={index} className="text-sm text-[#5B8731]">{item}</li>
          ))}
          {items.length == 3 && <li className="text-sm text-[#85d23c] font-[500]">and more...</li>}
        </ul>
      </CardContent>
    </Card>
  )
}
