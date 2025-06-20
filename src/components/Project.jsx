// Example: Projects.jsx
export default function Projects() {
    const projects = [
        {
            title: "AEM Migration",
            desc: "Migrated client websites to AEM, increasing traffic by 30%.",
            tech: ["AEM", "React", "HTL"],
        },
        // Add more...
    ];

    return (
        <section id="projects" className="py-12 bg-gray-800">
            <h2 className="text-3xl text-center text-white mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-700 p-6 rounded-lg hover:scale-105 transition">
                        <h3 className="text-xl text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span key={tech} className="bg-gray-600 text-sm px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}