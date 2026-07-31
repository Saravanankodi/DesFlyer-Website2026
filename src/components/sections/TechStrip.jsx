import { techStack } from '../../data/techStack'

export default function TechStrip() {
  const row = [...techStack, ...techStack] // duplicate for seamless marquee

  return (
    <section className="py-14 border-y border-[var(--border)] overflow-hidden">
      <div className="flex items-center gap-4 mb-2 max-w-shell mx-auto px-6 lg:px-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--fg)]/40">
          Technologies we work with
        </span>
      </div>
      <div className="relative">
        <div className="flex gap-12 marquee-track whitespace-nowrap">
          {row.map((t, i) => (
            <span key={i} className="font-display text-2xl md:text-3xl text-[var(--fg)]/25 shrink-0">
              {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-track {
          animation: marquee 22s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  )
}
