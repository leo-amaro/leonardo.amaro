import { useState, useEffect } from 'react';
import Navigation from '../../layout/Navigation';
import HeroContent from './HeroContent';
import SocialLinks from '../../layout/SocialLinks';
import FadeIn from '../../ui/animations/FadeIn';

const Hero = () => {
    const [showTitle, setShowTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showSocial, setShowSocial] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleNameComplete = () => {
        setShowTitle(true);
        // Automatically show description after title appears
        setTimeout(() => setShowDescription(true), 800);
    };

    useEffect(() => {
        // Show social links after description is shown
        if (showDescription) {
            setTimeout(() => setShowSocial(true), 1000);
        }
    }, [showDescription]);

    useEffect(() => {
        // Show navigation after social links appear
        if (showSocial) {
            setTimeout(() => setShowNav(true), 500);
        }
    }, [showSocial]);

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 flex flex-col relative px-6 lg:px-0">
                <div className="flex-1 flex flex-col justify-center lg:justify-start">
                    <HeroContent 
                        showTitle={showTitle}
                        showDescription={showDescription}
                        handleNameComplete={handleNameComplete}
                        handleAnimationComplete={handleAnimationComplete}
                    />
                    
                    {/* Social Links Component */}
                    {showSocial && (
                        <FadeIn delay={500} duration={0.8}>
                            <div className="py-8 flex justify-center lg:justify-start">
                                <SocialLinks />
                            </div>
                        </FadeIn>
                    )}

                    {/* Navigation Component - Only on desktop */}
                    <div className="hidden lg:block">
                        {showNav && (
                            <FadeIn delay={200} duration={1}>
                                <Navigation />
                            </FadeIn>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero; 