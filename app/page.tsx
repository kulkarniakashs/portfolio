"use client"
import Head from 'next/head'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  // Smooth scroll polyfill for older browsers can be added if needed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [])

  const projects = [
    { title: 'Project One', desc: 'Short description of project one', tech: 'Next.js • Node • MongoDB', link: '#' },
    { title: 'Project Two', desc: 'Short description of project two', tech: 'React • Express • MySQL', link: '#' },
    { title: 'Project Three', desc: 'Short description of project three', tech: 'TensorFlow • Python', link: '#' },
    { title: 'Project Four', desc: 'Short description of project four', tech: 'React Native • Firebase', link: '#' },
    // add more projects as needed
  ]

  const education = [
    { year: '2022', title: "Master's in Computer Science", inst: 'ABC University', details: 'Specialization: Software Engineering' },
    { year: '2020', title: "Bachelor's in Engineering", inst: 'XYZ College', details: 'Department of Computer Science' },
  ]

  return (
    <>
      <Head>
        <title>Full Stack Developer — Portfolio</title>
        <meta name="description" content="Full Stack Developer portfolio" />
      </Head>

      <div className="min-h-screen bg-linear-to-b from-gray-50 via-white to-gray-100 text-gray-900">
        {/* NAVBAR */}
        <nav className="fixed top-4 left-0 right-0 z-40 mx-auto max-w-6xl px-6">
          <div className="backdrop-blur-sm bg-white/60 border border-gray-200 rounded-2xl shadow-sm p-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-indigo-500 transition">
                <img src="/profilePhoto.jpg" alt="profile" className="object-cover w-full h-full" />
              </div>
              <div>
                <div className="font-semibold">Akash Kulkarni</div>
                <div className="text-xs text-gray-600">Full Stack Developer</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="#projects" className="px-3 py-2 rounded-md hover:bg-gray-100">Projects</a>
              <a href="#education" className="px-3 py-2 rounded-md hover:bg-gray-100">Education</a>
              <a href="#contact" className="px-3 py-2 rounded-md hover:bg-gray-100">Contact</a>
              <a href="/resume.pdf" download className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:shadow-md">
                View Resume
              </a>
            </div>
          </div>
        </nav>

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

        {/* PROJECTS */}
        <main className="mt-20">
          <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-gray-600 mt-2">A selection of projects I've built. Click to view repository or live demo.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <motion.a
                  key={i}
                  href={p.link}
                  className="block p-6 rounded-2xl bg-white border hover:shadow-lg transition"
                  whileHover={{ y: -6 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">{p.title}</div>
                    <div className="text-sm text-gray-500">{p.tech}</div>
                  </div>
                  <p className="mt-3 text-gray-700">{p.desc}</p>
                </motion.a>
              ))}
            </div>

            {/* Responsive note: grid is n x 2 matrix on medium+ screens */}
          </section>

          {/* EDUCATION */}
          <section id="education" className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="mt-8 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

              <div className="space-y-8 pl-10">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute left-[-28px] top-2 w-12 h-12 rounded-full flex items-center justify-center bg-indigo-50 border border-indigo-200">
                      <div className="text-sm font-semibold text-indigo-600">{edu.year}</div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border shadow-sm">
                      <div className="font-semibold text-xl">{edu.title}</div>
                      <div className="text-sm text-gray-600">{edu.inst}</div>
                      <p className="mt-2 text-gray-700">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT / FOOTER */}
          <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold">Get in touch</h3>
                <p className="text-gray-600 mt-2">I’m available for freelance and full-time roles. Share a message and I’ll get back to you.</p>

                <div className="mt-6 flex items-center gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <FaInstagram size={24} /> <span className="text-sm">Instagram</span>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <FaGithub size={24} /> <span className="text-sm">GitHub</span>
                  </a>
                  <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3l14 7-7 14L3 17 5 3z" fill="#111827"/></svg>
                    <span className="text-sm">LeetCode</span>
                  </a>
                </div>

                <div className="mt-8">
                  <div className="bg-white p-6 rounded-2xl border shadow-sm">
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">youremail@example.com</div>
                  </div>
                </div>
              </div>

              <div>
                <form className="bg-white p-6 rounded-2xl border shadow-sm space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — this form is a demo. Hook up a backend to send messages.')}}>
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input required className="mt-2 w-full border rounded-md p-3" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input required type="email" className="mt-2 w-full border rounded-md p-3" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <textarea required className="mt-2 w-full border rounded-md p-3" placeholder="Write your message..." rows={5} />
                  </div>
                  <div className="flex items-center justify-between">
                    <button type="submit" className="px-5 py-3 bg-indigo-600 text-white rounded-lg">Send Message</button>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FaLinkedin />
                      <FaGithub />
                      <FaEnvelope />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <footer className="mt-12 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Akash Kulkarni.
            </footer>
          </section>
        </main>
      </div>
    </>
  )
}
