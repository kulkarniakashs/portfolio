import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image';
export default function Contact() {
    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold">Get in touch</h3>
                    <p className="text-gray-600 mt-2">I’m available for freelance and full-time roles. Share a message and I’ll get back to you.</p>

                    <div className="mt-6 grid grid-cols-2 md:grid-cols-1 gap-4">
                        <a href="mailto:akashkulkarni@outlook.in" className="flex items-center gap-2">
                            <FaEnvelope size={24} /> <span className="text-sm">Email</span>
                        </a>
                        <a href="https://github.com/kulkarniakashs" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            <FaGithub size={24} /> <span className="text-sm">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/kulkarniakashs" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            <FaLinkedin size={24} /> <span className="text-sm">Linkedin</span>
                        </a>
                        <a href="https://leetcode.com/kulkarniakashs" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            <Image src='/icons8-leetcode-24.png' height={24} width={24} alt='Leetcode Logo' className='z-10' />
                            <span className="text-sm">LeetCode</span>
                        </a>
                        {/* <a href="https://instagram.com/kulkarniakashs" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            <FaInstagram size={24} /> <span className="text-sm">Instagram</span>
                        </a> */}
                    </div>

                    {/* <div className="mt-8">
                        <div className="bg-white p-6 rounded-2xl border shadow-sm">
                            <div className="font-semibold">Email</div>
                            <div className="text-gray-600">youremail@example.com</div>
                        </div>
                    </div> */}
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
                        <div className="flex items-center justify-start">
                            <button type="submit" className="px-5 py-3 bg-indigo-600 text-white rounded-lg">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}