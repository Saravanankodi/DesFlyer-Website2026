import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend, FiCpu } from 'react-icons/fi'
import { getBotReply, chatGreeting, chatSuggestions } from '../lib/chatbot'

const PAGE_ROUTES = {
  'go to portfolio page': '/portfolio',
  'go to contact page': '/contact',
  'go to careers page': '/opportunities/jobs',
  'go to jobs page': '/opportunities/jobs',
  'go to internship page': '/opportunities/internship',
  'go to about page': '/about',
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: chatGreeting, suggestions: chatSuggestions }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, typing])

  function send(text) {
    const clean = text.trim()
    if (!clean) return

    const routeKey = clean.toLowerCase()
    if (PAGE_ROUTES[routeKey]) {
      navigate(PAGE_ROUTES[routeKey])
      setOpen(false)
      return
    }

    setMessages((m) => [...m, { role: 'user', text: clean }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const reply = getBotReply(clean)
      setMessages((m) => [...m, { role: 'bot', ...reply }])
      setTyping(false)
    }, 550)
  }

  function handleSubmit(e) {
    e.preventDefault()
    send(input)
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={open}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-signal text-white flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(46,111,255,0.6)]"
      >
        {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] max-w-sm h-[520px] max-h-[70vh] glass rounded-2xl flex flex-col overflow-hidden shadow-2xl"
            role="dialog"
            aria-label="DesFlyer chat assistant"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border)]">
              <span className="w-9 h-9 rounded-full bg-signal/15 text-signal flex items-center justify-center">
                <FiCpu size={16} />
              </span>
              <div>
                <p className="font-display font-semibold text-sm text-[var(--fg)]">DesFlyer Assistant</p>
                <p className="text-[11px] text-[var(--fg)]/50">Answers grounded in our site content</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm whitespace-pre-line leading-relaxed ${ m.role === 'user' ? 'bg-signal text-white rounded-br-sm' : 'bg-[var(--surface-2)] text-[var(--fg)] rounded-bl-sm' }`}
                  >
                    {m.text}
                  </div>
                  {m.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-2 max-w-[95%]">
                      {m.suggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => send(s)}
                          className="text-[11px] px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--fg)]/70 hover:border-signal hover:text-signal transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {typing && (
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[var(--surface-2)] rounded-xl rounded-bl-sm w-fit">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[var(--fg)]/40 animate-pulse-node"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-[var(--border)]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, portfolio…"
                aria-label="Type your message"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-[var(--fg)] outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="w-9 h-9 rounded-full bg-signal text-white flex items-center justify-center shrink-0 disabled:opacity-40"
                disabled={!input.trim()}
              >
                <FiSend size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
