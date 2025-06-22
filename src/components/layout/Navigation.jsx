import { useState, useEffect } from 'react';
import MagneticButton from '../ui/animations/MagneticButton';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'experience', 'skills', 'certifications'];
            // Adjust offset to account for header height and give some breathing room
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            
            // Find the current section based on scroll position
            let current = sections[0]; // default to first section
            
            // Iterate in reverse to handle overlapping sections
            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        current = sections[i];
                        break;
                    }
                }
            }
            
            setActiveSection(current);
        };

        // Set initial state
        handleScroll();
        
        // Debounce scroll handler for better performance
        let timeoutId = null;
        const debouncedHandleScroll = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(handleScroll, 100);
        };
        
        window.addEventListener('scroll', debouncedHandleScroll);
        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Slightly reduced offset for better positioning
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navigationItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'certifications', label: 'Education' }
        // { id: 'projects', label: 'Projects' }
    ];

    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-12 w-max">
                {navigationItems.map((item) => (
                    <li key={item.id} className="mb-6">
                        <MagneticButton
                            className="group flex items-center py-2 bg-transparent border-none cursor-pointer"
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