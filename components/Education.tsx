const education = [
    { start: '2022', end: '2026', title: "B.Tech in Computer Science and Engineering", inst: 'G H Raisoni College of Engineering and Management', details: 'CGPA: 8.7/10' },
    { start: '2021', end: '2022', title: "HSC", inst: 'Rajarshi Shahu Junior Science College, Latur', details: '' },
]
export default function Education() {
    return (
        <section id="education" className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="mt-8 relative">
                {/* Vertical connecting line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

                <div className="space-y-8 pl-10">
                    {education.map((edu, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-7 top-2 w-12 h-12 rounded-full flex items-center justify-center bg-indigo-50 border border-indigo-200">
                                <div className="text-sm font-semibold text-indigo-600">{edu.end}</div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border shadow-sm">
                                <div className="flex justify-between items-center">
                                    <div >
                                        <div className="font-semibold text-xl">{edu.title}</div>
                                        <div className="text-sm text-gray-500">{edu.inst}</div>
                                    </div>
                                    <div className="text-sm text-slate-400">{edu.start + ' - ' + edu.end}</div>
                                </div>
                                {edu.details && <p className="mt-2 text-slate-600 text-sm">{edu.details}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}