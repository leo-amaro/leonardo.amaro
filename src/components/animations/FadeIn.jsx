import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, duration = 0.5, className = '' }) => {
    // Convert delay from milliseconds to seconds if it's a large number
    const delayInSeconds = delay > 100 ? delay / 1000 : delay;
    
    const fadeInVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 100,
                duration: duration,
                delay: delayInSeconds
            }
        }
    };

    return (
        <motion.div
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn; 