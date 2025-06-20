// Example: Experience.jsx
export default function Experience() {
    const jobs = [
        {
            role: "Web Developer",
            company: "Ellis Canadian Immigration",
            period: "2023 – 2024",
            achievements: [
                "Led front-end development, increasing user engagement by 25%.",
                "Optimized load times by 40%.",
            ],
        },
        // Add GrowthOps roles...
    ];

    return (
        <section className="py-12 bg-gray-900">
            <h2 className="text-3xl text-center text-white mb-8">Work Experience</h2>
            <div className="max-w-2xl mx-auto pl-6 border-l-2 border-teal-400">
                {jobs.map((job, index) => (
                    <div key={index} className="mb-12 relative">
                        <div className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-teal-400 border-4 border-gray-900"></div>
                        <h3 className="text-xl text-white">{job.role} · {job.company}</h3>
                        <p className="text-gray-400 mb-2">{job.period}</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {job.achievements.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}