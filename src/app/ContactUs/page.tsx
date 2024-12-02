"use client"

import { useToast } from '@/hooks/use-toast'
import { serverIp } from '@/mcinfo'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    setLoading(true)
    try {
      const res = await axios.post("/api/contact", formData);
      
      console.log(res)

      if (res.status === 200) {
        toast({title: 'Data sent to Discord successfully!'});
      }
    } catch (error) {
      console.error('Error sending data to Discord:', error);
      toast({title: 'Failed to send data.', variant: "destructive"});
    }
    finally {
      setLoading(false);
    }
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center minecraft-font text-[#FFD700]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <motion.div 
        className="max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-[#FFD700]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="minecraft-input w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-[#FFD700]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="minecraft-input w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-[#FFD700]">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="minecraft-input w-full h-32"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="minecraft-btn w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (<>Sending... <Loader2 /></>) : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
      <motion.div 
        className="mt-12 text-center text-[#FFD700]/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold minecraft-font text-[#FFD700] mb-4">Other Ways to Reach Us</h2>
        <p>Discord: akaboy</p>
        <p>Email: support@hexgame.in</p>
        <p>Server IP: {serverIp}</p>
      </motion.div>
    </div>
  )
}

