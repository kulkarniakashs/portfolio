import { motion } from "framer-motion"
export default function Projects() {
    const projects = [
        { title: 'SyncChat: Real-Time Chat Platform', desc: 'Scalable real-time chat platform with group and private messaging built on a Pub/Sub architecture.', tech: 'Next.js • Express.js • Prisma • WebSocket • Redis • Redux', repo: "https://github.com/kulkarniakashs/SyncChat", live: "" },
        { title: 'StudyPal — AI Study Companion', desc: 'Ask study questions and get clear, structured answers instantly—save, share, and revisit your chats securely.', tech: 'Next.js • Redux • MongoDB • Mongoose • Gemini API', repo: "https://github.com/kulkarniakashs/StudyPal", live: "https://studypal-akash.vercel.app" },
        { title: 'Postly — A Blogging Platform', desc: 'A blogging that enables users to publish posts, view writer profiles, and personalize their feed by following the authors they enjoy.', tech: 'React.js • Hono • Prisma • Zod • Node.js', repo: "https://github.com/kulkarniakashs/StudyPal", live: "" },
        { title: 'TaskBot', desc: 'A full-stack productivity tool featuring task management, AI chatbot, and NLP-based text summarization.', tech: 'React.js • Flask • Python • Gemini API', repo: "https://github.com/kulkarniakashs/taskbot", live: "" },
        // add more projects as needed
    ]
    return (
        <>
            <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold">Projects</h2>
                {/* <p className="text-gray-600 mt-2">Turning ideas into interactive experiences — explore the projects I’m proud of.</p> */}
                <p className="text-gray-600 mt-2">Dive into the projects that shaped my journey — built, broken, rebuilt, and perfected.</p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            className="block p-6 rounded-2xl bg-white border hover:shadow-lg transition"
                            whileHover={{ y: -6 }}
                        >
                            {/* <div className="flex items-center justify-between"> */}
                                <div className="text-lg font-semibold">{p.title}</div>
                                <div className="text-sm text-gray-500">{p.tech}</div>
                            {/* </div> */}
                            <p className="mt-3 text-gray-700">{p.desc}</p>
                            <div className="mt-4 flex gap-4 text-sm font-medium">
                                {p.repo && (
                                    <a href={p.repo} className="text-indigo-600 hover:underline" target="_blank">Repository →</a>
                                )}
                                {p.live && (
                                    <a href={p.live} className="text-green-600 hover:underline" target="_blank">Live Demo →</a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* Responsive note: grid is n x 2 matrix on medium+ screens */}
            </section>
        </>
    )
}