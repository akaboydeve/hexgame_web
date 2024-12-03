"use client";

import Link from 'next/link'
import Image from 'next/image'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { recentDonors, serverFeatures, serverIp, serverName, upcomingEvents } from '@/mcinfo'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { motion } from 'motion/react'
import { useInView } from '@/hooks/useInView'
import { useToast } from '@/hooks/use-toast';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [donorsRef, donorsInView] = useInView({ threshold: 0.2 });
  const [eventsRef, eventsInView] = useInView({ threshold: 0.2 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2 });
  const { toast } = useToast();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4 minecraft-font text-[#5B8731] dark:text-[#FFD700]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TypewriterEffect
            words={[{text: "Welcome"},{text: "to"},{text: serverName}]}
          />
        </motion.h1>
        <motion.div
          className="flex justify-center items-center space-x-4 mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PixelLetter letter="H" color="bg-[#FF0000]" />
          <PixelLetter letter="E" color="bg-[#FF0000]" />
          <PixelLetter letter="X" color="bg-[#FF0000]" />
          <PixelLetter letter="O" color="bg-[#FF0000]" />
        </motion.div>
        <motion.p 
          className="text-2xl mb-2 minecraft-font"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Join the adventure at
        </motion.p>
          <motion.button 
            className="minecraft-btn px-2 py-1 dark:text-white dark:bg-[#5B8731] dark:hover:bg-[#6B9B3C] dark:border-[#3F5E22] dark:hover:border-[#4A6D28] text-3xl mb-6 minecraft-font cursor-pointer active:scale-95 transition-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={() => {
              navigator.clipboard.writeText(serverIp)
                .then(() => toast({title: "Copied to clipboard"}))
                .catch((err) => console.error("Failed to copy: ", err));
            }}
          >
            {serverIp}
          </motion.button>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <Link href="/store">
          <motion.button 
            className="minecraft-btn text-xl px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Store
          </motion.button>
        </Link>
        <motion.p 
          className="text-[#FFD700]/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Support the server and get amazing perks!
        </motion.p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6 minecraft-font text-[#FFD700]">
          Our Games
        </h2>
        <motion.div
          className="minecraft-card p-6 max-w-2xl mx-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-[#FFD700] text-lg mb-4 minecraft-font">
            We are creating our own games! Go down and play
          </p>
          <a
            href="https://gamestore.hexgame.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block minecraft-btn text-xl px-8 py-3 hover:scale-105 transition-transform"
          >
            Visit Our Games
          </a>
        </motion.div>
      </motion.section>

      {/* Server Stats */}
      <motion.section 
        ref={statsRef as React.RefObject<HTMLElement>}
        initial={{ opacity: 0, y: 50 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6 minecraft-font text-[#FFD700]">
          Server Statistics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Registered Players', value: '1000+' },
            { label: 'Uptime', value: '99.9%' },
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label} 
              className={`minecraft-card p-4 ${idx === 0 ? 'md:col-start-2' : 'md:col-start-3'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold minecraft-font text-[#FFD700]">{stat.value}</h3>
              <p className="text-[#FFD700]/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Recent Donors */}
      <motion.section
        ref={donorsRef as React.RefObject<HTMLElement>}
        initial={{ opacity: 0, y: 50 }}
        animate={donorsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 minecraft-font text-[#FFD700] text-center">
          Recent Donors
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {recentDonors.map((donor, index) => (
            <motion.div 
              key={donor.name} 
              className="minecraft-card flex items-center space-x-4 p-4"
              initial={{ opacity: 0, x: -50 }}
              animate={donorsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={donor.avatar}
                alt={donor.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="minecraft-font text-[#FFD700]">{donor.name}</h3>
                <p className="text-[#FFD700]/80">Rs.{donor.amount}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <motion.section
        ref={eventsRef as React.RefObject<HTMLElement>}
        initial={{ opacity: 0, y: 50 }}
        animate={eventsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 minecraft-font text-[#FFD700] text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <motion.div 
              key={event.name} 
              className="minecraft-card p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={eventsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2 minecraft-font text-[#FFD700]">{event.name}</h3>
              <p className="text-[#FFD700]/80 mb-2">{event.date}</p>
              <p className="text-[#FFD700]/60">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      

      {/* Server Features */}
      <motion.section
        ref={featuresRef as React.RefObject<HTMLElement>}
        initial={{ opacity: 0, y: 50 }}
        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 minecraft-font text-[#FFD700] text-center">
          Game Modes
        </h2>
        <InfiniteMovingCards items={serverFeatures} />
      </motion.section>
    </div>
  )
}


const PixelLetter = ({ letter, color }: { letter: string; color: string }) => {
  const pixelMap: { [key: string]: boolean[][] } = {
    'H': [
      [true, false, false, false, true],
      [true, false, false, false, true],
      [true, true, true, true, true],
      [true, false, false, false, true],
      [true, false, false, false, true],
    ],
    'E': [
      [true, true, true, true, true],
      [true, false, false, false, false],
      [true, true, true, true, false],
      [true, false, false, false, false],
      [true, true, true, true, true],
    ],
    'X': [
      [true, false, false, false, true],
      [false, true, false, true, false],
      [false, false, true, false, false],
      [false, true, false, true, false],
      [true, false, false, false, true],
    ],
    'O': [
      [true, true, true, true, true],
      [true, false, false, false, true],
      [true, false, false, false, true],
      [true, false, false, false, true],
      [true, true, true, true, true],
    ]
  };

  return (
    <motion.div 
      className={`grid grid-cols-5 gap-0.5 p-1  rounded`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {pixelMap[letter].flat().map((pixel, index) => (
        <motion.div 
          key={index}
          className={`w-3 h-3 ${pixel && color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.01 }}
        />
      ))}
    </motion.div>
  );
};