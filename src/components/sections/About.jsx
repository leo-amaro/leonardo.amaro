import ScrollReveal from '../ui/animations/ScrollReveal';
import AnimatedLink from '../ui/animations/AnimatedLink';
import SectionHeader from '../common/SectionHeader';

export default function About() {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            {/* Mobile header */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>

            {/* Scroll-triggered Section Header */}
            <SectionHeader 
                title="About Me"
                subtitle="Crafting digital experiences with passion and precision"
                className="lg:block"
            />

            <div className="max-w-3xl">
                <ScrollReveal delay={300} className="mb-4">
                    <p className="text-slate-300 leading-relaxed">
                        I'm a developer passionate about crafting accessible, user-centric interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={500} className="mb-4">
                    <p className="text-slate-300 leading-relaxed">
                        With <span className="text-teal-300 font-medium">8 years of experience</span> in web development, I've specialized in <span className="text-slate-200 font-medium">enterprise-scale projects</span> for major global brands. I spent 5 years as a web publisher focused on content population and migration workflows, then advanced to 3 years as an AEM developer, leading frontend implementations for complex business requirements.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={700} className="mb-4">
                    <p className="text-slate-300 leading-relaxed">
                        I've had the opportunity to work on <span className="text-teal-300 font-medium">high-profile projects</span> across diverse industries — from international banking and automotive platforms to insurance and financial services, and telecommunications. My expertise spans{' '}
                        <AnimatedLink 
                            href="https://www.aia.com.ph/en"
                            ariaLabel="AIA Philippines (opens in a new tab)"
                        >
                            AIA Philippines
                        </AnimatedLink>
                        ,{' '}
                        <AnimatedLink 
                            href="https://www.bpi-aia.com.ph/en"
                            ariaLabel="BPI AIA (opens in a new tab)"
                        >
                            BPI AIA
                        </AnimatedLink>
                        ,{' '}
                        <AnimatedLink 
                            href="https://www.hlb.com.my/en/personal-banking/home.html"
                            ariaLabel="Hong Leong Bank Malaysia (opens in a new tab)"
                        >
                            Hong Leong Bank Malaysia
                        </AnimatedLink>
                        ,{' '}
                        <AnimatedLink 
                            href="https://www.ford.com.au/"
                            ariaLabel="Ford Australia (opens in a new tab)"
                        >
                            Ford Australia
                        </AnimatedLink>
                        , and{' '}
                        <AnimatedLink 
                            href="https://www.globe.com.ph/business"
                            ariaLabel="Globe Business Philippines (opens in a new tab)"
                        >
                            Globe Business Philippines
                        </AnimatedLink>
                        .
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={900}>
                    <p className="text-slate-300 leading-relaxed">
                        When I'm not at the computer, I enjoy spending quality time with my family, playing basketball, reading about new technologies in both software and hardware, and learning new tech stacks to stay current with the evolving development landscape.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
} 