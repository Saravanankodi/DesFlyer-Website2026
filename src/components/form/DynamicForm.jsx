import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiLoader } from 'react-icons/fi'
import Field from './Field'
import Button from '../ui/Button'
import { validateField, validateSections } from '../../lib/formValidation'

export default function DynamicForm({ sections, onSubmit, submitLabel = 'Submit Application' }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | done | failed

  function handleChange(name, value) {
    setValues((v) => ({ ...v, [name]: value }))
  }

  function handleBlur(name) {
    setTouched((t) => ({ ...t, [name]: true }))
    const field = sections.flatMap((s) => s.fields).find((f) => f.name === name)
    const err = validateField(field, values[name])
    setErrors((e) => ({ ...e, [name]: err }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const allErrors = validateSections(sections, values)
    setErrors(allErrors)
    setTouched(
      Object.fromEntries(sections.flatMap((s) => s.fields).map((f) => [f.name, true])),
    )

    if (Object.values(allErrors).some(Boolean)) {
      const firstErrorField = sections.flatMap((s) => s.fields).find((f) => allErrors[f.name])
      if (firstErrorField) {
        document.getElementById(`field-${firstErrorField.name}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setStatus('submitting')
    try {
      await onSubmit(values)
      setStatus('done')
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'done') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 border border-[var(--border)] rounded-2xl"
      >
        <FiCheckCircle className="text-signal mx-auto" size={44} />
        <h3 className="font-display font-semibold text-2xl mt-5 text-[var(--fg)]">Application received</h3>
        <p className="mt-2 text-[var(--fg)]/60 max-w-sm mx-auto">
          Thanks for applying — we&rsquo;ll review your details and be in touch soon.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-14">
      {sections.map((section, si) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: si * 0.05 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-signal border border-signal/30 rounded-full w-7 h-7 flex items-center justify-center shrink-0">
              {si + 1}
            </span>
            <h3 className="font-display font-semibold text-lg text-[var(--fg)]">{section.title}</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
            {section.fields.map((field) => (
              <Field
                key={field.name}
                field={field}
                value={values[field.name]}
                error={errors[field.name]}
                touched={touched[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {status === 'failed' && (
        <p className="text-sm text-red-400">Something went wrong submitting your application. Please try again.</p>
      )}

      <Button type="submit" disabled={status === 'submitting'} className="self-start px-8">
        {status === 'submitting' ? (
          <>
            <FiLoader className="animate-spin" /> Submitting…
          </>
        ) : (
          submitLabel
        )}
      </Button>
    </form>
  )
}


// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   FiCheck,
//   FiArrowRight,
//   FiUpload,
//   FiUser,
//   FiMail,
//   FiPhone,
//   FiMapPin,
// } from 'react-icons/fi'

// export default function DynamicForm({
//   sections = [],
//   submitLabel = 'Submit',
//   onSubmit,
// }) {
//   const [step, setStep] = useState(0)
//   const [values, setValues] = useState({})
//   const [completed, setCompleted] = useState([])

//   function updateValue(name, value) {
//     setValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   function validateSection(index) {
//     const current = sections[index]
//     if (!current?.fields) return true

//     for (const field of current.fields) {
//       if (field.required && !values[field.name]) {
//         return false
//       }
//     }

//     return true
//   }

//   function nextStep() {
//     if (!validateSection(step)) return

//     setCompleted((prev) =>
//       prev.includes(step) ? prev : [...prev, step]
//     )

//     if (step < sections.length - 1) {
//       setStep(step + 1)
//     }
//   }

//   async function finish(e) {
//     e.preventDefault()

//     if (!validateSection(step)) return

//     if (onSubmit) {
//       await onSubmit(values)
//     }
//   }

//   const iconMap = {
//     name: <FiUser />,
//     email: <FiMail />,
//     phone: <FiPhone />,
//     location: <FiMapPin />,
//   }

//   return (
//     <form
//       onSubmit={finish}
//       className="relative max-w-5xl mx-auto"
//     >

//       {/* Background Glow */}

//       <motion.div
//         animate={{
//           scale: [1, 1.25, 1],
//           opacity: [.25, .55, .25],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//         }}
//         className="
//         absolute
//         -top-32
//         left-1/2
//         -translate-x-1/2
//         w-[700px]
//         h-[700px]
//         rounded-full
//         bg-cyan-500/10
//         blur-[140px]
//         pointer-events-none
//         "
//       />

//       {/* Progress */}

//       <div className="flex justify-center mb-16">

//         <div className="flex items-center">

//           {sections.map((section, index) => (

//             <div
//               key={section.title}
//               className="flex items-center"
//             >

//               <motion.div

//                 animate={{
//                   scale: step === index ? 1.12 : 1,
//                 }}

//                 className={`
//                 w-14
//                 h-14
//                 rounded-full
//                 flex
//                 items-center
//                 justify-center
//                 border
//                 transition-all
//                 duration-500

//                 ${
//                   completed.includes(index)
//                     ? 'bg-cyan-400 border-cyan-400 text-black'
//                     : step === index
//                     ? 'border-cyan-400 text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,.45)]'
//                     : 'border-white/20 text-white/30'
//                 }
//                 `}
//               >

//                 {completed.includes(index)
//                   ? <FiCheck />
//                   : index + 1}

//               </motion.div>

//               {index !== sections.length - 1 && (

//                 <motion.div

//                   animate={{
//                     backgroundColor:
//                       completed.includes(index)
//                         ? '#22d3ee'
//                         : '#2f2f2f'
//                   }}

//                   className="w-24 h-[2px]"
//                 />

//               )}

//             </div>

//           ))}

//         </div>

//       </div>

//       <AnimatePresence mode="wait">
//               {sections.map((section, sectionIndex) => {

//         if (sectionIndex > step) return null

//         return (

//           <motion.div
//             key={section.title}
//             initial={{
//               opacity: 0,
//               y: 60,
//               scale: .95,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               scale: 1,
//             }}
//             exit={{
//               opacity: 0,
//               y: -40,
//             }}
//             transition={{
//               duration: .6,
//             }}
//             className="mb-12"
//           >

//             <motion.div

//               whileHover={{
//                 rotateX: 3,
//                 rotateY: -3,
//                 y: -5,
//               }}

//               transition={{
//                 type: "spring",
//                 stiffness: 120,
//               }}

//               className="
//               relative
//               overflow-hidden
//               rounded-[30px]
//               border
//               border-cyan-400/20
//               bg-white/5
//               backdrop-blur-3xl
//               p-10
//               shadow-[0_0_50px_rgba(0,255,255,.08)]
//               "
//             >

//               {/* rotating glow */}

//               <motion.div

//                 animate={{
//                   rotate: 360,
//                 }}

//                 transition={{
//                   duration: 30,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}

//                 className="
//                 absolute
//                 -right-24
//                 -top-24
//                 w-72
//                 h-72
//                 rounded-full
//                 border
//                 border-cyan-400/20
//                 "
//               />

//               <motion.div

//                 animate={{
//                   opacity: [.25,.6,.25],
//                   scale: [1,1.2,1],
//                 }}

//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                 }}

//                 className="
//                 absolute
//                 -left-20
//                 bottom-0
//                 w-60
//                 h-60
//                 rounded-full
//                 bg-cyan-400/10
//                 blur-[90px]
//                 "
//               />

//               <div className="relative z-10">

//                 <div className="flex items-center gap-4 mb-8">

//                   <div
//                     className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-cyan-400/10
//                     border
//                     border-cyan-400/30
//                     flex
//                     items-center
//                     justify-center
//                     text-cyan-400
//                     text-xl
//                     "
//                   >
//                     {sectionIndex + 1}
//                   </div>

//                   <div>

//                     <p className="text-cyan-300 text-xs uppercase tracking-[.25em]">
//                       Step {sectionIndex + 1}
//                     </p>

//                     <h2 className="text-3xl font-bold mt-1">
//                       {section.title}
//                     </h2>

//                   </div>

//                 </div>

//                 <div className="grid md:grid-cols-2 gap-8">
//                   {section.fields?.map((field, index) => (

//   <motion.div
//     key={field.name}
//     initial={{
//       opacity: 0,
//       y: 30,
//     }}
//     animate={{
//       opacity: 1,
//       y: 0,
//     }}
//     transition={{
//       delay: index * 0.08,
//     }}
//     className={field.type === "textarea" ? "md:col-span-2" : ""}
//   >

//     <label
//       className="
//       mb-3
//       block
//       text-xs
//       uppercase
//       tracking-[.22em]
//       text-cyan-300
//       "
//     >
//       {field.label}
//     </label>

//     {field.type === "textarea" ? (

//       <motion.textarea

//         whileFocus={{
//           scale: 1.01,
//         }}

//         rows={6}

//         value={values[field.name] || ""}

//         onChange={(e)=>
//           updateValue(field.name,e.target.value)
//         }

//         placeholder={field.placeholder}

//         className="
//         w-full
//         rounded-2xl
//         border
//         border-cyan-400/20
//         bg-black/20
//         px-6
//         py-5
//         outline-none
//         resize-none
//         transition-all
//         duration-300
//         focus:border-cyan-400
//         focus:shadow-[0_0_30px_rgba(34,211,238,.35)]
//         "
//       />

//     ) : field.type === "select" ? (

//       <select

//         value={values[field.name] || ""}

//         onChange={(e)=>
//           updateValue(field.name,e.target.value)
//         }

//         className="
//         w-full
//         rounded-2xl
//         border
//         border-cyan-400/20
//         bg-black/20
//         px-6
//         py-5
//         outline-none
//         transition-all
//         duration-300
//         focus:border-cyan-400
//         "
//       >

//         <option value="">
//           Select...
//         </option>

//         {field.options?.map(option=>(

//           <option
//             key={option}
//             value={option}
//           >
//             {option}
//           </option>

//         ))}

//       </select>

//     ) : (
//             <div className="relative">

//         <span
//           className="
//           absolute
//           left-5
//           top-1/2
//           -translate-y-1/2
//           text-cyan-400
//           text-lg
//           "
//         >
//           {iconMap[field.name] || <FiUser />}
//         </span>

//         <motion.input

//           whileFocus={{
//             scale: 1.02,
//           }}

//           type={field.type || "text"}

//           value={values[field.name] || ""}

//           onChange={(e) =>
//             updateValue(field.name, e.target.value)
//           }

//           placeholder={field.placeholder}

//           className="
//           w-full
//           rounded-2xl
//           border
//           border-cyan-400/20
//           bg-black/20
//           pl-14
//           pr-6
//           py-5
//           outline-none
//           transition-all
//           duration-300
//           focus:border-cyan-400
//           focus:shadow-[0_0_25px_rgba(34,211,238,.35)]
//           "
//         />

//       </div>

//     )}

//   </motion.div>

// ))}

// {/* File Upload */}

// {section.upload && (

//   <motion.label

//     whileHover={{
//       scale: 1.02,
//       y: -3,
//     }}

//     className="
//     mt-8
//     flex
//     flex-col
//     items-center
//     justify-center
//     gap-4
//     rounded-3xl
//     border-2
//     border-dashed
//     border-cyan-400/30
//     bg-cyan-400/5
//     p-10
//     cursor-pointer
//     transition-all
//     duration-300
//     hover:border-cyan-400
//     "

//   >

//     <FiUpload
//       size={36}
//       className="text-cyan-400"
//     />

//     <div className="text-center">

//       <h4 className="font-semibold">
//         Upload Resume
//       </h4>

//       <p className="text-sm text-white/50 mt-2">
//         PDF • DOC • DOCX
//       </p>

//     </div>

//     <input

//       type="file"

//       hidden

//       onChange={(e)=>
//         updateValue(
//           "resume",
//           e.target.files?.[0]
//         )
//       }

//     />

//   </motion.label>

// )}

// {/* Agreement Checkbox */}

// {section.checkbox && (

//   <motion.label

//     whileHover={{
//       x: 5,
//     }}

//     className="
//     mt-8
//     flex
//     items-center
//     gap-4
//     cursor-pointer
//     "

//   >

//     <button

//       type="button"

//       onClick={()=>
//         updateValue(
//           section.checkbox.name,
//           !values[section.checkbox.name]
//         )
//       }

//       className={`
//       w-8
//       h-8
//       rounded-xl
//       border
//       flex
//       items-center
//       justify-center
//       transition-all
//       duration-300

//       ${
//         values[section.checkbox.name]
//           ? "bg-cyan-400 border-cyan-400 text-black"
//           : "border-cyan-400/30 bg-white/5 text-transparent"
//       }
//       `}
//     >

//       <FiCheck />

//     </button>

//     <span className="text-white/70">

//       {section.checkbox.label}

//     </span>
// </motion.label>

// )}

// {/* Navigation Buttons */}
//       {/* Navigation Buttons */}

//       <div
//         className="
//         mt-12
//         flex
//         justify-between
//         items-center
//         "
//       >

//         {sectionIndex === step && step > 0 && (
//           <motion.button
//             whileHover={{ x: -5 }}
//             whileTap={{ scale: .95 }}
//             onClick={() => setStep(step - 1)}
//             type="button"
//             className="
//             px-8
//             py-4
//             rounded-2xl
//             border
//             border-white/20
//             bg-white/5
//             text-white/70
//             "
//           >
//             Back
//           </motion.button>
//         )}


//         {sectionIndex === step && step < sections.length - 1 && (
//           <motion.button
//             whileHover={{ scale:1.05, x:5 }}
//             whileTap={{ scale:.95 }}
//             onClick={nextStep}
//             type="button"
//             className="
//             ml-auto
//             flex
//             items-center
//             gap-3
//             px-10
//             py-5
//             rounded-2xl
//             bg-cyan-400
//             text-black
//             font-semibold
//             "
//           >
//             Continue
//             <FiArrowRight />
//           </motion.button>
//         )}


//         {sectionIndex === step && step === sections.length - 1 && (
//           <motion.button
//             whileHover={{ scale:1.05 }}
//             whileTap={{ scale:.95 }}
//             type="submit"
//             className="
//             ml-auto
//             flex
//             items-center
//             gap-3
//             px-12
//             py-5
//             rounded-2xl
//             bg-cyan-400
//             text-black
//             font-bold
//             "
//           >
//             {submitLabel}
//             <FiArrowRight />
//           </motion.button>
//         )}

//       </div>

//       </div> 
//     </motion.div>
// {/* end card */}

// </motion.div>
// {/* end section */}

//       )

//     })}

//   </AnimatePresence>

// </form>
// )
// }