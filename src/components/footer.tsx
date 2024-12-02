import { discordLink, serverIp, serverName } from '@/mcinfo'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const navItems = [
    { href: '/store', label: 'Store' },
    { href: '/vote', label: 'Vote' },
    { href: '/rules', label: 'Rules' },
    { href: '/staff', label: 'Staff' },
    { href: '/about', label: 'About' },
    { href: '/ShippingAndDelivery', label: 'Shipping' },
    { href: '/TermsAndConditions', label: 'Terms And Conditions' },
    { href: '/PrivacyPolicy', label: 'Privacy Policy' },
    { href: '/CancellationAndRefunds', label: 'Refunds' },
    { href: '/ContactUs', label: 'Contact Us' },
  ]

  return (
    <footer className="dark:bg-[#1A1A1A] border-t-2 border-[#FFD700]">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            {/* <p className="minecraft-font text-2xl text-[#FFD700]">{serverName}</p> */}
            <p className="text-base font-bold text-[#FFD700]">{serverIp}</p>
            
            <Link
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block overflow-visible transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src="/discord.svg"
                alt="discord logo"
                width={32}
                height={32}
                className=" transition-transform duration-300 group-hover:scale-125"
              />
            </Link>


          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="minecraft-font text-[#FFD700] text-lg hover:text-[#FFC800] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-[#FFD700]/80">&copy;{new Date().getFullYear()} {serverName}</p>
            <p className="text-[#FFD700]/60">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

