"use client"

import React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { signInWithGoogle } from "@/appwrite/server/oauth"


export default function Login() {

  return (
    <section className="flex flex-grow justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Login Using Google to Purchase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="mt-4" action={signInWithGoogle}>
          
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card> 
    </section>
  )
}





    