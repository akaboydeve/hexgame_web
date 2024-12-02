"use client"

import { motion } from 'motion/react'

export default function RefundPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center minecraft-font text-[#FFD700]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Cancellation and Refund Policy
      </motion.h1>
      <motion.div 
        className="space-y-6 text-[#FFD700]/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          At Hexgame, we strive to ensure your satisfaction with our services. However, we understand that there may be instances where you need to cancel a purchase or request a refund.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">Cancellations</h2>
        <p>
          As our products are digital goods that are delivered instantly, we generally do not offer cancellations once a purchase has been made and the digital item has been delivered to your account.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">Refund Eligibility</h2>
        <p>
          Refunds may be considered under the following circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>The purchased item was not delivered to your account due to a technical error on our part.</li>
          <li>The item or service does not perform as described at the time of purchase.</li>
          <li>There was an unauthorized transaction on your account (in which case, please also contact your payment provider).</li>
        </ul>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">Refund Process</h2>
        <p>
          To request a refund:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Contact our support team within 7 days of your purchase.</li>
          <li>Provide your Minecraft username and the details of your purchase.</li>
          <li>Explain the reason for your refund request.</li>
        </ol>
        <p>
          We will review each refund request on a case-by-case basis. If approved, refunds will be processed to the original method of payment within 5-10 business days.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">Exceptions</h2>
        <p>
          Please note that certain items or services may be explicitly marked as non-refundable. In these cases, we reserve the right to decline refund requests.
        </p>
      </motion.div>
    </div>
  )
}

