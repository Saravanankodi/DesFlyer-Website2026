import Seo from '../lib/Seo'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="This page doesn't exist." />
      <section className="min-h-[70vh] flex items-center justify-center px-6 text-center pt-20">
        <div>
          <p className="font-mono text-signal text-sm tracking-[0.2em]">404</p>
          <h1 className="font-display font-bold text-4xl mt-4 text-[var(--fg)]">Page not found</h1>
          <p className="mt-4 text-[var(--fg)]/60">The page you&rsquo;re looking for doesn&rsquo;t exist or moved.</p>
          <div className="mt-8 flex justify-center">
            <Button to="/">Back to Home</Button>
          </div>
        </div>
      </section>
    </>
  )
}
