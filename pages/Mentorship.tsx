import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Terminal, Triangle, Quote, ArrowRight } from 'lucide-react';

export const Mentorship: React.FC = () => {
    const navigate = useNavigate();

    const handleRequestClick = () => {
        window.open('http://wa.me/447441342347', '_blank');
    };

    return (
        <div className="flex w-full flex-col items-center">
            {/* Hero */}
            <section className="relative w-full max-w-[1400px] border-x border-white/5 px-6 pb-12 pt-24 md:pb-24 md:pt-40">
                <div className="absolute right-0 top-0 hidden select-none p-8 text-primary/10 lg:block">
                     <span className="text-[12rem] font-black leading-none tracking-tighter">02</span>
                </div>
                <div className="relative z-10 max-w-4xl">
                     <div className="mb-10 inline-flex items-center gap-3 border border-primary/20 px-4 py-1.5">
                         <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Knowledge Transfer</span>
                     </div>
                     <h1 className="mb-10 text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-[100px]">
                        Level up your <span className="text-primary">internal</span> delivery.
                     </h1>
                     <p className="max-w-2xl text-xl font-light leading-relaxed text-white/60 md:text-2xl">
                        We don't just deliver code; we share the practice. Bridging the gap between senior design intent and engineering execution.
                     </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="w-full border-y border-white/10 bg-[#050505]">
                <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-3">
                    {[
                        { icon: <Users size={32} className="text-primary"/>, title: "Team Workshops", desc: "Hands-on sessions tailored to your specific stack, focusing on bridging the handoff gap through technical design systems.", tag: "Collaborative Training" },
                        { icon: <Terminal size={32} className="text-primary"/>, title: "Codebase Walkthroughs", desc: "Deep-dive sessions into delivered Flowcode architectures, ensuring your engineers fully grasp the logic and structure.", tag: "Architectural Clarity" },
                        { icon: <Triangle size={32} className="text-primary"/>, title: "Architecture Consulting", desc: "Strategic advice on building scalable, responsive frontend systems that honor design intent at the foundation.", tag: "Long-term Strategy" }
                    ].map((item, idx) => (
                        <div key={idx} className="group cursor-default border-b border-white/10 p-12 transition-all hover:bg-primary/5 md:border-b-0 md:border-r last:border-0 md:p-16">
                            <div className="flex h-full flex-col">
                                <div className="mb-12">{item.icon}</div>
                                <h3 className="mb-6 text-2xl font-black uppercase tracking-tight text-white">{item.title}</h3>
                                <p className="mb-10 leading-relaxed text-white/40">{item.desc}</p>
                                <div className="mt-auto border-t border-white/5 pt-6 group-hover:border-primary/20">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item.tag}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

             {/* Testimonial */}
             <section className="flex w-full max-w-[1400px] flex-col items-center px-6 py-24 md:py-40">
                <div className="relative w-full max-w-4xl overflow-hidden border border-white/10 bg-[#080808] p-12 md:p-24">
                    <div className="absolute left-0 top-0 h-full w-2 bg-primary"></div>
                    <Quote className="absolute -bottom-4 -right-4 text-8xl text-primary/20" />
                    <div className="relative z-10">
                        <h4 className="mb-12 text-3xl font-bold italic leading-[1.15] text-white md:text-5xl">
                            "The knowledge transfer sessions were more valuable than the code itself. Our team now thinks in systems, not just screens."
                        </h4>
                        <div className="flex items-center gap-6">
                            <div className="h-px w-12 bg-primary"></div>
                            <div>
                                <p className="text-sm font-black uppercase tracking-widest text-white">Creative Director</p>
                                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Leading Design Studio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full bg-primary py-24 text-black md:py-32">
                 <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                            Empower your <br/>internal teams.
                        </h2>
                        <p className="max-w-md text-xl font-medium text-black/80">
                             Schedule a walkthrough to see how we can integrate our design-to-code practice into your existing workflow.
                        </p>
                    </div>
                    <div className="flex flex-col items-start lg:items-end">
                        <button 
                            onClick={handleRequestClick}
                            className="w-full bg-black px-16 py-6 text-sm font-black uppercase tracking-[0.2em] text-primary transition-all hover:bg-white hover:text-black md:w-auto"
                        >
                            Book a Walkthrough
                        </button>
                        <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-black/50">Available for Q3–Q4 2024 engagements</p>
                    </div>
