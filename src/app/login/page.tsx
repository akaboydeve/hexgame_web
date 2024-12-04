"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { signInWithGoogle } from "@/appwrite/server/oauth"
import Image from "next/image"

const PixelBlock = ({ delay }: { delay: number }) => (
  <motion.div
    className="w-8 h-8 bg-[#5B8731] m-1"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  />
)

export default function Login() {
  return (
    <section className="flex items-center justify-center px-4 mx-auto">
      <div className="max-w-md w-full h-full space-y-4">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/hexgame.svg" alt="hexgame logo" width={120} height={120} className="mb-4" />
          <h1 className="text-4xl font-bold text-[#FFD700] minecraft-font mb-2">Welcome to Hexgame</h1>
          <h2 className="text-xl text-[#FFD700]/80 minecraft-font">Login to purchase ranks</h2>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <PixelBlock key={i} delay={0.7 + i * 0.1} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form action={signInWithGoogle}>
            <Button 
              className="w-full h-14 bg-blue-600 hover:bg-blue-800 active:bg-indigo-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 text-lg flex items-center justify-center space-x-4"
            >
              <Image src="/google.svg" alt="google logo" width={24} height={24} className="bg-white rounded-full" />
              <span>Login with Google</span>
            </Button>
          </form>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <PixelBlock key={i} delay={1.4 + i * 0.1} />
          ))}
        </motion.div>

        <motion.p
          className="text-center text-[#FFD700]/60 minecraft-font"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          By logging in, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </div>
    </section>
  )
}

