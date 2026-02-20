export default function Experience() {

    const experience = [
        {
            role: 'Unity Game Developer',
            company: 'Waywe Gaming',
            logo: './assets/waywe-gaming.jpg',
            duration: 'April 2025 — Present',
            achievements: [
                'Developed multiple casual & hybrid mobile games from scratch',
                'Built scalable gameplay systems using SOLID & OOP',
                'Polished existing games',
                'Optimized performance for low-end Android devices'
            ]
        },
        
        {
            role: 'Unity Game Developer',
            company: 'Freelance',
            logo: './assets/linkedin-logo.jpg',
            duration: 'Sept 2022 - March 2025',
            achievements: [
                'Developed core gameplay mechanics',
                'Implemented object pooling for performance',
                'Worked with Git in a team environment',
                'Reduced build size and memory usage'
            ]
        },
        {
            role: 'Unity Game Developer',
            company: 'Sabasoft Games',
            logo: './assets/sabasoft-logo.png',
            duration: 'Sept 2022 - March 2025',
            achievements: [
                'Developed core gameplay mechanics',
                'Implemented object pooling for performance',
                'Worked with Git in a team environment',
                'Reduced build size and memory usage'
            ]
        }
    ];

    return (
        <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">

            <h4 className="text-center mb-2 text-lg font-Ovo">My journey</h4>
            <h2 className="text-center text-5xl font-Ovo">Experience</h2>

            <div className="grid grid-cols-auto gap-6 my-10">

                {experience.map((exp) => (
                    <div key={exp.company}
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black hover:-translate-y-1 duration-500 dark:hover:bg-darkHover">

                        <div className="flex items-center gap-4">
                            <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain" />
                            <div>
                                <h3 className="text-lg text-gray-700 dark:text-white">{exp.role}</h3>
                                <p className="text-sm text-gray-500">{exp.company}</p>
                                <p className="text-sm text-gray-500">{exp.duration}</p>
                            </div>
                        </div>

                        <ul className="mt-6 list-disc list-inside text-sm text-gray-600 dark:text-white/80 space-y-2">
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
