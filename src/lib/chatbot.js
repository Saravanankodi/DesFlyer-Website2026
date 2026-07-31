// Rule-based response engine grounded strictly in verified DesFlyer data.
// This keeps the bot honest with zero fabrication risk while there's no LLM backend wired up.
// To upgrade to a real LLM: replace getBotReply's body with a call to your backend,
// e.g. `return (await fetch('/api/chat', {...})).json()`, keeping the same function signature.

import { siteConfig, aboutContent } from '../data/siteConfig'
import { services } from '../data/services'
import { projects } from '../data/projects'

const GREETING =
  "Hi! I'm the DesFlyer assistant. I can tell you about our services, portfolio, or how to get in touch. What would you like to know?"

const SUGGESTIONS = ['What services do you offer?', 'Show me your work', 'How do I contact you?', 'Are you hiring?']

function findServices(text) {
  return services.filter((s) => text.includes(s.title.toLowerCase().split(' ')[0]))
}

export function getBotReply(rawInput) {
  const text = rawInput.toLowerCase().trim()

  if (/\b(hi|hello|hey)\b/.test(text)) {
    return { text: GREETING, suggestions: SUGGESTIONS }
  }

  if (/(service|offer|what.*do.*you.*do|do you build)/.test(text)) {
    const list = services.slice(0, 6).map((s) => s.title).join(', ')
    return {
      text: `We offer ${list}, and more. Want details on a specific one, or should I list all ${services.length}?`,
      suggestions: ['List all services', 'Web Development details', 'Mobile App Development details'],
    }
  }

  if (/list all|all services/.test(text)) {
    return { text: services.map((s) => `\u2022 ${s.title}`).join('\n') }
  }

  const matched = findServices(text)
  if (matched.length > 0) {
    return { text: matched.map((s) => `**${s.title}**: ${s.body}`).join('\n\n') }
  }

  if (/(portfolio|project|work|built|example)/.test(text)) {
    const list = projects.map((p) => `\u2022 ${p.title} (${p.client}, ${p.date})`).join('\n')
    return {
      text: `Here's a look at some of our recent projects:\n${list}\n\nWant more detail on any of these, or should I take you to the full portfolio page?`,
      suggestions: ['Go to Portfolio page'],
    }
  }

  if (/(contact|email|phone|reach|talk to|call)/.test(text)) {
    return {
      text: `You can reach us at ${siteConfig.email} or ${siteConfig.phone}. We're based in ${siteConfig.location}. Or use the contact form and we'll get back to you within a business day.`,
      suggestions: ['Go to Contact page'],
    }
  }

  if (/(hire|job|career|internship|apply|work with you|work at)/.test(text)) {
    return {
      text: "We're always open to hearing from good people. Check our Careers page for open roles, or our Internship page for current openings.",
      suggestions: ['Go to Careers page', 'Go to Internship page'],
    }
  }

  if (/(about|who are you|company|founded|vision|mission)/.test(text)) {
    return {
      text: `${aboutContent.intro} Founded in ${siteConfig.founded}, based in ${siteConfig.location}.`,
      suggestions: ['Go to About page'],
    }
  }

  if (/(price|cost|quote|budget)/.test(text)) {
    return {
      text: "Pricing depends on project scope, so I can't quote a number here — the best next step is to reach out with your project details and we'll get back to you with an estimate.",
      suggestions: ['Go to Contact page'],
    }
  }

  return {
    text: "I don't have a solid answer for that yet — I'm a simple assistant for now. For anything specific, the team at " +
      `${siteConfig.email} can help directly.`,
    suggestions: SUGGESTIONS,
  }
}

export const chatGreeting = GREETING
export const chatSuggestions = SUGGESTIONS
