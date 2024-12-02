import { discordLink, serverIp, serverName } from '@/mcinfo'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/store', label: 'Store' },
    { href: '/vote', label: 'Vote' },
    { href: '/staff', label: 'Staff' },
    { href: '/about', label: 'About' },
  ]

  const legalLinks = [
    { href: '/PrivacyPolcy', label: 'Privacy Policy' },
    { href: '/TermsAndConditions', label: 'Terms of Service' },
    { href: '/CancellationAndRefund', label: 'Refund Policy' },
    { href: '/ContactUs', label: 'Contact Us' },
  ]

  return (
    <footer className="dark:bg-[#1A1A1A] border-t-2 border-[#FFD700]">
      <div className="container mx-auto px-4 pb-4">
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
          <div className="grid grid-cols-2 gap-4 text-center">
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
        </div>
      </div>
    </footer>
  )
}

export default Footer

