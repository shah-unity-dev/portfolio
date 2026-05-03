export default function Experience() {

    const experience = [
        {
            role: 'Unity Game Developer',
            company: 'Waywe Gaming',
            logo: './assets/waywe-gaming.jpg',
            linkedin: 'https://www.linkedin.com/company/waywegaming/',
            duration: 'April 2025 — Present',
            achievements: [
                'Shipped multiple casual and hyper-casual games, building systems like daily rewards, spin wheel, and a modular car modification system',
                'Architected a scalable Dialogue Manager using Scriptable Objects and used ElevenLabs for dynamic in-game voiceovers for English & Spanish Language',
                'Implemented minimap with waypoints, Cinemachine virtual cams, and a generic scene transition system using inverse masking',
                'Developed a cloth knitting simulation by parsing pixel art into JSON in-editor and reconstructing patterns at runtime through string and spool animations',
            ]
        },
        {
            role: 'Unity Game Developer',
            company: 'Alyxium Studios',
            logo: './assets/alyxium-studios.png',
            linkedin: null,
            duration: 'July 2023 - March 2025',
            achievements: [
                'Developed online multiplayer game using Photon PUN 2 with live crypto coin prices integration using CoinMarketCap API',
                'Developed multiple mini-games including Hole.io, Hit The Mole, Tic Tac Toe, and Quiz Game etc',
            ]
        },
        {
            role: 'Unity Game Developer',
            company: 'Sabasoft Games',
            logo: './assets/sabasoft-logo.png',
            linkedin: 'https://www.linkedin.com/company/sabasoft/',
            duration: 'Sept 2022 - June 2023',
            achievements: [
                'Developed cozy drag-and-drop item sorting games with polished interaction',
                'Designed and built tutorials and levels for multiple hypercasual games',
                'Shifted games for Amazon',
                'Prototyped 2D soccer game'
            ]
        }
    ];

    return (
        <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">

            <h4 className="text-center mb-2 text-lg zalando-sans-body">My journey</h4>
            <h2 className="text-center text-5xl zalando-sans-heading">Experience</h2>

            <div className="grid grid-cols-auto gap-6 my-10">

                {experience.map((exp) => (
                    <div key={exp.company}
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12">

                        <div className="flex items-center gap-4">
                            {exp.linkedin ? (
                                <a href={exp.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain cursor-pointer hover:opacity-70 transition" />
                                </a>
                            ) : (
                                <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain" />
                            )}
                            <div>
                                <h3 className="text-lg text-gray-700 dark:text-white zalando-sans-midheading">{exp.role}</h3>
                                <p className="text-sm text-gray-500 zalando-sans-body">{exp.company}</p>
                                <p className="text-sm text-gray-500 zalando-sans-body-italic">{exp.duration}</p>
                            </div>
                        </div>

                        <ul className="mt-6 list-disc list-inside text-sm text-gray-600 dark:text-white/80 space-y-2 zalando-sans-body">
                            {exp.achievements.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                    </div>
                ))}

            </div>
        </div>
    );
}