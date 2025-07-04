// Example: Projects.jsx
import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: "Immigration Portal Platform",
            description: "A comprehensive web application for immigration consultancy services, featuring client onboarding, document management, and case tracking. Built with React and modern frontend technologies to ensure optimal user experience and accessibility.",
            image: "/images/comp-guy.png",
            liveUrl: "#",
            githubUrl: "#",
            technologies: ["React", "JavaScript", "CSS3", "Bootstrap", "Git"]
        },
        {
            title: "Growth Operations Dashboard",
            description: "Multi-client dashboard for managing digital marketing campaigns and growth metrics. Developed using Vue.js with responsive design patterns and real-time data visualization components.",
            image: "/images/comp-guy.png",
            liveUrl: "#",
            githubUrl: "#",
            technologies: ["Vue.js", "JavaScript", "SASS", "Tailwind CSS", "Chart.js"]
        },
        {
            title: "Content Management System",
            description: "Custom CMS for digital agencies to manage multiple client websites and content publication workflows. Features include role-based access control, automated publishing, and SEO optimization tools.",
            image: "/images/comp-guy.png",
            liveUrl: "#",
            githubUrl: "#",
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"]
        }
    ];

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                </h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((project, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href={project.liveUrl} target="_blank" rel="noreferrer noopener" aria-label={`${project.title} (opens in a new tab)`}>
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                {project.title}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">{project.description}</p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {project.technologies.map((tech, techIndex) => (
                                            <li key={techIndex} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                    {tech}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <img alt="" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color: 'transparent'}} src={project.image} />
                            </div>
                        </li>
                    ))}
                </ul>
                {/* <div className="mt-12">
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="#" target="_blank" rel="noreferrer noopener" aria-label="View Full Project Archive (opens in a new tab)">
                        <span>View Full <span className="inline-block">Project Archive
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                            </svg>
                        </span></span>
                    </a>
                </div> */}
            </div>
        </section>
    );
}