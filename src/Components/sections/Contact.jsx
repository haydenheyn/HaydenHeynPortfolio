import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com';
import { useState } from 'react';



export const Contact = () => {

    const [formData,setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

   
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
          )
            .then((result) => {
                console.log(result.text);
                alert("Message Sent Successfully");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (error) => {
                alert("Oops! Something went wrong");
            });
        e.target.reset();
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-5">
            <RevealOnScroll>
                <div className="px-4 w-full md:w-14/17 lg:w-14/17">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-500/60 to-white bg-clip-text text-transparent leading-tight text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="relative space-y-2">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                
                                className="w-full bg-white/5 border border-white/ rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email} 
                                
                                className="w-full bg-white/5 border border-white/ rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                
                                className="w-full bg-white/5 border border-white/ rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                                placeholder="your message..."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>
                        <button type="submit" className="w-full bg-green-500/60 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(2,94,14,0.8)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};