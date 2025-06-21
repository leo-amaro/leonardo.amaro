// Example: Experience.jsx
import TimelineItem from './animations/TimelineItem';
import TimelineHeader from './animations/TimelineHeader';

export default function Experience() {
    // Reorganized experiences in chronological order (most recent first)
    const experiences = [
        {
            period: "2020 — 2023",
            title: "AEM Developer • Team Lead",
            company: "GrowthOps",
            companyLink: "#",
            description: "Advanced to AEM developer role, leading a team of 2 junior developers in a 9-member international project team to deliver enterprise-scale insurance websites. Customized single-source AEM components and templates from AIA's global framework to meet Philippines-specific business requirements.",
            achievements: [
                "30% increase in website visitors", 
                "45% performance improvements", 
                "Recognized as reliable developer for managing complex mid-project changes"
            ],
            technologies: ["React", "JavaScript", "HTML", "CSS", "Bootstrap 5", "SASS", "Storybook", "AEM Components", "Adobe Analytics", "Git"],
            projects: [
                { name: "AIA Philippines", url: "https://www.aia.com.ph/en" },
                { name: "BPI AIA", url: "https://www.bpi-aia.com.ph/en" }
            ]
        },
        {
            period: "2015 — 2020",
            title: "Web Publisher • Content Population Specialist",
            company: "GrowthOps",
            companyLink: "#",
            description: "Specialized in web content population and migration for international banking and automotive clients, transitioning websites from legacy systems to Adobe Experience Manager (AEM). Managed content population workflows for enterprise-scale projects, ensuring brand consistency across global digital platforms.",
            achievements: [
                "Successfully migrated 100+ web pages across multiple projects",
                "Maintained 99.9% content accuracy during migrations",
                "Collaborated with international teams across 3 time zones"
            ],
            technologies: ["Adobe Experience Manager", "HTML", "CSS", "JavaScript", "HTL", "Content Migration", "Content Population"],
            projects: [
                { name: "Hong Leong Bank Malaysia", url: "https://www.hlb.com.my/en/personal-banking/home.html" },
                { name: "Ford Australia", url: "https://www.ford.com.au/" },
                { name: "Globe Business Philippines", url: "https://www.globe.com.ph/business" }
            ]
        }
    ];

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            {/* Mobile header */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience
                </h2>
            </div>

            {/* Timeline Header for desktop */}
            <div className="hidden lg:block">
                <TimelineHeader 
                    title="Professional Journey"
                    subtitle="8+ years of web development expertise"
                />
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <TimelineItem 
                        key={index}
                        delay={index * 200}
                        isLast={index === experiences.length - 1}
                        className="mb-8"
                    >
                        {/* Experience Card */}
                        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/25">
                            {/* Period Badge */}
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-400/10 text-teal-300 text-sm font-medium mb-4">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {exp.period}
                            </div>

                            {/* Title & Company */}
                            <h3 className="text-xl font-semibold text-slate-200 mb-2">
                                {exp.title}
                            </h3>
                            <div className="mb-4">
                                <a 
                                    href={exp.companyLink}
                                    className="inline-flex items-center text-teal-300 hover:text-teal-200 transition-colors font-medium"
                                    target="_blank" 
                                    rel="noreferrer noopener"
                                >
                                    {exp.company}
                                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>

                            {/* Description */}
                            <p className="text-slate-300 leading-relaxed mb-6">
                                {exp.description}
                            </p>

                            {/* Achievements */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2L3 7v11c0 .55.45 1 1 1h3v-6h6v6h3c.55 0 1-.45 1-1V7l-7-5zM8 16v-4h4v4H8z" clipRule="evenodd" />
                                    </svg>
                                    Key Achievements
                                </h4>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, achievementIndex) => (
                                        <li key={achievementIndex} className="flex items-start text-slate-300">
                                            <span className="text-teal-400 mr-3 mt-1.5 flex-shrink-0">
                                                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                                                    <circle cx="4" cy="4" r="3" />
                                                </svg>
                                            </span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Notable Projects */}
                            {exp.projects && (
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                                        </svg>
                                        Notable Projects
                                    </h4>
                                    <ul className="flex flex-wrap gap-3">
                                        {exp.projects.map((project, projectIndex) => (
                                            <li key={projectIndex}>
                                                <a 
                                                    href={project.url} 
                                                    target="_blank" 
                                                    rel="noreferrer noopener"
                                                    className="inline-flex items-center px-3 py-1 rounded-md bg-slate-700/50 text-slate-300 hover:text-teal-300 hover:bg-slate-700 transition-all text-sm border border-slate-600/50 hover:border-teal-400/30"
                                                >
                                                    {project.name}
                                                    <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technologies */}
                            <div>
                                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full border border-teal-400/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TimelineItem>
                ))}
            </div>

            {/* Resume Link */}
            <div className="mt-12 text-center">
                <a 
                    className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-teal-300 font-medium rounded-lg border border-slate-600 hover:border-teal-400/50 transition-all duration-300 group" 
                    href="/amaro.leonardo.resume.portfolio.pdf" 
                    target="_blank" 
                    rel="noreferrer noopener"
                >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                    View Full Résumé
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </section>
    );
}