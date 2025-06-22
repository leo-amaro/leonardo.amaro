// Example: Skills.jsx
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/animations/ScrollReveal';
import SectionHeader from '../common/SectionHeader';

export default function Skills() {
    const technicalSkills = [
        {
            category: "Frontend Development",
            skills: [
                "React JS",
                "Next.js",
                "Vue JS", 
                "JavaScript (ES6+)",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Bootstrap",
                "SASS"
            ]
        },
        {
            category: "Content Management",
            skills: [
                "Adobe Experience Manager (AEM)",
                "Vanilla JS",
                "HTL",
                "Java"
            ]
        },
        {
            category: "Database & Tools",
            skills: [
                "SQL (MySQL)",
                "VS Code",
                "IntelliJ IDEA",
                "Git",
                "Chrome DevTools",
                "React Dev Tools"
            ]
        },
        {
            category: "Design Tools",
            skills: [
                "Figma",
                "Adobe XD",
                "Codepen"
            ]
        }
    ];

    const softSkills = [
        "Problem-Solving",
        "Collaboration", 
        "Communication",
        "Organization",
        "Time Management",
        "Quick Learning"
    ];

    return (
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills and expertise">
            {/* Mobile header */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Skills
                </h2>
            </div>

            {/* Section Header */}
            <SectionHeader 
                title="Skills & Expertise"
                subtitle="A comprehensive toolkit built through years of experience"
                className="lg:block"
            />

            <div className="space-y-10">
                {/* Technical Skills */}
                <div>
                    <ScrollReveal>
                        <h3 className="text-lg font-bold text-slate-200 mb-6">Technical Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {technicalSkills.map((skillGroup, index) => (
                                <ScrollReveal key={skillGroup.category} delay={index * 100}>
                                    <div className="rounded-lg bg-slate-800/50 p-5 hover:bg-slate-800/70 transition-colors duration-300">
                                        <h4 className="text-teal-300 font-medium mb-3">{skillGroup.category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.skills.map((skill) => (
                                                <span 
                                                    key={skill}
                                                    className="px-3 py-1 text-sm font-medium bg-slate-700/50 text-slate-200 rounded-full hover:bg-teal-400/10 hover:text-teal-300 transition-colors duration-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Soft Skills */}
                <div>
                    <ScrollReveal>
                        <h3 className="text-lg font-bold text-slate-200 mb-6">Soft Skills</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {softSkills.map((skill, index) => (
                                <ScrollReveal key={skill} delay={index * 100}>
                                    <div className="flex items-center space-x-2 group">
                                        <div className="w-2 h-2 rounded-full bg-teal-400/60 group-hover:bg-teal-300 transition-colors duration-300"></div>
                                        <span className="text-slate-300 group-hover:text-teal-300 transition-colors duration-300">
                                            {skill}
                                        </span>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}