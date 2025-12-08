"use client"
import Head from 'next/head'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export default function Home() {
  // Smooth scroll polyfill for older browsers can be added if needed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [])

  return (
    <>
      <Head>
        <title>Full Stack Developer — Portfolio</title>
        <meta name="description" content="Full Stack Developer portfolio" />
      </Head>

      <div className="min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-100 text-gray-900">
        {/* NAVBAR */}
        <Navbar />
        {/* HERO */}
        <header className="pt-28">
          <div className="max-w-6xl mx-auto px-6 flex gap-12 items-center">
            <motion.section
              className="flex-1"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Hi, I am <span className="text-indigo-600">Akash Kulkarni</span>
                <br />
                Full Stack Developer
              </h1>

              <p className="mt-6 text-lg text-gray-700 max-w-xl">
                I build scalable web applications with delightful user experiences. I work across the stack — from designing pixel-perfect UIs to building resilient backends and DevOps pipelines.
              </p>

              <div className="mt-8 flex gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:scale-[1.02]">See Projects</a>
                <a href="/resume.pdf" className="inline-flex items-center gap-2 px-5 py-3 border rounded-lg">Download Resume</a>
              </div>
            </motion.section>

            <motion.aside
              className="w-72 shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-white">
                <img src="/profilePhoto.jpg" alt="Your Photo" className="w-full h-96 object-cover" />
                <div className="p-4">
                  <div className="font-semibold">Your Name</div>
                  <div className="text-sm text-gray-600">Full Stack Developer</div>
                  <div className="mt-2 text-sm text-gray-700">Open to opportunities • Available for freelance</div>
                </div>
              </div>
            </motion.aside>
          </div>
        </header>

        <main className="mt-20">
          {/* PROJECTS */}
          <Projects />
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
