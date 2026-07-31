import { useState } from 'react'
import Button from '../../components/ui/Button'
import { siteConfig } from '../../data/siteConfig'

export default function SettingsPage() {
  const [email, setEmail] = useState(siteConfig.email)
  const [phone, setPhone] = useState(siteConfig.phone)
  const [saved, setSaved] = useState(false)

  function handleSave(e) {
    e.preventDefault()
    // No backend yet — this only updates local component state as a UI demo.
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="p-6 lg:p-10 max-w-xl">
      <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)] mb-2">Settings</h1>
      <p className="text-sm text-[var(--fg)]/50 mb-8">
        These fields are for layout purposes only right now — connect a backend to persist real changes.
      </p>

      <form onSubmit={handleSave} className="flex flex-col gap-6 border border-[var(--border)] rounded-2xl p-8">
        <div>
          <label className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">Public contact email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none"
          />
        </div>
        <div>
          <label className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">Public contact phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none"
          />
        </div>
        <Button type="submit" className="self-start">
          Save Changes
        </Button>
        {saved && <p className="text-sm text-signal">Saved locally (not persisted — no backend connected).</p>}
      </form>
    </div>
  )
}
