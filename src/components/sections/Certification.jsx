// Example: Certifications.jsx
import { motion } from 'framer-motion';

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
        <section id="certifications" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Continuous learning and professional development achievements
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-8">Education</h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700/70 transition-colors duration-300"
                                >
                                    <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                                    <div className="text-teal-400 font-medium mb-2">{edu.institution}</div>
                                    <div className="text-gray-400 text-sm flex flex-col sm:flex-row sm:items-center sm:gap-4">
                                        <span>{edu.location}</span>
                                        <span className="hidden sm:block">•</span>
                                        <span>{edu.period}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-8">Certifications</h3>
                        <div className="space-y-6">
                            {certificates.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700/70 transition-colors duration-300 group"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h4 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-200">
                                            {cert.name}
                                        </h4>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                {cert.type}
                                            </span>
                                            {cert.verified && (
                                                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                    Verified
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-gray-300 mb-4">{cert.issuer}</div>
                                    
                                    {cert.verificationLink && (
                                        <a
                                            href={cert.verificationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            View Certificate
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}