"use client";

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './theme-toggle'
import Image from 'next/image'
import { serverName } from '@/mcinfo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/store', label: 'Store' },
    { href: '/about', label: 'About' },
    { href: '/vote', label: 'Vote' },
    { href: '/staff', label: 'Staff' },
  ]

  return (
    <motion.header 
      className="bg-[#f7f7f7]/90 dark:bg-[#1A1A1A]/90 border-b-2 border-[#5B8731] dark:border-[#FFD700] sticky top-0 z-[1000]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/hexgame.svg" 
              alt="Hexgame Logo" 
              width={32} 
              height={32}
              className="pixelated"
            />
            <span className="text-2xl font-bold minecraft-font text-[#5B8731] dark:text-[#FFD700]">{serverName}</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  className="minecraft-font text-lg text-[#333333] dark:text-[#FFD700] hover:text-[#5B8731] dark:hover:text-[#FFC800] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </nav>

          <motion.button
            className="md:hidden minecraft-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Menu
          </motion.button>
        </div>
        
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden py-4 border-t border-[#5B8731] dark:border-[#FFD700]/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-center minecraft-font text-[#333333] dark:text-[#FFD700] hover:text-[#5B8731] dark:hover:text-[#FFC800]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex justify-center pt-2">
              <ThemeToggle />
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

