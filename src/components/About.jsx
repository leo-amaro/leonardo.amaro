import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>
            <div>
                <p className="mb-4">
                    I'm a developer passionate about crafting accessible, user-centric interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                </p>
                <p className="mb-4">
                    With 8 years of experience in web development, I've specialized in enterprise-scale projects for major global brands. I spent 5 years as a web publisher focused on content population and migration workflows, then advanced to 3 years as an AEM developer, leading frontend implementations for complex business requirements.
                </p>
                <p className="mb-4">
                    I've had the opportunity to work on high-profile projects across diverse industries — from international banking and automotive platforms to insurance and financial services, and telecommunications. My expertise spans <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.aia.com.ph/en" target="_blank" rel="noreferrer noopener" aria-label="AIA Philippines (opens in a new tab)">AIA Philippines</a>, <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.bpi-aia.com.ph/en" target="_blank" rel="noreferrer noopener" aria-label="BPI AIA (opens in a new tab)">BPI AIA</a>, <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.hlb.com.my/en/personal-banking/home.html" target="_blank" rel="noreferrer noopener" aria-label="Hong Leong Bank Malaysia (opens in a new tab)">Hong Leong Bank Malaysia</a>, <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.ford.com.au/" target="_blank" rel="noreferrer noopener" aria-label="Ford Australia (opens in a new tab)">Ford Australia</a>, and <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.globe.com.ph/business" target="_blank" rel="noreferrer noopener" aria-label="Globe Business Philippines (opens in a new tab)">Globe Business Philippines</a>.
                </p>
                <p>
                    When I'm not at the computer, I enjoy spending quality time with my family, playing basketball, reading about new technologies in both software and hardware, and learning new tech stacks to stay current with the evolving development landscape.
                </p>
            </div>
        </section>
    );
} 