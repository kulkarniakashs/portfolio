"use client"
import { useEffect } from 'react'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'

export default function Home() {
  // Smooth scroll polyfill for older browsers can be added if needed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [])

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-100 text-gray-900">
        {/* NAVBAR */}
        <Navbar />
        {/* HERO */}
        <Hero />
        <main className="mt-20">
          {/* PROJECTS */}
          <Projects />
          <Skills />
          {/* EDUCATION */}
          <Education />
          {/* CONTACT / FOOTER */}
          <Contact />
          <footer className="pb-12 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Akash Kulkarni.
          </footer>
        </main>
      </div>
    </>
  )
}
