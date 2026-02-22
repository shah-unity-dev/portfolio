export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="./assets/profile-img.png" alt="" className="max-md:mt-12 rounded-full w-32" />
            <h3 className="flex items-end gap-2 mb-3">
           <span className="zalando-sans-subheading text-xl md:text-2xl">Hi! I&apos;m</span>
           <span className="zalando-sans-heading text-xl md:text-2xl"> ShahJahan</span>
         <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1 origin-bottom animate-wave" />
</h3>

            <h1 className="text-3xl sm:text-6xl lg:text-[66px] zalando-sans-body">Unity Game Developer based in Lahore.</h1>
            <p className="max-w-2xl mx-auto zalando-sans-body">I'm Unity Game Developer from Lahore with 3 years of experience in developing casual, hyper, hybrid and puzzle games. I've shipped 15+ titles.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
    <a href="https://wa.me/923220260208?text=Assalam-o-Alaikum%20ShahJahan%2C%20I%20came%20from%20your%20portfolio%20website"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-2.5 border rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center gap-2 zalando-sans-midheading">
        <img src="./assets/whatsapp-icon.png" alt="WhatsApp" className="w-5" />
        Contact Me
    </a>

    <a href="./assets/dev-icon.png" download
        className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white  zalando-sans-midheading">
        My Resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
    </a>
</div>

        </div>
    )
}