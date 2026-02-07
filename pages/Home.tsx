import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, RefreshCw, Zap, ShieldCheck, ArrowRight, Brain, Cpu } from 'lucide-react';

export const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleRequestClick = () => {
        window.open('http://wa.me/447441342347', '_blank');
    };

    return (
        <div className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-technical-grid bg-technical py-32 text-center md:py-48">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
                
                <div className="relative z-10 flex max-w-[1200px] flex-col items-center px-6">
                    <div className="mb-8 inline-block border border-primary/30 bg-primary-dim px-4 py-1.5 backdrop-blur-sm">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                            Delivery Practice
                        </span>
                    </div>
                    
                    <h1 className="mb-8 text-7xl font-black uppercase leading-none tracking-[-0.05em] text-white md:text-[140px]">
                        Flowcode
                    </h1>
                    
                    <div className="max-w-3xl">
                        <h2 className="mb-6 text-xl font-bold leading-tight text-primary md:text-3xl">
                            Dev-ready UI foundations. Delivered.
                        </h2>
                        <p className="mx-auto mb-12 max-w-xl text-base font-normal leading-relaxed text-white/50 md:text-lg">
                            We turn Figma files into clean, structured React code. Skip the messy handoff and move straight to integration.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button 
                            onClick={handleRequestClick}
                            className="flex h-14 min-w-[240px] cursor-pointer items-center justify-center rounded-sm bg-primary px-8 text-sm font-black uppercase tracking-widest text-black transition-all hover:bg-white"
                        >
                            Start a Sprint
                        </button>
                        <button 
                            onClick={() => navigate('/process')}
                            className="flex h-14 min-w-[240px] cursor-pointer items-center justify-center rounded-sm border border-white/20 px-8 text-sm font-black uppercase tracking-widest text-white transition-all hover:border-primary hover:text-primary"
                        >
                            See Process
                        </button>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="w-full border-y border-white/5 bg-surface px-6 py-24 md:py-32">
                <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-primary">The Bottleneck</h2>
                        <h3 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                            Design is ready. Dev is waiting. The gap in between is costing you.
                        </h3>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        {[
                            {
                                icon: <Layers className="text-primary" size={24} />,
                                title: "Figma Isn't Code",
                                description: "Images don't show behavior. Logic and edge cases get missed in static files."
                            },
                            {
                                icon: <RefreshCw className="text-primary" size={24} />,
                                title: "Wasted Cycles",
                                description: "Engineers shouldn't waste time rebuilding UI. They should focus on business logic."
                            },
                            {
                                icon: <Zap className="text-primary" size={24} />,
                                title: "Lost Details",
                                description: "Animations and responsiveness often disappear during translation."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-4 border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-primary/30 hover:bg-white/[0.04]">
                                <div className="mb-2">{item.icon}</div>
                                <h4 className="text-lg font-bold uppercase tracking-wider text-white">{item.title}</h4>
                                <p className="text-sm leading-relaxed text-white/40">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="w-full max-w-[1400px] px-6 py-24 md:py-40">
                <div className="mb-20 flex flex-col items-center text-center">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
                        We build the <span className="text-primary">Frontend Foundation</span>.
                    </h2>
                    <div className="mb-8 h-px w-24 bg-primary"></div>
                    <div className="max-w-2xl rounded-sm border border-primary/20 bg-primary-dim p-8">
                        <div className="mb-4 flex items-center justify-center gap-2">
                            <ShieldCheck className="text-primary" size={16} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Technical Note</span>
                        </div>
                        <p className="text-base italic leading-relaxed text-white/80">
                            "We deliver the UI architecture and code. Your engineering team handles the backend connection and business logic."
                        </p>
                    </div>
                </div>

                {/* Deliverables Grid */}
                <div className="grid grid-cols-1 border border-white/10 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { id: "01", title: "Structured Codebase", desc: "Modular React & Tailwind. Clean, readable, and ready to scale." },
                        { id: "02", title: "Component Library", desc: "Atomic, accessible components. No hard-coded values." },
                        { id: "03", title: "Responsive Logic", desc: "Adapts perfectly to every screen size. Mobile, tablet, desktop." },
                        { id: "04", title: "Type-Safe Props", desc: "Data structures defined. Ready for your API integration." },
                        { id: "05", title: "Live Prototype", desc: "A functional browser build. Test interactions before you integrate." },
                        { id: "06", title: "Handoff Docs", desc: "Clear implementation guides for your engineering team." },
                    ].map((item) => (
                        <div key={item.id} className="group border border-white/5 p-10 transition-colors hover:bg-white/[0.02]">
                            <span className="mb-6 block font-mono text-xs text-white/20 transition-colors group-hover:text-primary">{item.id} //</span>
                            <h4 className="mb-4 text-xl font-bold uppercase text-white">{item.title}</h4>
                            <p className="text-sm leading-relaxed text-white/40">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

             {/* Workflow Section */}
             <section className="w-full border-y border-white/5 bg-surface py-24 md:py-40" id="process">
                <div className="mx-auto max-w-[1200px] px-6">
                    <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
                        <div>
                            <h2 className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-primary">The Process</h2>
                            <h3 className="text-5xl font-black uppercase leading-none text-white md:text-6xl">One Sprint.</h3>
                        </div>
                        <p className="max-w-sm text-right text-white/40">From design file to Git repo in two weeks.</p>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        {[
                            { id: "01", title: "Audit", desc: "We check your Figma files for structure and logic.", active: true },
                            { id: "02", title: "Architecture", desc: "We define the CSS strategy and component hierarchy." },
                            { id: "03", title: "Build", desc: "We code the core interface and interactions." },
                            { id: "04", title: "Handoff", desc: "We transfer the repo and walk your team through it." },
                        ].map((step) => (
                            <div key={step.id} className={`flex flex-col gap-8 border-l-2 p-12 transition-all md:flex-row ${step.active ? 'border-primary bg-white/[0.02]' : 'border-white/10 hover:bg-white/[0.01]'}`}>
                                <div className={`shrink-0 font-mono text-xl ${step.active ? 'text-primary' : 'text-white/20'}`}>{step.id}.</div>
                                <div className="grow">
                                    <h4 className="mb-4 text-2xl font-bold uppercase tracking-tight text-white">{step.title}</h4>
                                    <p className="max-w-2xl leading-relaxed text-white/50">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mentorship Section */}
            <section className="w-full max-w-[1200px] px-6 py-24 md:py-40">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="flex flex-col items-start border border-white/10 bg-black p-12">
                        <Brain className="mb-6 text-4xl text-primary" size={48} strokeWidth={1} />
                        <h3 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white">Knowledge Transfer</h3>
                        <p className="mb-8 leading-relaxed text-white/40">
                            We teach your team our systems. They learn how to maintain and scale the code we deliver.
                        </p>
                        <button 
                            onClick={() => navigate('/mentorship')}
                            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary transition-all hover:gap-4"
                        >
                            Learn about mentorship <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className="flex flex-col items-start border border-white/10 bg-black p-12">
                         <Cpu className="mb-6 text-4xl text-primary" size={48} strokeWidth={1} />
                        <h3 className="mb-6 text-3xl font-bold uppercase tracking-tight text-white">Efficiency</h3>
                        <p className="mb-8 leading-relaxed text-white/40">
                            We automate the boilerplate. Our senior engineers focus on the architecture and the polish.
                        </p>
                        <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary transition-all hover:gap-4">
                            Our philosophy <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="w-full bg-primary py-24 text-center text-black md:py-32">
                <div className="mx-auto max-w-3xl px-6">
                    <h2 className="mb-8 text-4xl font-black uppercase leading-none tracking-tighter md:text-6xl">
                        Stop Rebuilding. <br/>Start Shipping.
                    </h2>
                    <p className="mb-12 text-lg font-medium text-black/70">
                        Get a production-ready foundation in your next sprint.
                    </p>
                    <button 
                        onClick={handleRequestClick}
                        className="bg-black px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-primary transition-all hover:bg-white hover:text-black hover:scale-105"
                    >
                        Start Engagement
                    </button>
                </div>
            </section>
        </div>
    );
};