// import { useState, useMemo } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiArrowRight } from 'react-icons/fi'
// import Seo from '../lib/Seo'
// import CTABand from '../components/sections/CTABand'
// import { products, productCategories } from '../data/products'


// function ProductCard({ product }) {

//   if (product.comingSoon) {

//   return (
//       <motion.div
//         layout
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -10 }}
//         transition={{ duration: 0.4 }}
//         className="border border-dashed border-[var(--border)] rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 text-[var(--fg)]/40 min-h-[320px]"
//       >
//         <FiClock size={22} />
//         <span className="font-mono text-xs uppercase tracking-[0.15em]">{product.name}</span>
//         <p className="text-xs text-[var(--fg)]/30 max-w-[16rem]">{product.description}</p>
//       </motion.div>
//     )

//   }



//   return (

//     <motion.div

//       layout

//       initial={{
//         opacity:0,
//         y:20
//       }}

//       animate={{
//         opacity:1,
//         y:0
//       }}

//       exit={{
//         opacity:0,
//         y:-10
//       }}

//       whileHover={{
//         y:-6,
//         scale:1.015
//       }}

//       transition={{
//         duration:0.4,
//         ease:[0.16,1,0.3,1]
//       }}

//       className="
//       group
//       relative
//       glass
//       rounded-2xl
//       overflow-hidden
//       flex
//       flex-col
//       transition-shadow
//       duration-500
//       hover:shadow-[0_24px_60px_-20px_rgba(46,111,255,0.35)]
//       "

//     >


//       {product.image && (

//         <div
//           className="
//           h-40
//           flex
//           items-center
//           justify-center
//           p-6
//           "
//         >

//           <img
//             src={product.image}
//             alt={`${product.name} logo`}
//             className="
//             max-w-full
//             max-h-full
//             object-contain
//             transition-transform
//             duration-500
//             group-hover:scale-105
//             "
//             loading="lazy"
//           />

//         </div>

//       )}



//       <div className="p-6 flex flex-col flex-1">


//         <span
//           className="
//           text-xs
//           font-mono
//           text-cyan-400
//           mb-3
//           "
//         >
//           {product.category}
//         </span>



//         <h3
//           className="
//           font-display
//           font-semibold
//           text-lg
//           text-[var(--fg)]
//           "
//         >
//           {product.name}
//         </h3>



//         <p
//           className="
//           mt-2
//           text-sm
//           text-[var(--fg)]/60
//           leading-relaxed
//           flex-1
//           "
//         >
//           {product.description}
//         </p>



//         <div className="flex flex-wrap gap-2 mt-4">

//           {product.technologies.map((t)=>(

//             <span

//               key={t}

//               className="
//               font-mono
//               text-[11px]
//               px-2.5
//               py-1
//               rounded-full
//               border
//               border-[var(--border)]
//               text-[var(--fg)]/55
//               "

//             >

//               {t}

//             </span>

//           ))}

//         </div>



//         <button

//           className="
//           mt-5
//           inline-flex
//           items-center
//           gap-1.5
//           text-sm
//           font-medium
//           text-signal
//           self-start
//           hover:gap-2.5
//           transition-all
//           duration-200
//           "

//         >

//           View Details

//           <FiArrowRight size={14}/>


//         </button>


//       </div>


//     </motion.div>

//   )

// }




// export default function Products() {


//   const [category,setCategory] = useState('All')



//   const filtered = useMemo(

//     () =>

//       category === 'All'

//       ? products

//       : products.filter(
//           (p)=>p.category === category
//         ),

//     [category]

//   )



//   return (

//     <>


//     <Seo />


//     <section className="pb-28 px-6 lg:px-10">


//       <div className="max-w-shell mx-auto">



//         <div className="mb-12">


//           <h1
//             className="
//             font-display
//             font-bold
//             text-4xl
//             text-[var(--fg)]
//             "
//           >
//             Our Products
//           </h1>


//           <p
//             className="
//             mt-3
//             text-[var(--fg)]/60
//             "
//           >
//             Software we’ve built and shipped
//           </p>


//         </div>




//         {/* Pixel Filter Buttons */}

//         <div className="flex flex-wrap gap-3 mb-10">


//           {productCategories.map((cat)=>(


//             <button

//               key={cat}

//               onClick={() =>
//                 setCategory(cat)
//               }


//               className={`
//               relative
//               overflow-hidden
//               px-5
//               py-2.5
//               rounded-xl
//               font-mono
//               text-sm
//               border
//               transition-all
//               duration-300

//               ${
//                 category === cat

//                 ?

//                 `
//                 text-white
//                 border-cyan-400
//                 bg-black/40
//                 shadow-[0_0_25px_rgba(0,255,255,.5)]
//                 `

//                 :

//                 `
//                 border-[var(--border)]
//                 text-[var(--fg)]/65
//                 hover:border-cyan-400/50
//                 `
//               }

//               `}

//             >


//             {category === cat && (

//               <>

//               <span
//                 className="
//                 absolute
//                 top-0
//                 left-0
//                 w-2
//                 h-2
//                 bg-cyan-400
//                 animate-pulse
//                 "
//               />


//               <span
//                 className="
//                 absolute
//                 bottom-0
//                 right-0
//                 w-2
//                 h-2
//                 bg-cyan-400
//                 animate-pulse
//                 "
//               />


//               <span
//                 className="
//                 absolute
//                 inset-0
//                 bg-gradient-to-r
//                 from-cyan-400/20
//                 via-blue-500/20
//                 to-transparent
//                 "
//               />

//               </>

//             )}


//               <span className="relative z-10">
//                 {cat}
//               </span>


//             </button>


//           ))}


//         </div>




//         <motion.div

//           layout

//           className="
//           grid
//           sm:grid-cols-2
//           lg:grid-cols-3
//           gap-6
//           "

//         >


//         <AnimatePresence mode="popLayout">


//           {filtered.map((p)=>(

//             <ProductCard

//               key={p.slug}

//               product={p}

//             />

//           ))}


//         </AnimatePresence>


//         </motion.div>



//       </div>


//     </section>



//     <CTABand />


//     </>

//   )

// }






// import { useState, useMemo } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiArrowRight, FiClock } from 'react-icons/fi'
// import Seo from '../lib/Seo'
// import Eyebrow from '../components/ui/Eyebrow'
// import CTABand from '../components/sections/CTABand'
// import { products, productCategories } from '../data/products'

// function ProductCard({ product }) {
//   if (product.comingSoon) {
//     return (
//       <motion.div
//         layout
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -10 }}
//         transition={{ duration: 0.4 }}
//         className="border border-dashed border-[var(--border)] rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 text-[var(--fg)]/40 min-h-[320px]"
//       >
//         <FiClock size={22} />
//         <span className="font-mono text-xs uppercase tracking-[0.15em]">{product.name}</span>
//         <p className="text-xs text-[var(--fg)]/30 max-w-[16rem]">{product.description}</p>
//       </motion.div>
//     )
//   }

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -10 }}
//       whileHover={{ y: -6, scale: 1.015 }}
//       transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//       className="group relative glass rounded-2xl overflow-hidden flex flex-col transition-shadow duration-500 hover:shadow-[0_24px_60px_-20px_rgba(46,111,255,0.35)]"
//     >
//       <div className="h-44 bg-white flex items-center justify-center p-8 relative overflow-hidden">
//         {product.image && (
//           <img
//             src={product.image}
//             alt={`${product.name} logo`}
//             className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
//             loading="lazy"
//           />
//         )}
//         <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--bg)]/80 text-[var(--fg)]/60 border border-[var(--border)]">
//           {product.category}
//         </span>
//       </div>

//       <div className="p-6 flex flex-col flex-1">
//         <h3 className="font-display font-semibold text-lg text-[var(--fg)]">{product.name}</h3>
//         <p className="mt-2 text-sm text-[var(--fg)]/60 leading-relaxed flex-1">{product.description}</p>
//         <div className="flex flex-wrap gap-2 mt-4">
//           {product.technologies.map((t) => (
//             <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--fg)]/55">
//               {t}
//             </span>
//           ))}
//         </div>
//         <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-signal self-start hover:gap-2.5 transition-all duration-200">
//           View Details <FiArrowRight size={14} />
//         </button>
//       </div>
//     </motion.div>
//   )
// }

// export default function Products() {
//   const [category, setCategory] = useState('All')

//   const filtered = useMemo(
//     () => (category === 'All' ? products : products.filter((p) => p.category === category)),
//     [category],
//   )

//   return (
//     <>
//       <Seo
//         title="Products"
//         description="Software products built by DesFlyer — from invoicing tools to event and booking platforms."
//         path="/products"
//       />
//       <section className="pt-40 pb-16 px-6 lg:px-10">
//         <div className="max-w-shell mx-auto">
//           <Eyebrow>Our Products</Eyebrow>
//           <h1 className="font-display font-bold text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--fg)] max-w-2xl">
//             Software we&rsquo;ve built and shipped
//           </h1>
//           <p className="mt-6 text-lg text-[var(--fg)]/65 max-w-2xl leading-relaxed">
//             A look at real products developed by DesFlyer, across different industries and use cases.
//           </p>
//         </div>
//       </section>

//       <section className="pb-28 px-6 lg:px-10">
//         <div className="max-w-shell mx-auto">
//           <div className="flex flex-wrap gap-2.5 mb-10">
//             {productCategories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setCategory(cat)}
//                 className={`px-4 py-2 rounded-full text-sm border transition-colors duration-200 ${
//                   category === cat
//                     ? 'bg-signal text-white border-signal'
//                     : 'border-[var(--border)] text-[var(--fg)]/65 hover:border-signal/50'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <AnimatePresence mode="popLayout">
//               {filtered.map((p) => (
//                 <ProductCard key={p.slug} product={p} />
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </section>

//       <CTABand />
//     </>
//   )
// }











import { useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import Seo from "../lib/Seo";
import Eyebrow from "../components/ui/Eyebrow";
import CTABand from "../components/sections/CTABand";

import {
  products,
  productCategories,
} from "../data/products";

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product }) {
  /* =======================================================
     COMING SOON CARD
  ======================================================= */

  if (product.comingSoon) {
    return (
      <motion.div
        layout
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -10,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          border
          border-dashed
          border-[var(--border)]
          rounded-2xl
          p-8
          flex
          flex-col
          items-center
          justify-center
          text-center
          gap-3
          min-h-[320px]
        "
        style={{
          color: "var(--fg)",
          opacity: 0.4,
        }}
      >
        <span className="font-display text-lg">
          {product.name}
        </span>

        <span className="text-sm">
          {product.description}
        </span>
      </motion.div>
    );
  }

  /* =======================================================
     NORMAL PRODUCT CARD
  ======================================================= */

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -10,
      }}
      whileHover={{
        y: -6,
        scale: 1.015,
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        glass
        rounded-2xl
        overflow-hidden
        flex
        flex-col
        transition-shadow
        duration-500
        hover:shadow-[0_24px_60px_-20px_rgba(46,111,255,0.35)]
      "
    >
      {/* ===================================================
          IMAGE
      =================================================== */}

      {product.image && (
        <div
          className="
            h-40
            flex
            items-center
            justify-center
            p-6
            overflow-hidden
          "
        >
          <img
            src={product.image}
            alt={`${product.name} logo`}
            loading="lazy"
            className="
              max-w-full
              max-h-full
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      )}

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div className="p-6 flex flex-col flex-1">
        {/* CATEGORY */}

        <span
          className="
            text-xs
            font-mono
            text-cyan-400
            mb-3
          "
        >
          {product.category}
        </span>

        {/* NAME */}

        <h3
          className="
            font-display
            font-semibold
            text-lg
            text-[var(--fg)]
          "
        >
          {product.name}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-2
            text-sm
            leading-relaxed
            flex-1
          "
          style={{
            color: "var(--fg)",
            opacity: 0.6,
          }}
        >
          {product.description}
        </p>

        {/* TECHNOLOGIES */}

        <div className="flex flex-wrap gap-2 mt-4">
          {product.technologies.map(
            (technology) => (
              <span
                key={technology}
                className="
                  font-mono
                  text-[11px]
                  px-2.5
                  py-1
                  rounded-full
                  border
                  border-[var(--border)]
                "
                style={{
                  color: "var(--fg)",
                  opacity: 0.55,
                }}
              >
                {technology}
              </span>
            )
          )}
        </div>

        {/* VIEW DETAILS */}

        <button
          type="button"
          className="
            mt-5
            inline-flex
            items-center
            gap-1.5
            text-sm
            font-medium
            text-signal
            self-start
            hover:gap-2.5
            transition-all
            duration-200
          "
        >
          View Details

          <FiArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PRODUCTS PAGE
========================================================= */

export default function Products() {
  const [category, setCategory] =
    useState("All");

  /* =======================================================
     FILTER PRODUCTS
  ======================================================= */

  const filtered = useMemo(() => {
    if (category === "All") {
      return products;
    }

    return products.filter(
      (product) =>
        product.category === category
    );
  }, [category]);

  return (
    <>
      <Seo />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="pt-40 pb-16 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>
            Our Products
          </Eyebrow>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-4
              font-display
              font-bold
              text-[clamp(2.5rem,6vw,4.5rem)]
              leading-[1.02]
              text-[var(--fg)]
              max-w-4xl
            "
          >
            Software we’ve built
            <br />
            and shipped
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            className="
              mt-6
              text-lg
              leading-relaxed
              max-w-2xl
            "
            style={{
              color: "var(--fg)",
              opacity: 0.65,
            }}
          >
            A look at real products developed
            by DesFlyer, across different
            industries and use cases.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">

          {/* =================================================
              PIXEL FILTER BUTTONS
          ================================================= */}

          <div className="flex flex-wrap gap-3 mb-10">
            {productCategories.map(
              (cat) => {
                const active =
                  category === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() =>
                      setCategory(cat)
                    }
                    className={`
                      relative
                      overflow-hidden
                      px-5
                      py-2.5
                      rounded-xl
                      font-mono
                      text-sm
                      border
                      transition-all
                      duration-300
                      ${
                        active
                          ? `
                            text-white
                            border-cyan-400
                            bg-black/40
                            shadow-[0_0_25px_rgba(0,255,255,0.5)]
                          `
                          : `
                            border-[var(--border)]
                            hover:border-cyan-400/50
                          `
                      }
                    `}
                    style={
                      !active
                        ? {
                            color:
                              "var(--fg)",
                            opacity: 0.65,
                          }
                        : undefined
                    }
                  >
                    {/* ACTIVE PIXEL CORNERS */}

                    {active && (
                      <>
                        <span
                          className="
                            absolute
                            top-0
                            left-0
                            w-2
                            h-2
                            bg-cyan-400
                            animate-pulse
                          "
                        />

                        <span
                          className="
                            absolute
                            bottom-0
                            right-0
                            w-2
                            h-2
                            bg-cyan-400
                            animate-pulse
                          "
                        />

                        <span
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-cyan-400/20
                            via-blue-500/20
                            to-transparent
                          "
                        />
                      </>
                    )}

                    <span className="relative z-10">
                      {cat}
                    </span>
                  </button>
                );
              }
            )}
          </div>

          {/* =================================================
              PRODUCT GRID
          ================================================= */}

          <motion.div
            layout
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {filtered.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="
                border
                border-dashed
                border-[var(--border)]
                rounded-2xl
                p-12
                text-center
              "
              style={{
                color: "var(--fg)",
                opacity: 0.5,
              }}
            >
              No products found in this
              category.
            </motion.div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <CTABand />
    </>
  );
}