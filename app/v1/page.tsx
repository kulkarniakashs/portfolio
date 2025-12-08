"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

// Replace with your own photo at /public/me.jpg
// Place this file in app/page.jsx (App Router) or pages/index.jsx (Pages Router) in a Next.js project

const projects = [
  { title: 'Project Alpha', desc: 'Full-stack web app with auth and realtime features', link: '#' },
  { title: 'Project Beta', desc: 'E-commerce clone with payments and dashboard', link: '#' },
  { title: 'Project Gamma', desc: 'Machine learning demo with visualizations', link: '#' },
  { title: 'Project Delta', desc: 'Mobile-first PWA with offline support', link: '#' },
]

const education = [
  { school: 'ABC University', degree: "B.Tech in Computer Science", year: '2019 - 2023', details: 'CGPA: 8.2/10' },
  { school: 'XYZ Junior College', degree: 'Higher Secondary (Science)', year: '2017 - 2019', details: 'Percentage: 92%' },
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-white to-indigo-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header / Hero */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-2xl">
            {/* put your photo in public/me.jpg */}
            <Image src="/profilePhoto.jpg" alt="Your photo" fill sizes="(max-width: 768px) 144px, 176px" className="object-cover" />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold">Hi, I&#39;m Akash Kulkarni</h1>
            <p className="mt-2 text-slate-600 max-w-xl">Full-Stack Developer — building modern, accessible, and delightful web apps. I work with React, Next.js, Node, PostgreSQL, and cloud platforms.</p>

            <div className="mt-4 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white font-medium shadow hover:scale-105 transition-transform">View Projects</a>
              <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition">Contact</a>
            </div>
          </div>
        </motion.header>

        {/* Projects - n x 2 matrix */}
        <section id="projects" className="mt-12">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-semibold">Projects</motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((p, i) => (
              <article key={i} className="rounded-2xl p-5 bg-white/80 backdrop-blur-sm border border-slate-100 shadow">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href={p.link} className="text-indigo-600 font-medium">View</a>
                  <div className="text-slate-400 text-sm">Tech: React • Next.js • Node</div>
                </div>
              </article>
            ))}
          </motion.div>
        </section>

        {/* Education with connected blocks */}
        <section id="education" className="mt-12">
          <h2 className="text-2xl font-semibold">Education</h2>

          <div className="mt-8 relative pl-6">
            {/* vertical line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-indigo-200" />

            <div className="flex flex-col gap-8">
              {education.map((e, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-indigo-600 ring-4 ring-white" />
                  <div className="ml-6 p-4 rounded-2xl bg-white/80 border border-slate-100 shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{e.school}</div>
                        <div className="text-sm text-slate-500">{e.degree}</div>
                      </div>
                      <div className="text-sm text-slate-400">{e.year}</div>
                    </div>
                    <div className="mt-2 text-slate-600 text-sm">{e.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="mt-16 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl p-6 bg-white/80 border border-slate-100 shadow">
              <h3 className="font-semibold text-lg">Get in touch</h3>
              <p className="mt-2 text-slate-600">Have a project or just want to say hi? Send me a message.</p>

              <form className="mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Form submitted — connect this to your backend or use Formspree/Netlify forms'); }}>
                <div>
                  <label className="text-sm text-slate-600">Name</label>
                  <input required className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Message</label>
                  <textarea required rows={4} className="mt-1 w-full rounded-lg border px-3 py-2" placeholder="Write a message..." />
                </div>
                <div>
                  <button type="submit" className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white">Send message</button>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl p-6 bg-white/80 border border-slate-100 shadow">
                <h4 className="font-semibold">Socials</h4>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a href="#" aria-label="github" className="px-3 py-2 rounded-full border">GitHub</a>
                  <a href="#" aria-label="instagram" className="px-3 py-2 rounded-full border">Instagram</a>
                  <a href="#" aria-label="leetcode" className="px-3 py-2 rounded-full border">LeetCode</a>
                  <a href="mailto:you@example.com" className="px-3 py-2 rounded-full border">Email</a>
                </div>
              </div>

              <div className="rounded-2xl p-6 bg-white/80 border border-slate-100 shadow">
                <h4 className="font-semibold">Quick info</h4>
                <ul className="mt-3 text-sm text-slate-600 space-y-1">
                  <li>Location: Pune, India</li>
                  <li>Open to: Full-time · Internships · Freelance</li>
                  <li>Tech: React · Next.js · Node · Express · PostgreSQL · Docker</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Akash Kulkarni — Built with Next.js</div>
        </footer>
      </div>
    </main>
  )
}
