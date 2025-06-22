import Typewriter from './Typewriter';
import BlurText from './BlurText';

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
                    <Typewriter
                        text="Front End Developer"
                        speed={100}
                        delay={100}
                        onComplete={handleAnimationComplete}
                        className="hover:text-white transition-colors duration-300 text-2xl mb-8"
                    />
                )}
            </h2>
            <p className="mt-4 max-w-xs lg:max-w-xs mx-auto lg:mx-0 leading-normal text-slate-400">
                {showDescription && (
                    <BlurText
                        text="I build accessible, user-centric digital experiences for the web with 8 years of expertise in web development."
                        delay={600}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-xl mb-8"
                    />
                )}
            </p>
        </div>
    );
};

export default HeroContent; 