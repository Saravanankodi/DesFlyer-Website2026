import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Chatbot from './components/Chatbot'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Products from './pages/Products'
import Contact from './pages/Contact'
import InternshipPage from './pages/opportunities/InternshipPage'
import JobsPage from './pages/opportunities/JobsPage'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import DigitalMuseum from "./components/DigitalMuseum";

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function SiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')
  // Loading screen plays once per full page load, only for the main site (not admin).
  const [showLoader, setShowLoader] = useState(!isAdminRoute)

  return (
    <>
      {showLoader && <LoadingScreen onComplete={() => setShowLoader(false)} />}
      <ScrollToTop />
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route
          path="*"
          element={
            <SiteLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/opportunities/internship" element={<InternshipPage />} />
                <Route path="/opportunities/jobs" element={<JobsPage />} />
                {/* Legacy URLs redirected to keep old links/bookmarks working */}
                <Route path="/careers" element={<Navigate to="/opportunities/jobs" replace />} />
                <Route path="/internship" element={<Navigate to="/opportunities/internship" replace />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/museum" element={<DigitalMuseum />} />
              </Routes>
            </SiteLayout>
          }
        />
      </Routes>
    </>
  )
}
