import Typewriter from '../../ui/animations/Typewriter';
import BlurText from '../../ui/animations/BlurText';
import StaggeredFadeIn from '../../ui/animations/StaggeredFadeIn';

const HeroContent = ({ showTitle, showDescription, handleNameComplete, handleAnimationComplete }) => {
    return (
        <div className="text-center lg:text-left">
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
            <p className="mt-4 max-w-xs lg:max-w-xs mx-auto lg:mx-0 leading-normal text-slate-400">
                {showDescription && (
                    <StaggeredFadeIn delay={300} staggerDelay={50}>
                        I build accessible, user-centric digital experiences for the web with 8 years of expertise in web development.
                    </StaggeredFadeIn>
                )}
            </p>
        </div>
    );
};

export default HeroContent; 