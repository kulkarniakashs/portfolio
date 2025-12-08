export default function Navbar() {
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
    )
}