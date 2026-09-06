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
//                     className="// group // relative // w-10 // h-10 // rounded-full // border // border-[var(--border)] // flex // items-center // justify-center // text-[var(--fg)]/60 // hover:text-signal // hover:border-signal // hover:-translate-y-1 // hover:shadow-[0_8px_25px_rgba(255,255,255,0.08)] // transition-all // duration-300 //"
//                   >
//                     <Icon
//                       size={15}
//                       className="transition-transform duration-300 group-hover:scale-110"
//                     />

//                     {/* Hover ring */}
//                     <span
//                       className="// absolute // inset-[-4px] // rounded-full // border // border-signal/0 // group-hover:border-signal/20 // group-hover:scale-110 // transition-all // duration-300 //"
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
//     <footer className="relative px-6 lg:px-10 pt-20 pb-8 overflow-hidden">
//       <div className="max-w-shell mx-auto">

//         {/* MAIN FOOTER */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

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
import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import {
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiStar,
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

function TiltCard({ children, className = '' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(y, [-100, 100], [5, -5]),
    {
      stiffness: 180,
      damping: 20,
    }
  )

  const rotateY = useSpring(
    useTransform(x, [-100, 100], [-5, 5]),
    {
      stiffness: 180,
      damping: 20,
    }
  )

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]">

      {/* =====================================================
          AMBIENT 3D BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 35, -20, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/[0.06] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -15, 0],
            scale: [1, 0.94, 1.06, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-signal/[0.035] blur-3xl"
        />

        {/* Perspective grid */}

        <div
          className="absolute bottom-0 left-1/2 h-[360px] w-[900px] -translate-x-1/2 opacity-[0.035] [background-image:linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)] [background-size:45px_45px] [mask-image:linear-gradient(to_top,black,transparent)] [transform:perspective(500px)_rotateX(55deg)]"
        />

        {/* Floating particles */}

        {[...Array(12)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -25 - index * 2, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 3 + index * 0.35,
              repeat: Infinity,
              delay: index * 0.25,
              ease: 'easeInOut',
            }}
            className="absolute h-1 w-1 rounded-full bg-signal"
            style={{
              left: `${8 + ((index * 17) % 85)}%`,
              top: `${18 + ((index * 23) % 68)}%`,
            }}
          />
        ))}

      </div>

      {/* =====================================================
          FOOTER INNER
      ====================================================== */}

      <div className="relative mx-auto max-w-shell px-6 py-12 lg:px-10">

        {/* =================================================
            TOP SYSTEM BAR
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-10 flex items-center gap-4"
        >

          <motion.span
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-px w-10 origin-left bg-signal"
          />

          <span
            className="font-mono text-[9px] font-semibold uppercase tracking-[0.25em] text-signal"
          >
            DesFlyer
          </span>

          <div
            className="relative h-px flex-1 overflow-hidden bg-[var(--border)]/60"
          >
            <motion.span
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-signal/50 to-transparent"
            />
          </div>

          <span
            className="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--fg)]/25 sm:block"
          >
            Digital Studio
          </span>

        </motion.div>

        {/* =================================================
            MAIN FOOTER
        ================================================== */}

        <div
          className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.9fr] lg:gap-7"
        >

          {/* =================================================
              BRAND 3D PANEL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <TiltCard
              className="group relative h-full overflow-hidden rounded-3xl border border-[var(--border)]/70 bg-[var(--fg)]/[0.018] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-colors duration-500 hover:border-signal/30"
            >

              {/* 3D glow */}

              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-signal/[0.07] blur-3xl transition-all duration-700 group-hover:bg-signal/[0.13]"
              />

              {/* Decorative rings */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-signal/10"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="pointer-events-none absolute -right-5 top-0 h-28 w-28 rounded-full border border-dashed border-signal/10"
              />

              <div className="relative z-10">

                {/* Logo */}

                <Link
                  to="/"
                  className="group/logo inline-block"
                >
                  <motion.img
                    whileHover={{
                      scale: 1.04,
                      rotateY: 8,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                      damping: 15,
                    }}
                    src="/images/portfolio/desflyer nlogo.png"
                    alt="DesFlyer"
                    className="w-36 object-contain drop-shadow-[0_12px_25px_rgba(0,0,0,0.15)]"
                  />
                </Link>

                {/* Description */}

                <p
                  className="mt-5 max-w-sm text-sm leading-7 text-[var(--fg)]/45"
                >
                  Building thoughtful digital experiences,
                  interfaces and products that move brands
                  forward.
                </p>

                {/* Availability */}

                <motion.div
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  className="mt-6 inline-flex items-center gap-3 rounded-full border border-signal/15 bg-signal/[0.025] px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                >

                  <span className="relative flex h-2 w-2">

                    <span
                      className="absolute inset-0 animate-ping rounded-full bg-signal opacity-50"
                    />

                    <span
                      className="relative h-2 w-2 rounded-full bg-signal shadow-[0_0_12px_var(--signal)]"
                    />

                  </span>

                  <span
                    className="font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--fg)]/40"
                  >
                    Available for projects
                  </span>

                </motion.div>

                {/* =================================================
                    FOLLOW US
                ================================================== */}

                <div className="mt-7">

                  <div className="mb-3 flex items-center gap-2">

                    <span className="h-px w-5 bg-signal" />

                    <span
                      className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-signal"
                    >
                      Follow Us
                    </span>

                  </div>

                  <div className="flex items-center gap-2">

                    {siteConfig.socials.map((social) => {

                      const Icon = socialIcons[social.name]

                      if (!Icon) return null

                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit DesFlyer on ${social.name}`}
                          whileHover={{
                            y: -5,
                            rotateX: 12,
                            rotateY: -12,
                            scale: 1.08,
                          }}
                          whileTap={{
                            scale: 0.94,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 15,
                          }}
                          className="group flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--fg)]/[0.015] text-[var(--fg)]/40 shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-colors duration-300 hover:border-signal/50 hover:bg-signal/[0.06] hover:text-signal"
                        >

                          <Icon
                            size={12}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />

                        </motion.a>
                      )
                    })}

                  </div>

                </div>

              </div>

              {/* Bottom index */}

              <div
                className="absolute bottom-5 right-6 font-mono text-[8px] tracking-[0.2em] text-[var(--fg)]/10"
              >
                01 / STUDIO
              </div>

            </TiltCard>

          </motion.div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
          >

            <TiltCard
              className="group relative h-full overflow-hidden rounded-3xl border border-[var(--border)]/60 bg-[var(--fg)]/[0.012] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-signal/25 hover:bg-signal/[0.018]"
            >

              <div
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-signal/[0.05] blur-2xl"
              />

              <div className="relative z-10">

                <div className="mb-7 flex items-center gap-2">

                  <span className="h-px w-5 bg-signal" />

                  <span
                    className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-signal"
                  >
                    Contact
                  </span>

                </div>

                <div className="space-y-5">

                  {/* Email */}

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group/item block"
                  >

                    <div className="mb-1.5 flex items-center gap-2">

                      <FiMail
                        size={12}
                        className="text-[var(--fg)]/25 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-signal"
                      />

                      <span
                        className="font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--fg)]/25"
                      >
                        Email
                      </span>

                    </div>

                    <span
                      className="block break-all text-xs leading-5 text-[var(--fg)]/60 transition-colors group-hover/item:text-signal"
                    >
                      {siteConfig.email}
                    </span>

                  </a>

                  {/* Phone */}

                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="group/item block"
                  >

                    <div className="mb-1.5 flex items-center gap-2">

                      <FiPhone
                        size={12}
                        className="text-[var(--fg)]/25 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-signal"
                      />

                      <span
                        className="font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--fg)]/25"
                      >
                        Phone
                      </span>

                    </div>

                    <span
                      className="text-xs text-[var(--fg)]/60 transition-colors group-hover/item:text-signal"
                    >
                      {siteConfig.phone}
                    </span>

                  </a>

                  {/* Location */}

                  <div>

                    <div className="mb-1.5 flex items-center gap-2">

                      <FiMapPin
                        size={12}
                        className="text-signal/60"
                      />

                      <span
                        className="font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--fg)]/25"
                      >
                        Location
                      </span>

                    </div>

                    <p
                      className="text-xs leading-5 text-[var(--fg)]/50"
                    >
                      {siteConfig.location}
                    </p>

                  </div>

                </div>

              </div>

              <span
                className="absolute bottom-5 right-5 font-mono text-[8px] text-[var(--fg)]/10"
              >
                02
              </span>

            </TiltCard>

          </motion.div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
          >

            <TiltCard
              className="group relative h-full overflow-hidden rounded-3xl border border-[var(--border)]/60 bg-[var(--fg)]/[0.012] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-signal/25"
            >

              <div className="relative z-10">

                <div className="mb-7 flex items-center gap-2">

                  <span className="h-px w-5 bg-signal" />

                  <span
                    className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-signal"
                  >
                    Explore
                  </span>

                </div>

                <div className="space-y-2">

                  {footerLinks.company.map((link, index) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="group/item relative flex items-center gap-3 overflow-hidden rounded-xl border border-transparent px-3 py-2 text-xs text-[var(--fg)]/50 transition-all duration-300 hover:border-signal/10 hover:bg-signal/[0.04] hover:text-[var(--fg)]"
                    >

                      <span
                        className="font-mono text-[8px] text-[var(--fg)]/15 transition-colors group-hover/item:text-signal"
                      >
                        0{index + 1}
                      </span>

                      <span>
                        {link.label}
                      </span>

                      <FiArrowUpRight
                        size={11}
                        className="ml-auto -translate-x-2 opacity-0 text-signal transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                      />

                    </Link>
                  ))}

                </div>

              </div>

              <span
                className="absolute bottom-5 right-5 font-mono text-[8px] text-[var(--fg)]/10"
              >
                03
              </span>

            </TiltCard>

          </motion.div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >

            <TiltCard
              className="group relative h-full overflow-hidden rounded-3xl border border-[var(--border)]/60 bg-[var(--fg)]/[0.012] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-signal/25"
            >

              <div className="relative z-10">

                <div className="mb-7 flex items-center gap-2">

                  <span className="h-px w-5 bg-signal" />

                  <span
                    className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-signal"
                  >
                    Services
                  </span>

                </div>

                <div className="space-y-2">

                  {footerLinks.services.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="group/item relative flex items-center gap-3 overflow-hidden rounded-xl border border-transparent px-3 py-2 text-xs text-[var(--fg)]/50 transition-all duration-300 hover:border-signal/10 hover:bg-signal/[0.04] hover:text-[var(--fg)]"
                    >

                      <motion.span
                        whileHover={{
                          scale: 1.5,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-[var(--fg)]/15 transition-colors group-hover/item:bg-signal group-hover/item:shadow-[0_0_10px_var(--signal)]"
                      />

                      <span>
                        {link.label}
                      </span>

                      <FiArrowUpRight
                        size={11}
                        className="ml-auto -translate-x-2 opacity-0 text-signal transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                      />

                    </Link>
                  ))}

                </div>

              </div>

              <span
                className="absolute bottom-5 right-5 font-mono text-[8px] text-[var(--fg)]/10"
              >
                04
              </span>

            </TiltCard>

          </motion.div>

        </div>

        {/* =================================================
            CTA / 3D SIGNAL BAR
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className="relative mt-6 overflow-hidden rounded-2xl border border-signal/15 bg-signal/[0.025] px-5 py-4"
        >

          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-signal/[0.12] to-transparent"
          />

          <div
            className="relative flex items-center justify-between gap-4"
          >

            <div className="flex items-center gap-3">

              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-signal/15 bg-signal/[0.04] text-signal"
              >
                <FiStar size={13} />
              </motion.div>

              <div>

                <p
                  className="font-mono text-[8px] uppercase tracking-[0.16em] text-signal/70"
                >
                  Digital experiences
                </p>

                <p
                  className="mt-0.5 text-xs text-[var(--fg)]/45"
                >
                  Designed with intention.
                </p>

              </div>

            </div>

            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="hidden font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--fg)]/20 sm:block"
            >
              DES / 2026
            </motion.div>

          </div>

        </motion.div>

        {/* =================================================
            LOWER SECTION
        ================================================== */}

        <div
          className="mt-7 border-t border-[var(--border)]/60 pt-6"
        >

          <div
            className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
          >

            {/* COPYRIGHT */}

            <div
              className="flex flex-wrap items-center gap-3 text-[9px] text-[var(--fg)]/25"
            >

              <span>
                © {new Date().getFullYear()} DesFlyer.
                All rights reserved.
              </span>

              <span
                className="hidden h-3 w-px bg-[var(--border)] sm:block"
              />

              <Link
                to="/"
                className="inline-flex items-center gap-1 transition-colors hover:text-signal"
              >
                Designed by DesFlyer
                <FiArrowUpRight size={10} />
              </Link>

            </div>

            {/* Footer status */}

            <div
              className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--fg)]/20"
            >

              <span
                className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_var(--signal)]"
              />

              System online

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}
