// Derived from the `technologies` field of verified portfolio projects — not invented.
import { projects } from './projects'

const seen = new Set()
projects.forEach((p) => p.technologies.forEach((t) => seen.add(t)))

export const techStack = Array.from(seen)
