"use client"

import { motion } from 'motion/react'

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center minecraft-font text-[#FFD700]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Terms of Service
      </motion.h1>
      <motion.div 
        className="space-y-6 text-[#FFD700]/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          Welcome to Hexgame. By accessing our server and using our services, you agree to comply with and be bound by the following terms and conditions of use.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Hexgame services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">2. User Conduct</h2>
        <p>
          You agree to use Hexgame services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the server.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">3. Account Security</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">4. Intellectual Property</h2>
        <p>
          The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Hexgame server are protected under applicable copyrights, trademarks and other proprietary rights.
        </p>
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mt-6">5. Modifications to Terms</h2>
        <p>
          Hexgame reserves the right to modify these terms at any time. We will always post the most current version on our website. By continuing to use the server after changes have been made, you agree to be bound by the modified terms.
        </p>
      </motion.div>
    </div>
  )
}

