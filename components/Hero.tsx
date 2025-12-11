import { motion } from "framer-motion"
export default function Hero() {
    return (
        <header className="h-full flex flex-col justify-center">
            <div className="flex gap-6 flex-col-reverse mx-auto px-6 md:max-w-6xl md:gap-12 md:flex-row items-center">
                <motion.section
                    className="flex-1"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        <div className="flex flex-col lg:flex-row">
                            <div>Hi, I am&nbsp;</div>
                            <div className="text-indigo-600">Akash Kulkarni</div>
                        </div>
                        <div>Full Stack Developer</div>
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
                    <div className="w-55 h-55 md:w-85 md:h-85 rounded-full overflow-hidden border-4 border-indigo-200 shadow-lg bg-white mx-auto">
                        <img src="/photo.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
                    </div>
                </motion.aside>
            </div>
        </header>
    )
}