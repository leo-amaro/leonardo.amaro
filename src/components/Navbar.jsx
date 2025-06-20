import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Name */}
                    <div className="flex-shrink-0">
                        <Link 
                            to="hero" 
                            smooth={true} 
                            className="text-white font-semibold text-lg cursor-pointer hover:text-teal-400 transition-colors duration-200"
                            onClick={closeMobileMenu}
                        >
                            Leonardo Amaro
                        </Link>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <Link 
                                to="hero" 
                                smooth={true} 
                                offset={-64}
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 relative group"
                            >
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-200 group-hover:w-full"></span>
                            </Link>
                            <Link 
                                to="projects" 
                                smooth={true} 
                                offset={-64}
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 relative group"
                            >
                                Projects
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-200 group-hover:w-full"></span>
                            </Link>
                            <Link 
                                to="experience" 
                                smooth={true} 
                                offset={-64}
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 relative group"
                            >
                                Experience
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-200 group-hover:w-full"></span>
                            </Link>
                            
                            {/* CTA Button */}
                            <Link 
                                to="contact" 
                                smooth={true} 
                                offset={-64}
                                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            className="text-gray-300 hover:text-white p-2 transition-colors duration-200"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            <svg 
                                className={`h-6 w-6 transform transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="px-2 pt-2 pb-4 space-y-2 bg-gray-900/95 backdrop-blur-md rounded-b-lg border-t border-gray-800/50">
                        <Link 
                            to="hero" 
                            smooth={true} 
                            offset={-64}
                            className="block text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg text-base font-medium cursor-pointer transition-all duration-200"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        <Link 
                            to="projects" 
                            smooth={true} 
                            offset={-64}
                            className="block text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg text-base font-medium cursor-pointer transition-all duration-200"
                            onClick={closeMobileMenu}
                        >
                            Projects
                        </Link>
                        <Link 
                            to="experience" 
                            smooth={true} 
                            offset={-64}
                            className="block text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg text-base font-medium cursor-pointer transition-all duration-200"
                            onClick={closeMobileMenu}
                        >
                            Experience
                        </Link>
                        
                        {/* Mobile CTA Button */}
                        <Link 
                            to="contact" 
                            smooth={true} 
                            offset={-64}
                            className="block bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg text-base font-medium cursor-pointer transition-all duration-200 mt-4 text-center"
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}