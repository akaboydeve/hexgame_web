"use client"

import { discordLink, serverIp, serverName } from '@/mcinfo'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/store', label: 'Store' },
    { href: '/vote', label: 'Vote' },
    { href: '/staff', label: 'Staff' },
    { href: '/about', label: 'About' },
  ]

  const legalLinks = [
    { href: '/PrivacyPolicy', label: 'Privacy Policy' },
    { href: '/TermsAndConditions', label: 'Terms of Service' },
    { href: '/CancellationAndRefund', label: 'Refund Policy' },
    { href: '/ContactUs', label: 'Contact Us' },
    { href: '/ShippingAndDelivery', label: 'Shipping' },
  ]

  const pathname = usePathname()

  return (
    <footer className="dark:bg-[#1A1A1A] border-t-2 border-[#FFD700]">
      {pathname.toLowerCase() === "/store" && <div className="bg-slate-800">
        <div className="max-w-4xl mx-auto text-sm text-center py-3 text-blue-400">
          The Hexgame server is in no way affiliated with Mojang Studios, nor should it be considered a company endorsed by
          Mojang Studios. Any contributions or purchases made on the store goes to HexGame
          For support or a purchase history, please send us a ticket on our {" "}
          <a href={discordLink} className="text-sky-500">
            HexGame Discord
          </a>
        </div>
      </div>}
      <div className="container mx-auto px-4 pb-4 max-w-7xl">

        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center mb-6">
            <Image
              src="/hexgame.png"
              alt={`${serverName} Logo`}
              width={40}
              height={40}
              className="mr-3"
            />
            <div>
              <h2 className="text-xl font-bold text-[#FFD700] minecraft-font">{serverName}</h2>
              <p className="text-base text-[#FFD700]/80">{serverIp}</p>
              <a
                href="https://gamestore.hexgame.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5B8731] hover:text-[#6B9B3C] minecraft-font"
              >
                Visit Our Games
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#FFD700] hover:text-[#FFC800] mx-3 my-1 text-lg minecraft-font"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#FFD700]/80 hover:text-[#FFC800] text-base minecraft-font"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        <hr className="mb-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-3" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#FFD700]/60 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} {serverName}. All Rights Reserved.
          </p>
          <a
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD700]/60 hover:text-[#FFC800]"
          > 
            <Image src={"/discord.svg"} alt="discord" width={32} height={32} />
            <span className="sr-only">Discord community</span>
          </a>
          <p className="text-[#FFD700]/60 text-sm mb-4 sm:mb-0">
            Website made by
            <a
              href={"https://mail.google.com/mail/?view=cm&to=nhero.dev@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#009dff]/60 hover:text-[#007bff]"
            > 
              {" "}NHero
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

