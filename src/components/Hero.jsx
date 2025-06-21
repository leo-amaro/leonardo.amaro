import { useState, useEffect } from 'react';
import Typewriter from './animations/Typewriter';
import StaggeredFadeIn from './animations/StaggeredFadeIn';
import MagneticButton from './animations/MagneticButton';

const Hero = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [showTitle, setShowTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'experience', 'projects'];
            const scrollPosition = window.scrollY + 200; // Add offset for better detection
            
            // Find the current section based on scroll position
            let current = 'about'; // default to first section
            
            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        current = sectionId;
                    }
                }
            });
            
            setActiveSection(current);
        };

        // Set initial state
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNameComplete = () => {
        setShowTitle(true);
        // Automatically show description after title appears
        setTimeout(() => setShowDescription(true), 800);
    };

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">
                        <Typewriter 
                            text="Leonardo Amaro" 
                            speed={80}
                            delay={500}
                            onComplete={handleNameComplete}
                            className="hover:text-white transition-colors duration-300"
                        />
                    </a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    {showTitle && (
                        <span className="transition-opacity duration-700 opacity-100">
                            Front End Developer
                        </span>
                    )}
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-400">
                    {showDescription && (
                        <StaggeredFadeIn delay={300} staggerDelay={50}>
                            I build accessible, user-centric digital experiences for the web with 8 years of expertise in web development.
                        </StaggeredFadeIn>
                    )}
                </p>

                {/* Navigation */}
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        <li>
                            <MagneticButton
                                className={`group flex items-center py-3 bg-transparent border-none cursor-pointer`}
                                onClick={() => scrollToSection('about')}
                                strength={0.2}
                            >
                                <span className={`nav-indicator mr-4 h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === 'about' ? 'w-16 bg-slate-200' : 'w-8'
                                    }`}></span>
                                <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'about' ? 'text-slate-200' : 'text-slate-500'
                                    }`}>
                                    About
                                </span>
                            </MagneticButton>
                        </li>
                        <li>
                            <MagneticButton
                                className={`group flex items-center py-3 bg-transparent border-none cursor-pointer`}
                                onClick={() => scrollToSection('experience')}
                                strength={0.2}
                            >
                                <span className={`nav-indicator mr-4 h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === 'experience' ? 'w-16 bg-slate-200' : 'w-8'
                                    }`}></span>
                                <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'experience' ? 'text-slate-200' : 'text-slate-500'
                                    }`}>
                                    Experience
                                </span>
                            </MagneticButton>
                        </li>
                        <li>
                            <MagneticButton
                                className={`group flex items-center py-3 bg-transparent border-none cursor-pointer`}
                                onClick={() => scrollToSection('projects')}
                                strength={0.2}
                            >
                                <span className={`nav-indicator mr-4 h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === 'projects' ? 'w-16 bg-slate-200' : 'w-8'
                                    }`}></span>
                                <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'projects' ? 'text-slate-200' : 'text-slate-500'
                                    }`}>
                                    Projects
                                </span>
                            </MagneticButton>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Social Links */}
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs shrink-0">
                    <MagneticButton
                        className="block hover:text-slate-200 bg-transparent border-none p-0 transition-colors duration-300"
                        onClick={() => window.open('https://github.com/leonardo-amaro', '_blank')}
                        strength={0.4}
                        aria-label="GitHub (opens in a new tab)"
                        title="GitHub"
                    >
                        <span className="sr-only">GitHub</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-6 w-6 transition-transform duration-300 hover:scale-110"
                            aria-hidden="true"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </MagneticButton>
                </li>
                <li className="mr-5 text-xs shrink-0">
                    <MagneticButton
                        className="block hover:text-slate-200 bg-transparent border-none p-0 transition-colors duration-300"
                        onClick={() => window.open('https://linkedin.com/in/leo-amaro', '_blank')}
                        strength={0.4}
                        aria-label="LinkedIn (opens in a new tab)"
                        title="LinkedIn"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6 transition-transform duration-300 hover:scale-110"
                            aria-hidden="true"
                        >
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                        </svg>
                    </MagneticButton>
                </li>
                <li className="mr-5 text-xs shrink-0">
                    <MagneticButton
                        className="block hover:text-slate-200 bg-transparent border-none p-0 transition-colors duration-300"
                        onClick={() => window.location.href = 'mailto:leonardo@example.com'}
                        strength={0.4}
                        aria-label="Email (opens in a new tab)"
                        title="Email"
                    >
                        <span className="sr-only">Email</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6 transition-transform duration-300 hover:scale-110"
                            aria-hidden="true"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </MagneticButton>
                </li>
            </ul>
        </div>
    );
};

export default Hero;