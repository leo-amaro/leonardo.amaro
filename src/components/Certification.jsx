// Example: Certifications.jsx
export default function Certifications() {
    const certs = [
        "Professional Scrum Master I",
        "HTML, CSS, and JavaScript for Web Developers",
        "Vue.js Web App Development",
    ];

    return (
        <section className="py-12 bg-gray-900">
            <h2 className="text-3xl text-center text-white mb-8">Certifications</h2>
            <ul className="max-w-md mx-auto text-gray-300 space-y-2 list-disc list-inside">
                {certs.map((cert, index) => (
                    <li key={index}>{cert}</li>
                ))}
            </ul>
        </section>
    );
}