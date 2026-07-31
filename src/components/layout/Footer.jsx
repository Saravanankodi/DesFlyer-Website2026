import { Link } from 'react-router-dom'
import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { siteConfig } from '../../data/siteConfig'
import { footerLinks } from '../../data/nav'

const socialIcons = {
  LinkedIn: FiLinkedin,
  WhatsApp: BsWhatsapp,
  Instagram: FiInstagram,
  Facebook: FiFacebook,
  X: FiTwitter,
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-32">
      <div className="max-w-shell mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="font-display font-bold text-xl text-[var(--fg)]">
              DES<span className="text-signal">Flyer</span>
            </Link>
            <p className="mt-4 text-sm text-[var(--fg)]/60 leading-relaxed max-w-xs">
              {siteConfig.location}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal mb-4">Email</p>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-[var(--fg)]/80 hover:text-signal">
              {siteConfig.email}
            </a>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal mt-6 mb-4">Phone</p>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-sm text-[var(--fg)]/80 hover:text-signal">
              {siteConfig.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              {footerLinks.company.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-[var(--fg)]/70 hover:text-signal">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {footerLinks.services.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-[var(--fg)]/70 hover:text-signal">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal mb-4">Follow us</p>
            <div className="flex gap-3">
              {siteConfig.socials.map((s) => {
                const Icon = socialIcons[s.name]
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-signal hover:text-signal transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="node-divider my-10" />

        <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--fg)]/50">
          <p>&copy; {new Date().getFullYear()} DesFlyer. All rights reserved.</p>
          <p>Designed by DesFlyer</p>
        </div>
      </div>
    </footer>
  )
}
