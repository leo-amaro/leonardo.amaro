import { useState, useEffect } from 'react';
import Typewriter from './animations/Typewriter';
import StaggeredFadeIn from './animations/StaggeredFadeIn';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import BlurText from './animations/BlurText';

const Hero = () => {
    const [showTitle, setShowTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const handleNameComplete = () => {
        setShowTitle(true);
        // Automatically show description after title appears
        setTimeout(() => setShowDescription(true), 800);
    };

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div className="min-h-screen lg:min-h-0 flex flex-col lg:block">
            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center lg:justify-start lg:flex-none">
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
                        <BlurText
                            text="Front End Developer"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-2xl mb-8"
                        />
                    )}
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate-400">
                    {showDescription && (
                        <StaggeredFadeIn delay={300} staggerDelay={50}>
                            I build accessible, user-centric digital experiences for the web with 8 years of expertise in web development.
                        </StaggeredFadeIn>
                    )}
                </p>
                
                {/* Navigation Component - Only on desktop */}
                <div className="hidden lg:block">
                    <Navigation />
                </div>
            </div>
            
            {/* Social Links Component - Bottom on mobile, normal position on desktop */}
            <div className="flex-shrink-0 mt-8 pb-20 lg:pb-0 lg:mt-8">
                <SocialLinks />
            </div>
        </div>
    );
};

export default Hero;