// Example: Skills.jsx
import { motion } from 'framer-motion';

export default function Skills() {
    const technicalSkills = [
        {
            category: "Frontend Development",
            skills: ["JavaScript (ES6+)", "React JS", "Vue JS", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "SASS"]
        },
        {
            category: "Content Management",
            skills: ["Adobe Experience Manager (AEM)", "Vanilla JS", "HTL", "Java"]
        },
        {
            category: "Database & Tools",
            skills: ["SQL (MySQL)", "VS Code", "IntelliJ IDEA", "Git", "Chrome DevTools", "React Dev Tools"]
        },
        {
            category: "Design Tools",
            skills: ["Figma", "Adobe XD", "Codepen"]
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
        <section id="skills" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit built through 8 years of professional development experience
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Technical Skills */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold text-white mb-8">Technical Skills</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {technicalSkills.map((skillGroup, index) => (
                                    <motion.div
                                        key={skillGroup.category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700/70 transition-colors duration-300"
                                    >
                                        <h4 className="text-lg font-semibold text-teal-400 mb-4">
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-teal-600 hover:text-white transition-colors duration-200"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Soft Skills */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold text-white mb-8">Soft Skills</h3>
                            <div className="bg-gray-700/50 rounded-lg p-6">
                                <div className="space-y-4">
                                    {softSkills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center space-x-3 group"
                                        >
                                            <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:bg-teal-300 transition-colors duration-200"></div>
                                            <span className="text-gray-200 group-hover:text-white transition-colors duration-200">
                                                {skill}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}