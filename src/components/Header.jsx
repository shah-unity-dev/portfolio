export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="./assets/profile-img.png" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I&apos;m ShahJahan
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Unity Game Developer based in Lahore.</h1>
            <p className="max-w-2xl mx-auto font-Ovo">I'm unity game developer from Lahore, with 3 years of experience in developing casual, hyper, hybrid and puzzle games I've shipped 15+ titles.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
    <a href="https://wa.me/923220260208?text=Assalam-o-Alaikum%20ShahJahan%2C%20I%20came%20from%20your%20portfilio%20website"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-2.5 border rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center gap-2">
        <img src="./assets/whatsapp-icon.png" alt="WhatsApp" className="w-5" />
        Contact me
    </a>

    <a href="./assets/dev-icon.png" download
        className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
        my resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
    </a>
</div>

        </div>
    )
}