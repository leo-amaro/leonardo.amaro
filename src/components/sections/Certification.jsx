// Example: Certifications.jsx
import ScrollReveal from '../ui/animations/ScrollReveal';
import SectionHeader from '../common/SectionHeader';

export default function Certifications() {
    const certificates = [
        {
            name: "Professional Scrum Master I",
            issuer: "Scrum.org",
            type: "Professional Certification",
            verificationLink: "https://www.scrum.org/user/1069144",
            verified: true
        },
        {
            name: "HTML, CSS, and JavaScript for Web Developers",
            issuer: "Johns Hopkins University",
            type: "Online Course",
            verificationLink: "https://www.coursera.org/account/accomplishments/certificate/PVND4MKUSG9P",
            verified: true
        },
        {
            name: "Write a University Index Web App with Vue JS",
            issuer: "Online Platform",
            type: "Specialized Course",
            verificationLink: "https://www.coursera.org/account/accomplishments/verify/KY35T2PU9XN8/",
            verified: true
        }
    ];

    const education = [
        {
            degree: "Web Development and Internet Applications Fundamentals",
            institution: "Conestoga College",
            location: "Kitchener, ON",
            period: "2023 – 2024"
        },
        {
            degree: "Computer Technology",
            institution: "Asian Institute of Computer Studies",
            location: "Cavite, Philippines",
            period: "2008"
        }
    ];

    return (
        <section id="certifications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education and certifications">
            {/* Mobile header */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Education & Certifications
                </h2>
            </div>

            {/* Section Header */}
            <SectionHeader 
                title="Education & Certifications"
                subtitle="Continuous learning and professional development"
                className="lg:block"
            />

            <div className="space-y-10">
                {/* Education */}
                <div>
                    <ScrollReveal>
                        <h3 className="text-lg font-bold text-slate-200 mb-6">Education</h3>
                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <ScrollReveal key={index} delay={index * 100}>
                                    <div className="rounded-lg bg-slate-800/50 p-5 hover:bg-slate-800/70 transition-colors duration-300">
                                        <h4 className="text-teal-300 font-medium mb-2">{edu.degree}</h4>
                                        <div className="text-slate-200 mb-1">{edu.institution}</div>
                                        <div className="text-sm text-slate-400 flex items-center gap-2">
                                            <span>{edu.location}</span>
                                            <span className="text-slate-600">•</span>
                                            <span>{edu.period}</span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Certifications */}
                <div>
                    <ScrollReveal>
                        <h3 className="text-lg font-bold text-slate-200 mb-6">Certifications</h3>
                        <div className="space-y-4">
                            {certificates.map((cert, index) => (
                                <ScrollReveal key={index} delay={index * 100}>
                                    <a
                                        href={cert.verificationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block rounded-lg bg-slate-800/50 p-5 hover:bg-slate-800/70 transition-all duration-300 group relative"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-grow">
                                                <h4 className="text-teal-300 font-medium mb-1 group-hover:text-teal-200 transition-colors duration-300">
                                                    {cert.name}
                                                </h4>
                                                <div className="text-slate-200 mb-2 group-hover:text-white transition-colors duration-300">
                                                    {cert.issuer}
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="px-2 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                                        {cert.type}
                                                    </span>
                                                    {cert.verified && (
                                                        <span className="px-2 py-1 text-xs font-medium bg-green-400/10 text-green-300 rounded-full">
                                                            Verified
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="shrink-0 text-slate-400 group-hover:text-teal-300 transition-colors duration-300">
                                                <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}