import { motion } from "framer-motion"
let skills = ["React.js", "Node.js", "Next.js" ,"TypeScript","Express.js", "Hono", "WebSokcet","Tailwind CSS", "Shadcn", "MongoDB", "Prisma", "SQL", "MySQL", "Git", "GitHub"];
export default function Skills() {
    return (
        <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold">Technical Skills</h2>
            <p className="text-gray-600 mt-2">
                The technologies, tools, and frameworks I use to build fast, scalable, and user-friendly applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0 0 12px rgba(99, 102, 241, 0.4)"
                        }}
                        className="px-2 py-1 md:px-4 md:py-2 rounded-full text-sm bg-indigo-50 text-indigo-700 border border-indigo-100 cursor-default transition-shadow"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </section>

    )
}