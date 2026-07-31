export default function Eyebrow({ children }) {
  return (
    <div className="node-divider mb-5 max-w-xs">
      <span className="node-dot" />
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-signal whitespace-nowrap">
        {children}
      </span>
    </div>
  )
}
