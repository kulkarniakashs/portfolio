import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
export default function Contact() {
    return (
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3l14 7-7 14L3 17 5 3z" fill="#111827" /></svg>
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
                    <form className="bg-white p-6 rounded-2xl border shadow-sm space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks — this form is a demo. Hook up a backend to send messages.') }}>
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
        </section>
    )
}