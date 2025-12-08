const education = [
    { year: '2022', title: "Master's in Computer Science", inst: 'ABC University', details: 'Specialization: Software Engineering' },
    { year: '2020', title: "Bachelor's in Engineering", inst: 'XYZ College', details: 'Department of Computer Science' },
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
                                <div className="text-sm font-semibold text-indigo-600">{edu.year}</div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border shadow-sm">
                                <div className="font-semibold text-xl">{edu.title}</div>
                                <div className="text-sm text-gray-600">{edu.inst}</div>
                                <p className="mt-2 text-gray-700">{edu.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}