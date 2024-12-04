"use client";

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { serverName } from '@/mcinfo'
import { User, LogIn, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<{ name: "", id: 0 } | null>(null)
  
  const { toast } = useToast()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/store', label: 'Store' },
    { href: '/about', label: 'About' },
    { href: '/vote', label: 'Vote' },
    { href: '/staff', label: 'Staff' },
  ]

  const handleLogout = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get("/api/user/logout")
      if (data.success) setUser(null)
    }
    catch (error) {
      toast({title: "Error", description: "Failed to logout", variant: "destructive"})
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const getUser = async () => {
      setLoading(true)
      try {
        const res = await axios.get("/api/user")
        if (res.data.success) setUser(res.data.user)
      } catch (error) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    getUser()
  }, [])

  return (
    <motion.header 
      className="bg-[#f7f7f7]/90 dark:bg-[#1A1A1A]/90 border-b-2 border-[#5B8731] dark:border-[#FFD700] sticky top-0 z-[1000] px-4 md:px-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
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
          
          <nav className="hidden md:flex items-center justify-center flex-grow">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  className="minecraft-font text-lg text-[#333333] dark:text-[#FFD700] hover:text-[#5B8731] dark:hover:text-[#FFC800] transition-colors duration-200 mx-4"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {loading ? ("Loading ...") : (
            user ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-[#2C2C2C] dark:bg-[#333333] px-3 py-1 rounded-full">
                  <User className="h-5 w-5 text-[#5B8731] dark:text-[#FFD700]" />
                  <span className="minecraft-font text-sm text-[#5B8731] dark:text-[#FFD700]">
                    {user?.name || 'User'}
                  </span>
                </div>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5 text-[#5B8731] dark:text-[#FFD700]" />
                </Button>
              </div>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm" className="minecraft-font">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )
            )}

            <motion.button
              className="md:hidden minecraft-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Menu
            </motion.button>
          </div>
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
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

