"use client"


import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useState } from "react"

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    honeypot: ''
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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setLoading(true)
    try {
      const res = await axios.post("/api/user/admin-login", {
        email: formData.email,
        password: formData.password,
      })

      if (res.data.success) {
        toast({title: "LogIn Success", description: res.data.message})
      } else {
        toast({title: "LogIn Failed", description: res.data.message, variant: "destructive"})
      }
    } catch (error) {
      toast({title: "LogIn Failed", description: "Failed to Login", variant: "destructive"})
      
    } finally {
      setLoading(false)
    }

    setFormData({
      email: '',
      password: '',
      honeypot: ''
    })
  }

  return (
    <section className="flex items-center justify-center px-4 mx-auto text-white">
      <div className="border-2 px-4 py-2 h-full">
        <div className="flex flex-col text-center mb-4">
          <h1 className="text-3xl font-bold text-white">Admin Login</h1>
          <h2 className="text-xl font-semibold text-gray-400" >Login To Access Admin Dashboard</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="You should know this"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="You should know this too"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="hidden">
              <label htmlFor="honeypot">Honeypot</label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full ">
            {loading ? (<>LogingIn... <Loader2 /></>) : 'Login'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
