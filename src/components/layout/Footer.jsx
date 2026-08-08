// import { Link } from 'react-router-dom'
// import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'
// import { BsWhatsapp } from 'react-icons/bs'
// import { siteConfig } from '../../data/siteConfig'
// import { footerLinks } from '../../data/nav'

// const socialIcons = {
//   LinkedIn: FiLinkedin,
//   WhatsApp: BsWhatsapp,
//   Instagram: FiInstagram,
//   Facebook: FiFacebook,
//   X: FiTwitter,
// }

// export default function Footer() {
//   return (
//     <footer className="border-t border-[var(--border)] mt-32">
//       <div className="max-w-shell mx-auto px-6 lg:px-10 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           <div className="md:col-span-1">
//             <Link to="/" className="font-display font-bold text-xl text-[var(--fg)]">
//               <img className='w-40 h-10' src="/images/portfolio/desflyer nlogo.png"
//               />            </Link>
//             <p className="mt-4 text-sm text-[var(--fg)]/60 leading-relaxed max-w-xs">
//               {siteConfig.location}
//             </p>
//           </div>

//           <div>
//             <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal mb-4">Email</p>
//             <a href={`mailto:${siteConfig.email}`} className="text-sm text-[var(--fg)]/80 hover:text-signal">
//               {siteConfig.email}
//             </a>
//             <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal mt-6 mb-4">Phone</p>
//             <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-sm text-[var(--fg)]/80 hover:text-signal">
//               {siteConfig.phone}
//             </a>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div className="flex flex-col gap-3">
//               {footerLinks.company.map((l) => (
//                 <Link key={l.to} to={l.to} className="text-sm text-[var(--fg)]/70 hover:text-signal">
//                   {l.label}
//                 </Link>
//               ))}
//             </div>
//             <div className="flex flex-col gap-3">
//               {footerLinks.services.map((l) => (
//                 <Link key={l.to} to={l.to} className="text-sm text-[var(--fg)]/70 hover:text-signal">
//                   {l.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div>
//             <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal mb-4">Follow us</p>
//             <div className="flex gap-3">
//               {siteConfig.socials.map((s) => {
//                 const Icon = socialIcons[s.name]
//                 return (
//                   <a
//                     key={s.name}
//                     href={s.href}
//                     aria-label={s.name}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-signal hover:text-signal transition-colors"
//                   >
//                     <Icon size={15} />
//                   </a>
//                 )
//               })}
//             </div>
//           </div>
//         </div>

//         <div className="node-divider my-10" />

//         <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--fg)]/50">
//           <p>&copy; {new Date().getFullYear()} DesFlyer. All rights reserved.</p>
//           <p>Designed by DesFlyer</p>
//         </div>
//       </div>
//     </footer>
//   )
// }






// import { Link } from 'react-router-dom'
// import {
//   FiLinkedin,
//   FiInstagram,
//   FiFacebook,
//   FiTwitter,
// } from 'react-icons/fi'
// import { BsWhatsapp } from 'react-icons/bs'
// import { siteConfig } from '../../data/siteConfig'
// import { footerLinks } from '../../data/nav'

// const socialIcons = {
//   LinkedIn: FiLinkedin,
//   WhatsApp: BsWhatsapp,
//   Instagram: FiInstagram,
//   Facebook: FiFacebook,
//   X: FiTwitter,
// }

// export default function Footer() {
//   return (
//     <footer className="px-6 lg:px-10 py-16">
//       <div className="max-w-shell mx-auto">

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//           <img    className='w-40 h-10'            src="/images/portfolio/desflyer nlogo.png"
// />

//           {/* LOCATION */}
//           <div>
//             <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal mb-4">
//               Location
//             </p>

//             <p className="text-sm text-[var(--fg)]/80">
//               {siteConfig.location}
//             </p>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal mb-4">
//               Email
//             </p>

//             <a
//               href={`mailto:${siteConfig.email}`}
//               className="text-sm text-[var(--fg)]/80 hover:text-signal transition-colors"
//             >
//               {siteConfig.email}
//             </a>

//             <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal mt-6 mb-4">
//               Phone
//             </p>

//             <a
//               href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
//               className="text-sm text-[var(--fg)]/80 hover:text-signal transition-colors"
//             >
//               {siteConfig.phone}
//             </a>
//           </div>

//           {/* LINKS */}
//           <div className="grid grid-cols-2 gap-6">

//             <div className="flex flex-col gap-3">
//               {footerLinks.company.map((l) => (
//                 <Link
//                   key={l.to}
//                   to={l.to}
//                   className="text-sm text-[var(--fg)]/70 hover:text-signal transition-colors"
//                 >
//                   {l.label}
//                 </Link>
//               ))}
//             </div>

//             <div className="flex flex-col gap-3">
//               {footerLinks.services.map((l) => (
//                 <Link
//                   key={l.to}
//                   to={l.to}
//                   className="text-sm text-[var(--fg)]/70 hover:text-signal transition-colors"
//                 >
//                   {l.label}
//                 </Link>
//               ))}
//             </div>

//           </div>

//           {/* SOCIALS */}
//           <div>
//             <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal mb-4">
//               Follow us
//             </p>

//             <div className="flex gap-3">

//               {siteConfig.socials.map((s) => {
//                 const Icon = socialIcons[s.name]

//                 if (!Icon) return null

//                 return (
//                   <a
//                     key={s.name}
//                     href={s.href}
//                     aria-label={`Visit DesFlyer on ${s.name}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//                       group
//                       relative
//                       w-10
//                       h-10
//                       rounded-full
//                       border
//                       border-[var(--border)]
//                       flex
//                       items-center
//                       justify-center
//                       text-[var(--fg)]/60
//                       hover:text-signal
//                       hover:border-signal
//                       hover:-translate-y-1
//                       hover:shadow-[0_8px_25px_rgba(255,255,255,0.08)]
//                       transition-all
//                       duration-300
//                     "
//                   >
//                     <Icon
//                       size={15}
//                       className="transition-transform duration-300 group-hover:scale-110"
//                     />

//                     {/* Hover ring */}
//                     <span
//                       className="
//                         absolute
//                         inset-[-4px]
//                         rounded-full
//                         border
//                         border-signal/0
//                         group-hover:border-signal/20
//                         group-hover:scale-110
//                         transition-all
//                         duration-300
//                       "
//                     />
//                   </a>
//                 )
//               })}

//             </div>
//           </div>

//         </div>

//         <div className="node-divider my-10" />

//         <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--fg)]/50">
//           <p>
//             &copy; {new Date().getFullYear()} DesFlyer. All rights reserved.
//           </p>

//           <p>
//             Designed by DesFlyer
//           </p>
//         </div>

//       </div>
//     </footer>
//   )
// }





// import { Link } from 'react-router-dom'
// import {
//   FiLinkedin,
//   FiInstagram,
//   FiFacebook,
//   FiTwitter,
//   FiArrowUpRight,
// } from 'react-icons/fi'
// import { BsWhatsapp } from 'react-icons/bs'
// import { siteConfig } from '../../data/siteConfig'
// import { footerLinks } from '../../data/nav'

// const socialIcons = {
//   LinkedIn: FiLinkedin,
//   WhatsApp: BsWhatsapp,
//   Instagram: FiInstagram,
//   Facebook: FiFacebook,
//   X: FiTwitter,
// }

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden px-6 lg:px-10 pt-20 pb-8">
//       <div className="relative max-w-shell mx-auto">

//         {/* TOP SECTION */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

//           {/* BRAND */}
//           <div>
//             <Link to="/" className="inline-block">
//               <img
//                 src="/images/portfolio/desflyer nlogo.png"
//                 alt="DesFlyer"
//                 className="w-40 h-auto object-contain"
//               />
//             </Link>

//             <p className="mt-6 max-w-xs text-sm leading-relaxed text-[var(--fg)]/50">
//               Building thoughtful digital experiences, interfaces and
//               products that move brands forward.
//             </p>

//             <div className="mt-8 flex items-center gap-2">
//               <span className="w-1.5 h-1.5 rounded-full bg-signal" />

//               <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--fg)]/35">
//                 Available for projects
//               </span>
//             </div>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal mb-6">
//               Contact
//             </p>

//             <div className="flex flex-col gap-6">

//               <div>
//                 <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg)]/25 mb-2">
//                   Email
//                 </p>

//                 <a
//                   href={`mailto:${siteConfig.email}`}
//                   className="group inline-flex items-center gap-1 text-sm text-[var(--fg)]/70 hover:text-signal transition-colors break-all"
//                 >
//                   {siteConfig.email}

//                   <FiArrowUpRight
//                     size={12}
//                     className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
//                   />
//                 </a>
//               </div>

//               <div>
//                 <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg)]/25 mb-2">
//                   Phone
//                 </p>

//                 <a
//                   href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
//                   className="text-sm text-[var(--fg)]/70 hover:text-signal transition-colors"
//                 >
//                   {siteConfig.phone}
//                 </a>
//               </div>

//               <div>
//                 <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg)]/25 mb-2">
//                   Location
//                 </p>

//                 <p className="text-sm leading-relaxed text-[var(--fg)]/60">
//                   {siteConfig.location}
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* EXPLORE */}
//           <div>
//             <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal mb-6">
//               Explore
//             </p>

//             <div className="flex flex-col gap-3">
//               {footerLinks.company.map((l) => (
//                 <Link
//                   key={l.to}
//                   to={l.to}
//                   className="group flex items-center gap-2 w-fit text-sm text-[var(--fg)]/55 hover:text-[var(--fg)] transition-colors"
//                 >
//                   <span className="w-0 h-px bg-signal group-hover:w-4 transition-all duration-300" />
//                   <span>{l.label}</span>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* SERVICES + SOCIAL */}
//           <div>
//             <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal mb-6">
//               Services
//             </p>

//             <div className="flex flex-col gap-3">
//               {footerLinks.services.map((l) => (
//                 <Link
//                   key={l.to}
//                   to={l.to}
//                   className="group flex items-center gap-2 w-fit text-sm text-[var(--fg)]/55 hover:text-[var(--fg)] transition-colors"
//                 >
//                   <span className="w-0 h-px bg-signal group-hover:w-4 transition-all duration-300" />
//                   <span>{l.label}</span>
//                 </Link>
//               ))}
//             </div>

//             {/* SOCIALS */}
//             <div className="mt-9">
//               <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--fg)]/25 mb-4">
//                 Follow DesFlyer
//               </p>

//               <div className="flex flex-wrap gap-2.5">
//                 {siteConfig.socials.map((s) => {
//                   const Icon = socialIcons[s.name]

//                   if (!Icon || !s.href) return null

//                   return (
//                     <a
//                       key={s.name}
//                       href={s.href}
//                       aria-label={`Visit DesFlyer on ${s.name}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group relative w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg)]/45 hover:text-signal hover:border-signal hover:-translate-y-1 transition-all duration-300"
//                     >
//                       <Icon
//                         size={14}
//                         className="relative z-10 transition-transform duration-300 group-hover:scale-110"
//                       />

//                       <span className="absolute inset-[-4px] rounded-full border border-transparent group-hover:border-signal/20 transition-all duration-300" />
//                     </a>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* DIVIDER */}
//         <div className="node-divider my-12" />

//         {/* BOTTOM BAR */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

//           <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--fg)]/35">
//             © {new Date().getFullYear()} DesFlyer. All rights reserved.
//           </p>

//           <Link
//             to="/"
//             className="inline-flex items-center gap-1 text-xs text-[var(--fg)]/35 hover:text-signal transition-colors"
//           >
//             Designed by DesFlyer
//             <FiArrowUpRight size={12} />
//           </Link>

//         </div>

//       </div>
//     </footer>
//   )
// }




// import { Link } from 'react-router-dom'
// import {
//   FiLinkedin,
//   FiInstagram,
//   FiFacebook,
//   FiTwitter,
//   FiArrowUpRight,
// } from 'react-icons/fi'
// import { BsWhatsapp } from 'react-icons/bs'
// import { siteConfig } from '../../data/siteConfig'
// import { footerLinks } from '../../data/nav'

// const socialIcons = {
//   LinkedIn: FiLinkedin,
//   WhatsApp: BsWhatsapp,
//   Instagram: FiInstagram,
//   Facebook: FiFacebook,
//   X: FiTwitter,
// }

// export default function Footer() {
//   return (
//     <footer className="relative px-6 lg:px-10 pt-20 pb-8 overflow-hidden bg-[#1e2133]">
//       <div className="max-w-shell mx-auto">

//         {/* MAIN FOOTER */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* BRAND */}
//           <div>
//             <Link to="/" className="inline-block">
//               <img
//                 src="/images/portfolio/desflyer nlogo.png"
//                 alt="DesFlyer"
//                 className="w-50 h-auto object-contain"
//               />
//             </Link>

//             <p className="mt-6 max-w-xs text-sm leading-relaxed text-[var(--fg)]/50">
//               Building thoughtful digital experiences, interfaces and products
//               that move brands forward.
//             </p>

//             <div className="mt-7 flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-signal" />

//               <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--fg)]/35">
//                 Available for projects
//               </span>
//             </div>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <div className="mb-6">
//               <div className="flex items-center gap-2">
//                 <span className="w-5 h-px bg-signal" />
//                 <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal font-semibold">
//                   Contact
//                 </span>
//               </div>
//             </div>

//             <div className="space-y-6">

//               <div>
//                 <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg)]/25 mb-2">
//                   Email
//                 </p>

//                 <a
//                   href={`mailto:${siteConfig.email}`}
//                   className="text-sm text-[var(--fg)]/70 hover:text-signal transition-colors break-all"
//                 >
//                   {siteConfig.email}
//                 </a>
//               </div>

//               <div>
//                 <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg)]/25 mb-2">
//                   Phone
//                 </p>

//                 <a
//                   href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
//                   className="text-sm text-[var(--fg)]/70 hover:text-signal transition-colors"
//                 >
//                   {siteConfig.phone}
//                 </a>
//               </div>

//               <div>
//                 <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg)]/25 mb-2">
//                   Location
//                 </p>

//                 <p className="text-sm text-[var(--fg)]/60 leading-relaxed">
//                   {siteConfig.location}
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* EXPLORE */}
//           <div>
//             <div className="mb-6">
//               <div className="flex items-center gap-2">
//                 <span className="w-5 h-px bg-signal" />
//                 <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal font-semibold">
//                   Explore
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-col gap-3">
//               {footerLinks.company.map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="group flex items-center gap-2 w-fit text-sm text-[var(--fg)]/55 hover:text-[var(--fg)] transition-colors"
//                 >
//                   <span className="w-0 h-px bg-signal group-hover:w-4 transition-all duration-300" />
//                   <span>{link.label}</span>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <div className="mb-6">
//               <div className="flex items-center gap-2">
//                 <span className="w-5 h-px bg-signal" />
//                 <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal font-semibold">
//                   Services
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-col gap-3">
//               {footerLinks.services.map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="group flex items-center gap-2 w-fit text-sm text-[var(--fg)]/55 hover:text-[var(--fg)] transition-colors"
//                 >
//                   <span className="w-0 h-px bg-signal group-hover:w-4 transition-all duration-300" />
//                   <span>{link.label}</span>
//                 </Link>
//               ))}
//             </div>

//             {/* SOCIALS */}
//             <div className="mt-8">

//               <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--fg)]/30 mb-4">
//                 Follow DesFlyer
//               </p>

//               <div className="flex gap-2.5 flex-wrap">
//                 {siteConfig.socials.map((social) => {
//                   const Icon = socialIcons[social.name]

//                   if (!Icon) return null

//                   return (
//                     <a
//                       key={social.name}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`Visit DesFlyer on ${social.name}`}
//                       className="group w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg)]/50 hover:text-signal hover:border-signal hover:-translate-y-1 transition-all duration-300"
//                     >
//                       <Icon
//                         size={14}
//                         className="group-hover:scale-110 transition-transform duration-300"
//                       />
//                     </a>
//                   )
//                 })}
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* DIVIDER */}
//         <div className="node-divider my-10" />

//         {/* BOTTOM */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">

//           <p className="text-xs text-[var(--fg)]/40">
//             © {new Date().getFullYear()} DesFlyer. All rights reserved.
//           </p>

//           <Link
//             to="/"
//             className="inline-flex items-center gap-1 text-xs text-[var(--fg)]/40 hover:text-signal transition-colors"
//           >
//             Designed by DesFlyer
//             <FiArrowUpRight size={12} />
//           </Link>

//         </div>

//       </div>
//     </footer>
//   )
// }






// import { Link } from 'react-router-dom'
// import {
//   FiLinkedin,
//   FiInstagram,
//   FiFacebook,
//   FiTwitter,
//   FiArrowUpRight,
// } from 'react-icons/fi'
// import { BsWhatsapp } from 'react-icons/bs'
// import { siteConfig } from '../../data/siteConfig'
// import { footerLinks } from '../../data/nav'

// const socialIcons = {
//   LinkedIn: FiLinkedin,
//   WhatsApp: BsWhatsapp,
//   Instagram: FiInstagram,
//   Facebook: FiFacebook,
//   X: FiTwitter,
// }

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden px-6 lg:px-10 pt-20 pb-8 bg-black">

//       {/* Soft background glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[180px] rounded-full bg-signal/5 blur-[100px]" />
//       </div>

//       <div className="relative z-10 max-w-shell mx-auto">

//         {/* MAIN FOOTER */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* BRAND */}
//           <div>
//             <Link to="/" className="inline-block">
//               <img
//                 src="/images/portfolio/desflyer nlogo.png"
//                 alt="DesFlyer"
//                 className="w-50 h-auto object-contain"
//               />
//             </Link>

//             <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
//               Building thoughtful digital experiences, interfaces and products
//               that move brands forward.
//             </p>

//             <div className="mt-7 flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-signal" />

//               <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
//                 Available for projects
//               </span>
//             </div>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <div className="mb-6 flex items-center gap-2">
//               <span className="w-5 h-px bg-signal" />

//               <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal font-semibold">
//                 Contact
//               </span>
//             </div>

//             <div className="space-y-6">

//               <div>
//                 <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30 mb-2">
//                   Email
//                 </p>

//                 <a
//                   href={`mailto:${siteConfig.email}`}
//                   className="text-sm text-white/70 hover:text-signal transition-colors break-all"
//                 >
//                   {siteConfig.email}
//                 </a>
//               </div>

//               <div>
//                 <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30 mb-2">
//                   Phone
//                 </p>

//                 <a
//                   href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
//                   className="text-sm text-white/70 hover:text-signal transition-colors"
//                 >
//                   {siteConfig.phone}
//                 </a>
//               </div>

//               <div>
//                 <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30 mb-2">
//                   Location
//                 </p>

//                 <p className="text-sm text-white/60 leading-relaxed">
//                   {siteConfig.location}
//                 </p>
//               </div>

//             </div>
//           </div>

//           {/* EXPLORE */}
//           <div>
//             <div className="mb-6 flex items-center gap-2">
//               <span className="w-5 h-px bg-signal" />

//               <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal font-semibold">
//                 Explore
//               </span>
//             </div>

//             <div className="flex flex-col gap-3">
//               {footerLinks.company.map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="group flex items-center gap-2 w-fit text-sm text-white/55 hover:text-white transition-colors"
//                 >
//                   <span className="w-0 h-px bg-signal group-hover:w-4 transition-all duration-300" />
//                   <span>{link.label}</span>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <div className="mb-6 flex items-center gap-2">
//               <span className="w-5 h-px bg-signal" />

//               <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal font-semibold">
//                 Services
//               </span>
//             </div>

//             <div className="flex flex-col gap-3">
//               {footerLinks.services.map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="group flex items-center gap-2 w-fit text-sm text-white/55 hover:text-white transition-colors"
//                 >
//                   <span className="w-0 h-px bg-signal group-hover:w-4 transition-all duration-300" />
//                   <span>{link.label}</span>
//                 </Link>
//               ))}
//             </div>

//             {/* SOCIALS */}
//             <div className="mt-8">

//               <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30 mb-4">
//                 Follow DesFlyer
//               </p>

//               <div className="flex gap-2.5 flex-wrap">
//                 {siteConfig.socials.map((social) => {
//                   const Icon = socialIcons[social.name]

//                   if (!Icon || !social.href) return null

//                   return (
//                     <a
//                       key={social.name}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`Visit DesFlyer on ${social.name}`}
//                       className="group w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-signal hover:border-signal hover:-translate-y-1 transition-all duration-300"
//                     >
//                       <Icon
//                         size={14}
//                         className="group-hover:scale-110 transition-transform duration-300"
//                       />
//                     </a>
//                   )
//                 })}
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* DIVIDER */}
//         <div className="node-divider my-10" />

//         {/* BOTTOM */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">

//           <p className="text-xs text-white/40">
//             © {new Date().getFullYear()} DesFlyer. All rights reserved.
//           </p>

//           <Link
//             to="/"
//             className="inline-flex items-center gap-1 text-xs text-white/40 hover:text-signal transition-colors"
//           >
//             Designed by DesFlyer
//             <FiArrowUpRight size={12} />
//           </Link>

//         </div>

//       </div>
//     </footer>
//   )
// }






import { Link } from 'react-router-dom'
import {
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiArrowUpRight,
} from 'react-icons/fi'
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
    <footer className="relative px-6 lg:px-10 pt-20 pb-8 overflow-hidden">
      <div className="max-w-shell mx-auto">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/images/portfolio/desflyer nlogo.png"
                alt="DesFlyer"
                className="w-40 h-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-[var(--fg)]/50">
              Building thoughtful digital experiences, interfaces and products
              that move brands forward.
            </p>

            <div className="mt-7 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal" />

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--fg)]/35">
                Available for projects
              </span>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-px bg-signal" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal font-semibold">
                  Contact
                </span>
              </div>
            </div>

            <div className="space-y-6">

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg)]/25 mb-2">
                  Email
                </p>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-[var(--fg)]/70 hover:text-signal transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg)]/25 mb-2">
                  Phone
                </p>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="text-sm text-[var(--fg)]/70 hover:text-signal transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--fg)]/25 mb-2">
                  Location
                </p>

                <p className="text-sm text-[var(--fg)]/60 leading-relaxed">
                  {siteConfig.location}
                </p>
              </div>

            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-px bg-signal" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal font-semibold">
                  Explore
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2 w-fit text-sm text-[var(--fg)]/55 hover:text-[var(--fg)] transition-colors"
                >
                  <span className="w-0 h-px bg-signal group-hover:w-4 transition-all duration-300" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-px bg-signal" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal font-semibold">
                  Services
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2 w-fit text-sm text-[var(--fg)]/55 hover:text-[var(--fg)] transition-colors"
                >
                  <span className="w-0 h-px bg-signal group-hover:w-4 transition-all duration-300" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="mt-8">

              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--fg)]/30 mb-4">
                Follow DesFlyer
              </p>

              <div className="flex gap-2.5 flex-wrap">
                {siteConfig.socials.map((social) => {
                  const Icon = socialIcons[social.name]

                  if (!Icon) return null

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit DesFlyer on ${social.name}`}
                      className="group w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg)]/50 hover:text-signal hover:border-signal hover:-translate-y-1 transition-all duration-300"
                    >
                      <Icon
                        size={14}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  )
                })}
              </div>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="node-divider my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">

          <p className="text-xs text-[var(--fg)]/40">
            © {new Date().getFullYear()} DesFlyer. All rights reserved.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-1 text-xs text-[var(--fg)]/40 hover:text-signal transition-colors"
          >
            Designed by DesFlyer
            <FiArrowUpRight size={12} />
          </Link>

        </div>

      </div>
    </footer>
  )
}
