import { useState } from "react";
import axios from "axios";
export default function ContactMeForm() {
    const [status, setStatus] = useState<{ message: string, success: boolean }>();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true);
        try {
            let res = await axios.post('/api/contact-form',
                {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    message: e.target.message.value,
                }
            )
            setStatus(res.data);
            e.target.reset()
        } catch (e) {
            setStatus({ success: false, message: "Couldn't send message" })
        }
        setLoading(false);
    }

    return (
        <form className="bg-white p-6 rounded-2xl border shadow-sm space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="text-sm font-medium">Name</label>
                <input required className="mt-2 w-full border rounded-md p-3" name="name" placeholder="Your name" />
            </div>
            <div>
                <label className="text-sm font-medium">Email</label>
                <input required type="email" className="mt-2 w-full border rounded-md p-3" name="email" placeholder="you@example.com" />
            </div>
            <div>
                <label className="text-sm font-medium">Message</label>
                <textarea required className="mt-2 w-full border rounded-md p-3" name='message' placeholder="Write your message..." rows={5} />
            </div>
            <div className="flex items-center justify-start">
                <button type="submit" disabled={loading} className={`px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}>{!loading ? "Send Message" : "Sending..."}</button>
            </div>
            {status && <div className={`text-sm ${status.success ? 'text-green-600' : 'text-red-600'}`}>{status.message}</div>}
        </form>
    )
}