import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'

export default function ComingSoon({ title, description, eyebrow }) {
  return (
    <>
      <Seo title={title} description={description} />
      <section className="min-h-[70vh] flex items-center px-6 lg:px-10 pt-20">
        <div className="max-w-shell mx-auto text-center w-full">
          <div className="flex justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="font-display font-bold text-[clamp(2rem,5vw,3.25rem)] text-[var(--fg)]">{title}</h1>
          <p className="mt-5 text-[var(--fg)]/65 max-w-md mx-auto leading-relaxed">{description}</p>
          <div className="mt-9 flex justify-center">
            <Button to="/contact">Get in touch</Button>
          </div>
        </div>
      </section>
    </>
  )
}
