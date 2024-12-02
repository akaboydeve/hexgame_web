"use client"

import { motion } from 'motion/react'

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center minecraft-font text-[#FFD700]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Privacy Policy
      </motion.h1>
      <motion.div 
        className="space-y-6 text-[#FFD700]/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          At Hexgame, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, make a purchase, or contact our support team. This may include your Minecraft username, email address, and payment information.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices, and respond to your support requests.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">3. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet is 100% secure.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">4. Third-Party Services</h2>
        <p>
          We may use third-party services to process payments or analyze server data. These services have their own privacy policies, and we encourage you to read them.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">5. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
        <p className="mt-6">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </motion.div>
    </div>
  )
}

