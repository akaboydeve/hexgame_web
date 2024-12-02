"use client"

import { motion } from 'motion/react'

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center minecraft-font text-[#FFD700]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Shipping and Delivery
      </motion.h1>
      <motion.div 
        className="space-y-6 text-[#FFD700]/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          As Hexgame is a digital Minecraft server, we do not offer physical shipping for our products. All purchases, including ranks, items, and other digital goods, are delivered instantly to your in-game account upon successful payment.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">Digital Delivery</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>All purchases are delivered instantly to your Minecraft account on our server.</li>
          <li>You must be online on the Hexgame server to receive your items.</li>
          <li>If you encounter any issues with receiving your digital items, please contact our support team.</li>
        </ul>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">Account Verification</h2>
        <p>
          To ensure secure delivery of digital goods, we may require account verification. This process helps us confirm that you are the rightful owner of the Minecraft account receiving the items.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">Delivery Issues</h2>
        <p>
          If you experience any problems with the delivery of your digital items, please contact our support team immediately. We will work to resolve any issues as quickly as possible.
        </p>
      </motion.div>
    </div>
  )
}

