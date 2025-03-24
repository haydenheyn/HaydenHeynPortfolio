import { RevealOnScroll } from "../RevealOnScroll";



export const About = () => {


    const backendSkills = ["Spring", "Flask", "Postgres"];
    const codingLanguages = ["Java", "Python", "C++", "Embedded C"];
    const frontendSkills = ["React", "HTML","CSS","TailwindCSS"];
    const tools = ["Git", "Docker", "Postman", "VSCode"]

    return(
        <section id="about" 
        className="min-h-screen flex item-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500/80 to-white-500/20 bg-clip-text text-transparent leading-tight text-center" >
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        "I am passionate about building software applications that tackle real-world challenges. I thrive on innovation and enjoy continually learning to sharpen my skills and stay ahead in the ever-evolving tech landscape."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-0.5 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill) => (
                                    <span className="bg-green-500/20 text-white py-1 px-2 rounded-full text-sm transition hover:bg-[rgba(2,94,14,0.9)] hover:shadow-[0_0_15px_rgba(2,94,14,0.8)]">
                                    {skill}
                                  </span>
                                  
                                ))}
                            </div>

                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-0.5 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Coding Languages </h3>
                            <div className="flex flex-wrap gap-2">
                                {codingLanguages.map((skill) => (
                                    <span className="bg-green-500/20 text-white py-1 px-2 rounded-full text-sm transition hover:bg-[rgba(2,94,14,0.9)] hover:shadow-[0_0_15px_rgba(2,94,14,0.8)]">
                                    {skill}
                                  </span>
                                  
                                ))}
                            </div>

                        </div>

                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-0.5 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill) => (
                                    <span className="bg-green-500/20 text-white py-1 px-2 rounded-full text-sm transition hover:bg-[rgba(2,94,14,0.9)] hover:shadow-[0_0_15px_rgba(2,94,14,0.8)]">
                                    {skill}
                                  </span>
                                  
                                ))}
                            </div>

                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-0.5 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Tools </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill) => (
                                    <span className="bg-green-500/20 text-white py-1 px-2 rounded-full text-sm transition hover:bg-[rgba(2,94,14,0.9)] hover:shadow-[0_0_15px_rgba(2,94,14,0.8)]">
                                    {skill}
                                  </span>
                                  
                                ))}
                            </div>

                        </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                 
                   
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.S. in Computer Engineering</strong> - Saginaw Valley State Univirsity (2025)
                                </li>
                                <li >
                                    Relavant Coursework: Data Structures, Algorithms, Embedded Systems, Computer Networks
                                </li>

                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="list-disc list-inside text-gray-300 space-y-2">
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                            <strong>Advance Engineering Co-op</strong> - Nexteer Automotive (2022-Present)
                                            <li>Develop mini dyno system in LabVIEW for motor tests, ensuring precise data via CAN FD, XCP</li>
                                            <li>Enhance system reliability through rigorous testing, achieving measurable performance improvements</li>
                                            <li>Collaborate with cross-functional teams to troubleshoot and resolve issues</li>
                                        </ul>
                                        
                                    </h4>
                                </div>

                            </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>

        </section>
    )


}