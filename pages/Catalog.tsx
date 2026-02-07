import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Book, Terminal, Settings, Database, ArrowRight } from 'lucide-react';

export const Catalog: React.FC = () => {
    const navigate = useNavigate();

    const items = [
        {
            id: "Item_01",
            icon: <Package size={40} className="text-primary" strokeWidth={1} />,
            title: "Core UI Package",
            desc: "Modular, styled React components or clean HTML/CSS files built to your design specifications. Pure architectural intent.",
            tech: "TSX / Tailwind / PostCSS / Atomic Structure"
        },
        {
            id: "Item_02",
            icon: <Book size={40} className="text-primary" strokeWidth={1} />,
            title: "Style Dictionary",
            desc: "Centralized design tokens governing colors, spacing, typography, and elevation. One source of truth for the entire product.",
            tech: "JSON Tokens / W3C Draft Spec / Style Dictionary Build"
        },
        {
            id: "Item_03",
            icon: <LayoutTemplate size={40} className="text-primary" strokeWidth={1} />,
            title: "Storybook Environment",
            desc: "A live sandbox environment to test, document, and interact with your UI components in isolation from the main app logic.",
            tech: "Storybook 8.0 / Interaction Testing / Documentation Addons"
        },
        {
            id: "Item_04",
            icon: <Terminal size={40} className="text-primary" strokeWidth={1} />,
            title: "Documentation",
            desc: "Comprehensive technical notes detailing architecture, implementation guidelines, and component usage instructions for devs.",
            tech: "Markdown / TSDoc / Architecture Diagrams"
        },
        {
            id: "Item_05",
            icon: <Database size={40} className="text-primary" strokeWidth={1} />,
            title: "State Foundations",
            desc: "Early-stage data structures and hook definitions prepared for API integration. We define how data flows through the UI.",
            tech: "Zustand or Context API / Interface Defs"
        }
    ];

    return (
        <div className="flex w-full flex-col items-center">
            {/* Header */}
            <section className="w-full border-b border-white/5 bg-technical-grid bg-technical px-6 py-20 md:py-32">
                <div className="mx-auto max-w-[1400px]">
                    <div className="mb-20">
                         <div className="mb-8 inline-flex items-center gap-2 border border-primary/30 px-3 py-1">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Deliverables Catalog</span>
                         </div>
                         <h1 className="mb-6 text-6xl font-black uppercase leading-none tracking-tighter text-white md:text-8xl">
                            The <span className="text-primary">Artifacts</span> of <br/>Execution.
                         </h1>
                         <p className="max-w-2xl text-lg font-light leading-relaxed text-white/40 md:text-xl">
                            A Flowcode sprint results in a production-ready foundation. No static handoffs, no guesswork—just engineering-grade assets ready for your stack.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3 gap-px">
                        {items.map((item) => (
                            <div key={item.id} className="glass-panel group flex min-h-[400px] flex-col p-10 transition-all duration-300 hover:border-primary hover:bg-primary/5">
                                <div className="mb-12 flex items-start justify-between">
                                    {item.icon}
                                    <span className="font-mono text-xs uppercase tracking-widest text-white/20">{item.id}</span>
                                </div>
                                <div className="mt-auto">
                                    <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-primary">{item.title}</h3>
                                    <p className="mb-8 text-sm leading-relaxed text-white/50">{item.desc}</p>
                                    <div className="border-t border-white/10 pt-6">
                                        <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-primary">Tech Spec:</span>
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">{item.tech}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                         <div className="hidden min-h-[400px] flex-col items-center justify-center border border-dashed border-white/10 p-10 lg:flex">
                            <div className="select-none text-[80px] font-black tracking-tighter text-white/5">BEYOND</div>
                         </div>
                    </div>
                </div>
            </section>

             <section className="w-full border-b border-white/5 bg-[#050505] px-6 py-20">
                <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-12 md:flex-row">
                    <div className="max-w-xl">
                        <h2 className="mb-6 text-[10px] font-black italic uppercase tracking-[0.4em] text-white/20">Engineering Standards</h2>
                        <p className="text-3xl font-bold uppercase leading-tight tracking-tight text-white">
                            We don't just ship pixels. We ship the <span className="text-primary">scaffolding</span> of your next major release.
                        </p>
                    </div>
                    <div className="max-w-md border border-primary/20 bg-primary/5 p-8">
                         <div className="mb-4 flex items-center gap-3">
                             <Settings className="text-primary" size={16} />
                             <span className="text-[10px] font-black uppercase tracking-widest text-primary">Trust Line</span>
                         </div>
                         <p className="text-xs italic leading-relaxed text-white/60">
                            "Flowcode deliverables represent architectural intent. While code is production-ready, final business logic, security layers, and deployment pipeline integration remain with your internal engineering team."
                         </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Simple icon replacement for layout
import { LayoutTemplate } from 'lucide-react';
