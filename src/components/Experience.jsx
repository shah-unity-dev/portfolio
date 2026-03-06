export default function Experience() {

    const experience = [
        {
            role: 'Unity Game Developer',
            company: 'Waywe Gaming',
            logo: './assets/waywe-gaming.jpg',
            duration: 'April 2025 — Present',
            achievements: [
                'Shipped multiple casual and hyper-casual games from scratch and using pre-made assets',
                'Added Localization for Spanish Language using Unity Localization asset table and string table',
                'Built scale-able Dialogue Manager using Scriptable Objects',
                'Used Eleven Labs for AI Voiceover for dialogues',
                'Added Localization for Spanish Language using Unity Localization asset table and string table',
                'Built daily reward and spin wheel for D7 retention',
                'Developed Car Modification System from scratch including color, bumpers, spoilers and tyre modifications',
                'Made cloth knitting patterns by reading pixel art and storing info into json in editor and reading at runtime to knit'
            ]
        },
        
        {
            role: 'Unity Game Developer',
            company: 'Freelance',
            logo: './assets/linkedin-logo.jpg',
            duration: 'July 2023 - March 2025',
            achievements: [
                'Developed core gameplay mechanics',
                'Developed online multiplayer using Photon Pun 2 and real time crypto prices update',
                'Developed multiple mini-games like Hole.io, Hit The Mole, Tic Tac Toe, Quiz Game etc'
            ]
        },
        {
            role: 'Unity Game Developer',
            company: 'Sabasoft Games',
            logo: './assets/sabasoft-logo.png',
            duration: 'Sept 2022 - June 2023',
            achievements: [
                'Developed cozy items drag and drop sorting games',
                'Made tutorial and levels for multiple hypercasual games',
                'Built teleportation mechanics',
                'Reduced build size and memory usage',
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
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black hover:-translate-y-1 duration-500 dark:hover:bg-darkHover">

                        <div className="flex items-center gap-4">
                            <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain" />
                            <div>
                                <h3 className="text-lg text-gray-700 dark:text-white zalando-sans-midheading">{exp.role}</h3>
                                <p className="text-sm text-gray-500 zalando-sans-body">{exp.company} </p>
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
    )
}
