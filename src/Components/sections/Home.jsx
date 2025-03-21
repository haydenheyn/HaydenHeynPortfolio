import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return( 
        <section 
            id="home" 
            className="min-h-screen flex justify-center items-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500/60 to-white bg-clip-text text-transparent leading-tight">
                   I'm Hayden Heyn
                </h1>
                
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    And I have a passion coding
                </p>
                <div className="flex justify-center space-x-4">
                <a href="#projects" 
                className="bg-green-500/60 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(2,94,14,0.8)]">
                View Projects
                </a>
                <a href="#contact" 
                className="border border-green-500/60 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-500/60 hover:shadow-[0_0_15px_rgba(2,94,14,0.8)]">
                Contact Me
                </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}