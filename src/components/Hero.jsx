import { motion } from 'framer-motion';
import SplitText from "./SplitText";
import Aurora from './background/aurora';

export default function Hero() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <motion.section
            id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
        >
            {/* Aurora Background (full-width/height) */}
            <div className="absolute inset-0 bg-black/20 z-5">
                <Aurora />
            </div>

            {/* Content (on top of Aurora) */}
            <div className="relative z-10 px-4 flex flex-col items-center">
                <div className="mb-6">
                    <SplitText
                        text="Hi, I'm Leonardo Amaro"
                        className="text-4xl md:text-6xl font-bold text-white block"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>
                <div className="mb-8">
                    <SplitText
                        text="Full-stack developer with 3+ years of experience building scalable web apps."
                        className="text-xl text-gray-200 max-w-2xl mx-auto block"
                        delay={50}
                        duration={0.4}
                        ease="power2.out"
                        splitType="words"
                        from={{ opacity: 0, y: 20 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-50px"
                        textAlign="center"
                    />
                </div>
                <div className="flex gap-4 justify-center">
                    <a
                        href="#contact"
                        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition"
                    >
                        Contact Me
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </motion.section>
    );
}