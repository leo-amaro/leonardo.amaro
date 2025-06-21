// Example: Experience.jsx
import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            period: "2020 — 2023",
            title: "AEM Developer • Team Lead",
            company: "GrowthOps",
            companyLink: "#",
            description: "Advanced to AEM developer role, leading a team of 2 junior developers in a 9-member international project team to deliver enterprise-scale insurance websites. Customized single-source AEM components and templates from AIA's global framework to meet Philippines-specific business requirements. Implemented country-specific product displays, optimized lead capture forms with user preference tracking, and integrated Adobe Analytics. Achieved 30% increase in website visitors and 45% performance improvements through technical optimizations.",
            achievements: ["30% increase in website visitors", "45% performance improvements", "Recognized as reliable developer for managing complex mid-project changes"],
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
            description: "Specialized in web content population and migration for international banking and automotive clients, transitioning websites from legacy systems to Adobe Experience Manager (AEM). Managed content population workflows for enterprise-scale projects, ensuring brand consistency across global digital platforms. Developed expertise in AEM authoring and collaborated with international development teams to maintain content quality and publishing standards.",
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
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience
                </h2>
            </div>
            <div>
                <ol className="group/list">
                    {experiences.map((exp, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.period}>
                                    {exp.period}
                                </header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <div>
                                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={exp.companyLink} target="_blank" rel="noreferrer noopener" aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}>
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>{exp.title} · <span className="inline-block">{exp.company}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                    </svg>
                                                </span></span>
                                            </a>
                                        </div>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                                    
                                    {/* Achievements */}
                                    {exp.achievements && (
                                        <div className="mt-3">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Key Achievements:</p>
                                            <ul className="space-y-1">
                                                {exp.achievements.map((achievement, achievementIndex) => (
                                                    <li key={achievementIndex} className="text-sm text-slate-400 flex items-start">
                                                        <span className="text-teal-300 mr-2 mt-1.5 flex-shrink-0">•</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    
                                    {/* Project Links */}
                                    {exp.projects && (
                                        <div className="mt-3">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Notable Projects:</p>
                                            <ul className="flex flex-wrap gap-2">
                                                {exp.projects.map((project, projectIndex) => (
                                                    <li key={projectIndex}>
                                                        <a 
                                                            href={project.url} 
                                                            target="_blank" 
                                                            rel="noreferrer noopener"
                                                            className="inline-flex items-center text-sm text-slate-300 hover:text-teal-300 transition-colors"
                                                            aria-label={`${project.name} (opens in a new tab)`}
                                                        >
                                                            {project.name}
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-3 w-3 shrink-0 ml-1" aria-hidden="true">
                                                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <li key={techIndex} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                    {tech}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
                <div className="mt-12">
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/leonardo-amaro-resume.html" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                        <span>View Full <span className="inline-block">Résumé
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                            </svg>
                        </span></span>
                    </a>
                </div>
            </div>
        </section>
    );
}