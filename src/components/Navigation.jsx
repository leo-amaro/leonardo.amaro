import { useState, useEffect } from 'react';
import MagneticButton from './animations/MagneticButton';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('about');

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

    const navigationItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        // { id: 'projects', label: 'Projects' }
    ];

    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {navigationItems.map((item) => (
                    <li key={item.id}>
                        <MagneticButton
                            className="group flex items-center py-3 bg-transparent border-none cursor-pointer"
                            onClick={() => scrollToSection(item.id)}
                            strength={0.2}
                        >
                            <span 
                                className={`nav-indicator mr-4 h-px bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                                    activeSection === item.id ? 'w-16 bg-slate-200' : 'w-8'
                                }`}
                            />
                            <span 
                                className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                                    activeSection === item.id ? 'text-slate-200' : 'text-slate-500'
                                }`}
                            >
                                {item.label}
                            </span>
                        </MagneticButton>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation; 