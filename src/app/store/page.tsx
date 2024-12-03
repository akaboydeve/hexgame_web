'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from 'framer-motion'
import { Loader } from 'lucide-react'
import axios from 'axios'
import { useToast } from '@/hooks/use-toast'
import { ranks, discordLink } from '@/mcinfo'

export default function RanksPage() {
  const [selectedRank, setSelectedRank] = useState<typeof ranks[0] | null>(null)
  const [purchaseRank, setPurchaseRank] = useState<typeof ranks[0] | null>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    payerName: '',
    discordName: '',
    minecraftIgn: '',
    honeypot: '',
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePurchase = async(e: React.FormEvent) => {
    e.preventDefault()
    if (formData.honeypot) {
      console.warn("Bot detected")
      return
    }

    setLoading(true)
    try {
      const res = await axios.post("/api/send-details", {
        payerName: formData.payerName,
        discordName: formData.discordName,
        minecraftIgn: formData.minecraftIgn,
        rankName: purchaseRank?.name,
      })
      
      if (res.status === 200) {
        toast({ title: 'Purchase details sent successfully!' })
      }
    } catch (error) {
      console.error('Error:', error)
      toast({ title: 'Failed to process purchase', variant: "destructive" })
    }
    finally {
      setLoading(false)
      setPurchaseRank(null)
      setFormData({ payerName: '', discordName: '', minecraftIgn: '', honeypot: '' })
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] py-8 px-4 lg:px-0 xl:px-4 mx-auto max-w-6xl">
      <motion.h1 
        className="text-5xl font-bold text-[#FFD700] minecraft-font text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Server Ranks
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {ranks.map((rank, index) => (
          <motion.div
            key={rank.id}
            className="bg-[#2C2C2C] border-4 border-[#FFD700] rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={rank.image}
                  alt={rank.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2 minecraft-font text-center text-[#FFA500]">
                {rank.name}
              </h2>
              <p className="text-2xl text-[#FFD700] text-center mb-4">₹{rank.price}</p>
              <div className="space-y-4">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300 transform hover:scale-105"
                  onClick={() => setSelectedRank(rank)}
                >
                  View Features
                </Button>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white transition duration-300 transform hover:scale-105"
                  onClick={() => setPurchaseRank(rank)}
                >
                  Purchase Now
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 bg-[#2C2C2C] border-2 hidden lg:block border-[#FFD700] rounded-lg max-w-6xl mx-auto overflow-x-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#1A1A1A] text-[#FFD700]">
              <th className="p-4 border border-[#FFD700]">Features</th>
              {ranks.map((rank) => (
                <th key={rank.id} className="p-4 border border-[#FFD700]">
                  {rank.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {['features', 'commands', 'weeklyRewards', 'specials'].map((category, index) => (
              <motion.tr 
                key={category}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                className="bg-[#2C2C2C] text-[#FFD700]"
              >
                <td className="p-4 border border-[#FFD700] font-bold capitalize">{category}</td>
                {ranks.map((rank) => (
                  <td key={rank.id} className="p-4 border border-[#FFD700]">
                    <ul className="list-disc pl-4">
                      {Array.isArray(rank[category as keyof typeof rank]) ? (
                        (rank[category as keyof typeof rank] as string[]).map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))
                      ) : 'N/A'}
                    </ul>
                  </td>
                ))}
              </motion.tr>
            ))}
            <motion.tr
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-[#2C2C2C] text-[#FFD700]"
            >
              <td className="p-4 border border-[#FFD700] font-bold">Purchase</td>
              {ranks.map((rank) => (
                <td key={rank.id} className="p-4 border border-[#FFD700]">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white transition duration-300 transform hover:scale-105"
                    onClick={() => setPurchaseRank(rank)}
                  >
                    Buy {rank.name}
                  </Button>
                </td>
              ))}
            </motion.tr>
          </tbody>
        </table>
      </motion.div>

      {/* Details Dialog */}
      <Dialog open={!!selectedRank} onOpenChange={() => setSelectedRank(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto bg-[#2C2C2C] border-4 border-[#FFD700] z-[1001]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold minecraft-font text-[#FFD700]">{selectedRank?.name} Details</DialogTitle>
          </DialogHeader>
          {selectedRank && (
            <div className="mt-4 space-y-4 text-[#FFD700]">
              <div>
                <h3 className="font-bold text-lg mb-2">Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedRank.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Commands</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedRank.commands.map((command, i) => (
                    <li key={i}>{command}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Weekly Rewards</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedRank.weeklyRewards.map((reward, i) => (
                    <li key={i}>{reward}</li>
                  ))}
                </ul>
              </div>
              {selectedRank.specials && (
                <div>
                  <h3 className="font-bold text-lg mb-2">Special Perks</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedRank.specials.map((special, i) => (
                      <li key={i}>{special}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Purchase Dialog */}
      <Dialog open={!!purchaseRank} onOpenChange={() => setPurchaseRank(null)}>
        <DialogContent className="bg-[#2C2C2C] border-4 border-[#FFD700] z-[1001] max-h-screen overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold minecraft-font text-[#FFD700]">Purchase {purchaseRank?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-[#FFD700]">
            <p>Scan the QR code to complete your payment:</p>
            <div className="flex justify-center">
              <Image src="/qr.png" alt="Payment QR Code" width={200} height={200} />
            </div>
            <form onSubmit={handlePurchase} className="space-y-4">
              <Input
                name="payerName"
                placeholder="Payment Name"
                value={formData.payerName}
                onChange={handleChange}
                required
                className="bg-[#1A1A1A] text-[#FFD700] border-[#FFD700]"
              />
              <Input
                name="discordName"
                placeholder="Discord Username"
                value={formData.discordName}
                onChange={handleChange}
                required
                className="bg-[#1A1A1A] text-[#FFD700] border-[#FFD700]"
              />
              <Input
                name="minecraftIgn"
                placeholder="Minecraft Username"
                value={formData.minecraftIgn}
                onChange={handleChange}
                required
                className="bg-[#1A1A1A] text-[#FFD700] border-[#FFD700]"
              />
              <input
                type="text"
                name="honeypot"
                className="hidden"
                value={formData.honeypot}
                onChange={handleChange}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setPurchaseRank(null)} className="bg-[#1A1A1A] text-[#FFD700] border-[#FFD700]">
                  Cancel
                </Button>
                <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700 text-white">
                  {loading ? <><Loader className="mr-2 h-4 w-4 animate-spin" /> Processing...</> : 'Confirm Purchase'}
                </Button>
              </DialogFooter>
            </form>
            <p className="text-sm text-center">
              Need help? Join our{' '}
              <a href={discordLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Discord
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

