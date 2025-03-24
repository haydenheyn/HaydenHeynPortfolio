import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex item-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4"> 
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-800/80 to-white bg-clip-text text-transparent leading-tight text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-green-500/20 hover:shadow-[0_0_15px_rgba(2,94,14,0.8)]">
                    <h3 className="text-xl font-bold mb-2">IoT-Based Aquaponics Monitoring System for Real-Time Analysis</h3>
                    <p className="text-green-500/70 mb-4">Monitors various environmental and water conditions to provide a remote method for assessing the health of an aquaponics system.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Rapsberry PI", "ThingSpeak", "Arduino"].map((skill) => (

                            <span className="bg-green-500/20 text-white py-1 px-2 rounded-full text-sm transition-all hover:bg-[rgba(2,94,14,0.9)] hover:shadow-[0_0_15px_rgba(2,94,14,0.8)] gap-2">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <a href="#" className="text-green-500/80 hover:text-green-300/80"> </a>
                    </div>

                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-green-500/20 hover:shadow-[0_0_15px_rgba(2,94,14,0.8)]">
                    <h3 className="text-xl font-bold mb-2">Mini Dyno</h3>
                    <p className="text-green-500/70 mb-4">Powerpacks, which consist of a motor and circuit card assembly, undergo several tests to verify functionality. These tests require spinning the powerpacks while measuring key parameters. The mini dyno provides a user-friendly dynamometer testing solution to facilitate this process.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Rapsberry PI", "ThingSpeak", "Arduino"].map((skill) => (

                            <span className="bg-green-500/20 text-white py-1 px-2 rounded-full text-sm transition-all hover:bg-[rgba(2,94,14,0.9)] hover:shadow-[0_0_15px_rgba(2,94,14,0.8)] gap-2">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <a href="#" className="text-green-500/80 hover:text-green-300/80"></a>
                    </div>

                </div>



            </div>

        </div>
        </RevealOnScroll>
    </section>
}