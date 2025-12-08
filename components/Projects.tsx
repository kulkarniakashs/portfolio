import { motion } from "framer-motion"
export default function Projects() {
    const projects = [
        { title: 'Project One', desc: 'Short description of project one', tech: 'Next.js • Node • MongoDB', link: '#' },
        { title: 'Project Two', desc: 'Short description of project two', tech: 'React • Express • MySQL', link: '#' },
        { title: 'Project Three', desc: 'Short description of project three', tech: 'TensorFlow • Python', link: '#' },
        { title: 'Project Four', desc: 'Short description of project four', tech: 'React Native • Firebase', link: '#' },
        // add more projects as needed
    ]
    return (
        <>
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
        </>
    )
}