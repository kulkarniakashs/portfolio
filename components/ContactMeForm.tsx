export default function ContactMeForm() {
    return (
        <form className="bg-white p-6 rounded-2xl border shadow-sm space-y-4" onSubmit={(e)=>{}}>
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
    )
}