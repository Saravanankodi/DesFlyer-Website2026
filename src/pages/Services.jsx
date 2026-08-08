// // import { useRef } from 'react'
// // import {
// //   motion,
// //   useScroll,
// //   useTransform
// // } from 'framer-motion'

// // import Seo from '../lib/Seo'
// // import Eyebrow from '../components/ui/Eyebrow'
// // import CTABand from '../components/sections/CTABand'
// // import ServiceFlipCard from '../components/ServiceFlipCard'
// // import { services } from '../data/services'


// // export default function Services() {


// // const pageRef = useRef(null)


// // const {
// // scrollYProgress
// // }=useScroll({

// // target:pageRef,

// // offset:[
// // "start start",
// // "end start"
// // ]

// // })


// // const backgroundY =
// // useTransform(
// // scrollYProgress,
// // [0,1],
// // [0,200]
// // )



// // return (

// // <>


// // <section

// // ref={pageRef}

// // className="
// // relative
// // pt-32
// // pb-20
// // px-6
// // lg:px-10
// // overflow-hidden
// // "


// // >


// // {/* ambient 3D lights */}

// // <motion.div

// // style={{
// // y:backgroundY
// // }}

// // className="
// // absolute
// // top-0
// // left-1/2
// // -translate-x-1/2
// // w-[650px]
// // h-[650px]
// // rounded-full
// // bg-signal/20
// // blur-[160px]
// // "

// // />



// // <motion.div

// // animate={{
// // rotate:360
// // }}

// // transition={{
// // duration:50,
// // repeat:Infinity,
// // ease:"linear"
// // }}

// // className="
// // absolute
// // right-20
// // top-20
// // w-80
// // h-80
// // rounded-full
// // border
// // border-signal/20
// // hidden
// // lg:block
// // "


// // >



// // <div
// // className="
// // absolute
// // inset-10
// // rounded-full
// // border
// // border-purple-500/20
// // animate-pulse
// // "
// // />


// // </motion.div>




// // {/* floating particles */}


// // <div className="
// // absolute
// // top-40
// // left-20
// // w-2
// // h-2
// // rounded-full
// // bg-signal
// // animate-ping
// // "/>


// // <div className="
// // absolute
// // bottom-20
// // right-40
// // w-3
// // h-3
// // rounded-full
// // bg-signal/60
// // animate-pulse
// // "/>




// // <div className="
// // relative
// // max-w-shell
// // mx-auto
// // z-10
// // ">


// // <motion.div

// // initial={{
// // opacity:0,
// // y:30
// // }}

// // animate={{
// // opacity:1,
// // y:0
// // }}

// // transition={{
// // duration:.7
// // }}

// // >

// // <Eyebrow>
// // What We Do
// // </Eyebrow>


// // </motion.div>





// // <motion.h1

// // initial={{
// // opacity:0,
// // y:40
// // }}

// // animate={{
// // opacity:1,
// // y:0
// // }}

// // transition={{
// // duration:.9,
// // delay:.1
// // }}

// // className="
// // mt-5
// // font-display
// // font-bold
// // text-[clamp(2.2rem,5vw,3.75rem)]
// // text-[var(--fg)]
// // max-w-4xl
// // "

// // >

// // Services built to move your business forward


// // </motion.h1>





// // <motion.p

// // initial={{
// // opacity:0,
// // y:20
// // }}

// // animate={{
// // opacity:1,
// // y:0
// // }}

// // transition={{
// // duration:.7,
// // delay:.2
// // }}

// // className="
// // mt-6
// // max-w-2xl
// // text-lg
// // leading-relaxed
// // text-[var(--fg)]/65
// // "

// // >

// // From custom software to brand identity —
// // engineering and design under one roof.

// // </motion.p>




// // <motion.div

// // initial={{
// // opacity:0
// // }}

// // animate={{
// // opacity:1
// // }}

// // transition={{
// // delay:.5
// // }}

// // className="
// // mt-8
// // flex
// // items-center
// // gap-3
// // text-sm
// // text-[var(--fg)]/50
// // "

// // >


// // <span
// // className="
// // w-2
// // h-2
// // rounded-full
// // bg-signal
// // animate-pulse
// // "
// // />


// // Hover any card to activate


// // </motion.div>



// // </div>


// // </section>






// // <section

// // className="
// // relative
// // pb-28
// // px-6
// // lg:px-10
// // "

// // >


// // <div

// // className="
// // absolute
// // inset-0
// // bg-gradient-to-b
// // from-transparent
// // via-signal/5
// // to-transparent
// // pointer-events-none
// // "

// // />



// // <motion.div

// // initial={{
// // opacity:0,
// // rotateX:-15
// // }}

// // whileInView={{
// // opacity:1,
// // rotateX:0
// // }}

// // viewport={{
// // once:true,
// // margin:"-100px"
// // }}

// // transition={{
// // duration:.9
// // }}

// // style={{
// // perspective:1200
// // }}

// // className="
// // max-w-shell
// // mx-auto
// // grid
// // sm:grid-cols-2
// // lg:grid-cols-3
// // gap-6
// // relative
// // "


// // >


// // {
// // services.map((s,i)=>(


// // <motion.div

// // key={s.slug}


// // whileHover={{
// // y:-12,
// // rotateZ:.5
// // }}

// // transition={{
// // type:"spring",
// // stiffness:200
// // }}

// // className="
// // relative
// // "

// // >


// // {/* card glow */}

// // <div
// // className="
// // absolute
// // -inset-2
// // rounded-3xl
// // bg-signal/20
// // blur-xl
// // opacity-0
// // hover:opacity-100
// // transition
// // duration-500
// // "
// // />



// // <ServiceFlipCard

// // service={s}

// // index={i}


// // />



// // </motion.div>


// // ))
// // }



// // </motion.div>


// // </section>






// // <CTABand/>


// // </>

// // )

// // }




// import { useRef } from 'react'
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring
// } from 'framer-motion'
// import Seo from '../lib/Seo'
// import Eyebrow from '../components/ui/Eyebrow'
// import CTABand from '../components/sections/CTABand'
// import ServiceFlipCard from '../components/ServiceFlipCard'
// import { services } from '../data/services'

// const NODES = [
//   { x: '20%', y: '30%', size: 2.5, delay: 0 },
//   { x: '80%', y: '20%', size: 3, delay: 0.6 },
//   { x: '65%', y: '55%', size: 2, delay: 1.2 },
// ]

// const LINKS = [
//   [0, 1],
//   [1, 2],
// ]

// /* ---------------------------------------------------------------- */
// /* Sticky Stack Card */
// /* ---------------------------------------------------------------- */

// function ServiceStackCard({

// }) {

//   const start = index / total
//   const end = (index + 1) / total

//   const y = useTransform(
//     progress,
//     [start, end],
//     ['18vh', '0vh']
//   )
//   const scale = useTransform(
//     progress,
//     [start, end, 1],
//     [
//       0.9,
//       1,
//       1 - (total - 1 - index) * 0.02,
//     ]
//   )

//   const opacity = useTransform(
//     progress,
//     [start, start + 0.05],
//     [0, 1]
//   )

//   const rotate = useTransform(
//     progress,
//     [start, end],
//     [
//       index % 2 === 0 ? 1 : -1,
//       0,
//     ]
//   )

//   return (
//     <motion.div
//       style={{
//         y,
//         scale,
//         opacity,
//         rotate,
//         zIndex: index,
//         top: `${8 + index * 4}vh`,
//       }}
//       className="
//       absolute
//       inset-x-0
//       mx-auto
//       w-full
//       max-w-6xl
//       px-4
//       "
//     >
//       <div
//         className="
//         glass
//         rounded-[32px]
//         border
//         border-white/10
//         p-6
//         md:p-8
//         shadow-[0_30px_80px_-30px_rgba(0,0,0,.45)]
//         backdrop-blur-2xl
//         overflow-hidden
//         relative
//         "
//       >
//         {/* Background Glow */}
//         <div
//           className="
//           absolute
//           -right-24
//           -top-24
//           h-56
//           w-56
//           rounded-full
//           bg-signal/15
//           blur-[90px]
//           pointer-events-none
//           "
//         />

//         {/* Step Number */}
//         <div className="flex items-center justify-between">

//           <span
//             className="
//             font-display
//             text-6xl
//             font-bold
//             text-signal/15
//             "
//           >
//             {(index + 1)
//               .toString()
//               .padStart(2, '0')}
//           </span>

//           <div
//             className="
//             flex
//             gap-2
//             "
//           >
//             {Array.from({
//               length: total,
//             }).map((_, i) => (
//               <span
//                 key={i}
//                 className={`
//                   h-1.5
//                   rounded-full
//                   transition-all
//                   ${i === index
//                     ? 'w-8 bg-signal'
//                     : 'w-2 bg-white/20'
//                   }
//                 `}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Existing Flip Card */}
//         <div className="mt-6">
//           <ServiceFlipCard
//             service={service}
//             index={index}
//           />
//         </div>

//       </div>
//     </motion.div>
//   )
// }
// export default function Services() {

//   const pageRef = useRef(null)

//   const total = services.length

//   const { scrollYProgress } = useScroll({
//     target: pageRef,
//     offset: ["start start", "end end"],
//   })

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 80,
//     damping: 22,
//     mass: 0.3,
//   })

//   const backgroundY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, 80]
//   )

//   return (
//     <>
//       <Seo
//         title="Services | DesFlyer"
//         description="Creative digital services for startups and businesses."
//       />

//       {/* HERO */}
//       <section
//         className="
//   relative
//   overflow-hidden
//   pt-[10%]
//   pb-6
//   lg:pt-25
//   lg:pb-8
//   px-6
//   lg:px-10
//   "
//       >
//         <motion.div
//           style={{ y: backgroundY }}
//           className="
//           absolute
//           top-[-20%]
//           right-[-10%]
//           w-[500px]
//           h-[380px]
//           bg-signal/10
//           blur-[120px]
//           pointer-events-none
//           "
//         />

//         <div
//           className="
//           relative
//           max-w-shell
//           mx-auto
//           z-10
//           "
//         >
//           <Eyebrow>
//             What We Do
//           </Eyebrow>

//           <motion.h1
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: .6 }}
//             className="
//             mt-4
//             font-display
//             font-bold
//             text-[clamp(2rem,4vw,3.4rem)]
//             text-[var(--fg)]
//             max-w-3xl
//             "
//           >
//             Services built to move your business forward
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: .15,
//               duration: .5,
//             }}
//             className="
//             mt-5
//             max-w-xl
//             text-[var(--fg)]/65
//             leading-relaxed
//             "
//           >
//             From custom software to brand identity,
//             engineering and design under one roof.
//           </motion.p>
//         {/* DESFLYER COMMAND CENTER */}

// <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: .35 }}
//   className="
//   mt-14
//   max-w-[100%]
//   rounded-[30px]
//   border
//   border-cyan-400/20
//   bg-white/5
//   backdrop-blur-2xl
//   p-8
//   shadow-[0_0_60px_rgba(0,229,255,.12)]
// "
// >

//   <div className="flex items-center justify-between ">

//     <div>

//       <h3 className="font-display text-2xl font-bold">
//         DESFLYER COMMAND CENTER
//       </h3>

//       <p className="text-white/50 mt-1">
//         Engineering intelligent digital experiences.
//       </p>

//     </div>

//     <motion.div

//       animate={{
//         opacity:[1,.4,1]
//       }}

//       transition={{
//         duration:2,
//         repeat:Infinity
//       }}

//       className="
//       px-4
//       py-2
//       rounded-full
//       bg-emerald-500/15
//       border
//       border-emerald-400/30
//       text-emerald-400
//       text-xs
//       tracking-widest
//       "
//     >

//       ● SYSTEM ONLINE

//     </motion.div>

//   </div>

//   {/* SERVICES */}

//   <div className="grid md:grid-cols-2 gap-6 mt-10">

//     {[
//       {
//         title:"IDEATION",
//         desc:"Transforming bold concepts into digital strategies."
//       },
//       {
//         title:"DESIGN",
//         desc:"Creating memorable and intuitive user experiences."
//       },
//       {
//         title:"DEVELOPMENT",
//         desc:"Building scalable applications with modern technologies."
//       },
//       {
//         title:"DEPLOYMENT",
//         desc:"Delivering secure, optimized and production-ready solutions."
//       }

//     ].map((item,i)=>(

//       <motion.div

//         key={item.title}

//         initial={{
//           opacity:0,
//           y:20
//         }}

//         animate={{
//           opacity:1,
//           y:0
//         }}

//         transition={{
//           delay:.5+i*.12
//         }}

//         whileHover={{
//           y:-8,
//           scale:1.02
//         }}

//         className="
//         rounded-2xl
//         border
//         border-cyan-400/20
//         bg-black/20
//         p-6
//         relative
//         overflow-hidden
//         "

//       >

//         <motion.div

//           animate={{
//             x:["-100%","220%"]
//           }}

//           transition={{
//             duration:4,
//             repeat:Infinity,
//             delay:i
//           }}

//           className="
//           absolute
//           inset-y-0
//           w-24
//           bg-gradient-to-r
//           from-transparent
//           via-cyan-400/20
//           to-transparent
//           -skew-x-12
//           "
//         />

//         <div className="flex items-center gap-3">

//           <div
//             className="
//             w-3
//             h-3
//             rounded-full
//             bg-cyan-400
//             shadow-[0_0_12px_#22d3ee]
//             "
//           />

//           <h4 className="font-semibold tracking-widest text-cyan-400">

//             {item.title}

//           </h4>

//         </div>

//         <p className="mt-4 text-white/65 leading-7">

//           {item.desc}

//         </p>

//       </motion.div>

//     ))}

//   </div>

//   {/* SERVICE TAGS */}

//   {/* <div className="flex flex-wrap gap-4 mt-10">

//     {[
//       "AI",
//       "Web Apps",
//       "Mobile",
//       "Cloud",
//       "Branding",
//       "UI / UX",
//       "Automation",
//       "E-Commerce"
//     ].map((tag)=>(
//       <motion.div

//         key={tag}

//         whileHover={{
//           scale:1.08,
//           y:-5
//         }}

//         className="
//         px-5
//         py-2
//         rounded-full
//         border
//         border-cyan-400/20
//         bg-cyan-400/5
//         text-sm
//         text-cyan-300
//         cursor-default
//         "

//       >

//         {tag}

//       </motion.div>
//     ))}

//   </div> */}

// </motion.div>
//         </div>
//       </section>

//       {/* STACK SCROLL SECTION */}
//       {/* STACK SCROLL SECTION */}
//       <section
//         ref={pageRef}
//         className="relative"
//       >
//         {services.map((service, index) => (
//           <section
//             key={service.slug}
//             className="sticky top-0 h-screen flex items-center justify-center px-6 lg:px-10"
//             style={{
//               zIndex: index + 1,
//             }}
//           >
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 80,
//                 scale: 0.94,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               }}
//               viewport={{
//                 once: false,
//                 amount: 0.6,
//               }}
//               transition={{
//                 duration: 0.7,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="w-full max-w-6xl"
//             >
//               {/* Header */}
//               {/* <div className="mb-8 flex items-center justify-between">
//           <span className="text-6xl font-bold text-signal/15">
//             {(index + 1).toString().padStart(2, "0")}
//           </span>

//           <div className="flex gap-2">
//             {services.map((_, i) => (
//               <span
//                 key={i}
//                 className={`h-1.5 rounded-full transition-all ${
//                   i === index
//                     ? "w-8 bg-signal"
//                     : "w-2 bg-white/20"
//                 }`}
//               />
//             ))}
//           </div>
//         </div> */}

//               <ServiceFlipCard
//                 service={service}
//                 index={index}
//               />
//             </motion.div>
//           </section>
//         ))}
//       </section>
//     </>
//   )
// }






import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import CTABand from '../components/sections/CTABand'
import ServiceFlipCard from '../components/ServiceFlipCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Custom software, web, and mobile app development, enterprise solutions, UI/UX design, and more from DesFlyer."
        path="/services"
      />
      <section className="pt-40 pb-20 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>What We Do</Eyebrow>
          <h1 className="font-display font-bold text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--fg)] max-w-2xl">
            Services built to move your business forward
          </h1>
          <p className="mt-6 text-lg text-[var(--fg)]/65 max-w-2xl leading-relaxed">
            From custom software to brand identity — engineering and design under one roof.
            <span className="block mt-1 text-sm text-[var(--fg)]/40">Hover any card (or tap on mobile) to see details.</span>
          </p>
        </div>
      </section>

      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceFlipCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}