import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../ui/Button'

export default function CTABand() {
  return (
    <section className="px-6 lg:px-10 py-28 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-shell mx-auto relative rounded-3xl overflow-hidden bg-deep px-8 py-16 lg:px-20 lg:py-24 text-center"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(46,111,255,0.5), transparent 60%)',
          }}
        />
        <div className="relative z-10">
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] text-white max-w-2xl mx-auto">
            Let&rsquo;s build your next software project together
          </h2>
          <p className="mt-5 text-white/70 max-w-lg mx-auto">
            Tell us what you&rsquo;re building. We&rsquo;ll get back to you with next steps.
          </p>
          <div className="mt-9">
            <Button to="/contact" className="px-8 py-3.5">
              Get Started <FiArrowUpRight />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
