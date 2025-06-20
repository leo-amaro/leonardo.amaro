// Example: Skills.jsx
import { FaReact, FaJava, FaFigma } from 'react-icons/fa';
import { SiAdobephotoshop, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
    return (
        <section className="py-12 bg-gray-800">
            <h2 className="text-3xl text-center text-white mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                {/* Frontend */}
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl text-white mb-4">Frontend</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-300"><FaReact /> React</li>
                        <li className="flex items-center gap-2 text-gray-300"><SiTailwindcss /> Tailwind CSS</li>
                        <li className="flex items-center gap-2 text-gray-300">JavaScript (ES6+)</li>
                    </ul>
                </div>
                {/* AEM */}
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl text-white mb-4">Adobe Experience Manager</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-300"><FaJava /> AEM Components (HTL/Java)</li>
                        <li className="text-gray-300">Template Development</li>
                    </ul>
                </div>
                {/* Tools */}
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl text-white mb-4">Tools</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-gray-300"><FaFigma /> Figma</li>
                        <li className="text-gray-300">Chrome DevTools</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}