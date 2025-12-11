"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
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

                <div className="hidden md:flex items-center gap-4">
                    <a href="#projects" className="px-3 py-2 rounded-md hover:bg-gray-100">Projects</a>
                    <a href="#skills" className="px-3 py-2 rounded-md hover:bg-gray-100">Skills</a>
                    <a href="#contact" className="px-3 py-2 rounded-md hover:bg-gray-100">Contact</a>
                    <a href="/resume.pdf" download className="ml-2 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:shadow-md">
                        View Resume
                    </a>
                </div>

                <div className="md:hidden flex items-center">
                    <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-gray-100 transition">
                        {/* hamburger icon: three lines */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className={`mx-auto max-w-6xl px-6 md:hidden ${open ? 'block' : 'hidden'}`}
                >
                    <div className="mt-3 bg-white/95 border border-gray-200 rounded-2xl shadow-sm p-4 space-y-3">
                        <a href="#projects" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-100">Projects</a>
                        <a href="#education" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-100">Education</a>
                        <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-100">Contact</a>
                        <a href="/resume.pdf" download onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-indigo-600 text-white text-center">View Resume</a>
                    </div>
                </motion.div> */}

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="absolute left-0 right-0 top-full mt-3 z-50"
                        >
                            {/* center the inner panel to match navbar width/padding */}
                            <div className="mx-auto max-w-6xl px-6">
                                <div className="bg-white/95 border border-gray-200 rounded-2xl shadow-sm p-4 space-y-3 max-h-[60vh] overflow-auto">
                                    <a href="#projects" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-100">Projects</a>
                                    <a href="#skills" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-100">Skills</a>
                                    <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-100">Contact</a>
                                    <a href="/resume.pdf" download onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-indigo-600 text-white text-center">View Resume</a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}