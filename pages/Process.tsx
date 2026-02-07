import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Code, Box, GitCommit, FileJson, LayoutTemplate } from 'lucide-react';

export const Process: React.FC = () => {
    const navigate = useNavigate();

    const handleRequestClick = () => {
        window.open('http://wa.me/447441342347', '_blank');
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center bg-blueprint-grid bg-blueprint overflow-hidden">
            {/* Overlay grid for texture */}
            <div className="pointer-events-none absolute inset-0 bg-blueprint-subgrid bg-blueprint-sub opacity-20"></div>

            {/* Sub-Header */}
            <div className="w-full border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur-sm">
                 <div className="mx-auto flex max-w-[1400px] items-center gap-6">
                    <button onClick={() => navigate('/')} className="group flex items-center gap-2 text-white/50 transition-colors hover:text-primary">
                        <ArrowLeft size={16} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to Home</span>
                    </button>
                    <div className="h-4 w-px bg-white/10"></div>
                    <span className="text-[10px] font-mono text-primary uppercase">Technical Deep-Dive // 001</span>
                 </div>
            </div>

            <section className="relative z-10 w-full max-w-[1200px] px-6 pt-20 text-center">
                 <div className="mb-6 inline-flex items-center gap-2 border border-primary/20 bg-primary-dim px-3 py-1">
                    <span className="size-1.5 animate-pulse rounded-full bg-primary"></span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Architecture</span>
                 </div>
                 <h1 className="mb-4 text-5xl font-black uppercase tracking-tighter text-white md:text-8xl">
                    The Handoff<br/><span className="text-white/20">Architecture</span>
                 </h1>
                 <p className="mx-auto max-w-xl font-mono text-sm uppercase tracking-widest text-white/40">
                    A bridge layer designed to eliminate the entropy of traditional design-to-dev handoffs.
                 </p>
            </section>

            {/* Diagram Section */}
            <section className="relative z-10 w-full max-w-[1400px] px-6 py-20">
                <div className="relative overflow-hidden border border-white/10 bg-black/40 p-8 backdrop-blur-sm md:p-16">
                    {/* Background decoration text */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-full select-none overflow-hidden p-4 font-mono text-[8px] leading-none text-white/5 opacity-20">
                         01010101110101010101010111010101010101011101010101010101110101010101010111010101
                        TOKEN_STRUCTURE_ROOT_ENV_VARS_SCSS_TAILWIND_CONFIG_JS_MODULE_EXPORTS_THEME_EXTEND
                        01010101110101010101010111010101010101011101010101010101110101010101010111010101
                    </div>

                    <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {/* Source Layer */}
                        <div className="flex flex-col items-center">
                            <div className="flex w-full flex-col items-center border border-white/10 bg-zinc-900/50 p-8">
                                <span className="mb-4 font-mono text-[10px] uppercase text-white/20">Source Layer</span>
                                <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-[#F24E1E]/20">
                                    {/* Abstract Figma Logo shape */}
                                    <LayoutTemplate className="text-[#F24E1E]" size={32} />
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-white">Figma Intent</h3>
                                <p className="mt-2 font-mono text-xs uppercase text-white/30">Variables & Tokens</p>
                            </div>
                        </div>

                        {/* Bridge Layer */}
                         <div className="relative flex flex-col items-center">
                            {/* Connecting Lines */}
                            <div className="absolute -left-12 top-1/2 hidden h-px w-12 border-t border-dashed border-primary bg-primary/30 lg:block"></div>
                            
                            <div className="flex w-full flex-col items-center border-2 border-primary bg-primary-dim p-8 shadow-[0_0_30px_rgba(194,248,38,0.1)]">
                                <span className="mb-4 font-mono text-[10px] uppercase text-primary/60">Bridge Engine</span>
                                <div className="mb-6 flex size-16 items-center justify-center bg-primary text-black">
                                    <svg fill="none" viewBox="0 0 48 48" className="size-8">
                                        <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-primary">Flowcode</h3>
                                <p className="mt-2 font-mono text-xs uppercase text-primary/40">Architectural Translation</p>
                            </div>

                             <div className="absolute -right-12 top-1/2 hidden h-px w-12 border-t border-dashed border-primary bg-primary/30 lg:block"></div>
                        </div>

                        {/* Delivery Layer */}
                        <div className="flex flex-col items-center">
                            <div className="flex w-full flex-col items-center border border-white/10 bg-zinc-900/50 p-8">
                                <span className="mb-4 font-mono text-[10px] uppercase text-white/20">Delivery Layer</span>
                                <div className="mb-6 flex size-16 items-center justify-center gap-2">
                                     <Code className="text-white/40" size={32} />
                                </div>
                                <h3 className="text-lg font-bold uppercase tracking-widest text-white">Production Code</h3>
                                <p className="mt-2 font-mono text-xs uppercase text-white/30">GitHub / React / CSS</p>
                            </div>
                        </div>
                    </div>

                    {/* Metadata Footer */}
                    <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/5 pt-8 md:grid-cols-4">
                        {[
                            { label: 'Status', value: 'Ready for Build' },
                            { label: 'Environment', value: 'Vercel/Node.js' },
                            { label: 'Stack', value: 'React + Tailwind' },
                            { label: 'Revision', value: '2024.Q4.V2' },
                        ].map(item => (
                             <div key={item.label} className="border-r border-white/5 pr-4 font-mono text-[10px] uppercase text-white/30 last:border-0">
                                <span className="mb-1 block text-primary">{item.label}</span> {item.value}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="w-full max-w-[1200px] space-y-32 px-6 py-20">
                {/* Step 1 */}
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
                    <div>
                        <div className="mb-4 font-mono text-xs text-primary">01 // PROCESS</div>
                        <h2 className="mb-6 text-4xl font-black uppercase leading-tight text-white">Design <span className="text-primary">Audit</span> & Token Mapping</h2>
                        <p className="mb-8 leading-relaxed text-white/50">
                            We don't just eye-ball colors. We ingest Figma Variables and Tokens directly. Our engine maps design primitives (spacing, color, typography) into a semantic CSS variable system that remains consistent throughout the entire build.
                        </p>
                        <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/40">
                             {['Dynamic theme switching capability', 'Responsive scale normalization', 'Atomic value preservation'].map(item => (
                                 <li key={item} className="flex items-center gap-3">
                                     <span className="size-1.5 bg-primary"></span> {item}
                                 </li>
                             ))}
                        </ul>
                    </div>
                    {/* Code Snippet Card */}
                    <div className="rounded-sm border border-white/10 bg-[#050505] p-1 shadow-2xl">
                         <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900 px-4 py-2">
                            <div className="flex gap-1.5">
                                {[1,2,3].map(i => <div key={i} className="size-2 rounded-full bg-white/10"></div>)}
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">variables.css</span>
                         </div>
                         <pre className="overflow-x-auto p-6 font-mono text-sm text-white/60">
                            <span className="text-primary">:root</span> {'{\n'}
                            {'  '}<span className="text-white/30">/* Core Colors */</span>{'\n'}
                            {'  '}--fc-primary: #C2F826;{'\n'}
                            {'  '}<span className="text-white/30">/* Spacing Logic */</span>{'\n'}
                            {'  '}--fc-space-md: clamp(1rem, 2vw, 1.5rem);{'\n'}
                            {'  '}<span className="text-white/30">/* Typography */</span>{'\n'}
                            {'  '}--fc-font-display: 'Inter', sans-serif;{'\n'}
                            {'  '}--fc-weight-bold: 900;{'\n'}
                            {'}'}
                         </pre>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
                    <div className="order-2 flex aspect-video items-center justify-center overflow-hidden border border-white/10 bg-[#050505] p-6 lg:order-1">
                        <div className="relative flex h-full w-full flex-col border border-dashed border-primary/40 p-4">
                             <div className="mb-4 flex h-8 w-1/3 items-center border border-primary/60 bg-primary/5 px-2">
                                <div className="h-2 w-full bg-primary/20"></div>
                             </div>
                             <div className="flex grow gap-4">
                                <div className="h-full w-1/2 space-y-2 border border-primary/20 bg-primary/5 p-4">
                                     <div className="h-2 w-full bg-primary/10"></div>
                                     <div className="h-2 w-2/3 bg-primary/10"></div>
                                </div>
                                <div className="h-full w-1/2 border border-primary/20 bg-primary/5"></div>
                             </div>
                             <div className="absolute right-2 top-2 bg-primary px-1 font-mono text-[8px] uppercase text-black">HeroSection.tsx</div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="mb-4 font-mono text-xs text-primary">02 // PROCESS</div>
                        <h2 className="mb-6 text-4xl font-black uppercase leading-tight text-white">Component <span className="text-primary">Scaffolding</span></h2>
                        <p className="mb-8 leading-relaxed text-white/50">
                            Static layers become functional React components. We analyze the hierarchy of your Figma frames to generate clean, accessible, and reusable frontend architecture. No absolute positioning—just solid, modern CSS layouts.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                             {[
                                 { title: "Atomic Strategy", desc: "Breakdown into atoms, molecules, and organisms for maximum reuse." },
                                 { title: "Clean Props", desc: "Typed interfaces ensure developers know exactly what data a component needs." }
                             ].map(item => (
                                 <div key={item.title} className="border border-white/10 bg-white/[0.02] p-4">
                                     <h4 className="mb-2 text-xs font-bold uppercase text-white">{item.title}</h4>
                                     <p className="text-[10px] leading-relaxed text-white/30">{item.desc}</p>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>

                 {/* Step 3 */}
                 <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
                    <div>
                        <div className="mb-4 font-mono text-xs text-primary">03 // PROCESS</div>
                        <h2 className="mb-6 text-4xl font-black uppercase leading-tight text-white">Logic & <span className="text-primary">Interactions</span></h2>
                        <p className="mb-8 leading-relaxed text-white/50">
                            A design-to-code practice isn't complete without movement. We define state management patterns and responsive behaviors that static design files can't express. From hover states to complex filtering logic.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: "Adaptive Logic", desc: "Behavioral changes beyond just CSS media queries.", icon: <Box size={20} className="text-primary" /> },
                                { title: "State Definition", desc: "Standardizing how modals, toggles, and inputs behave globally.", icon: <GitCommit size={20} className="text-primary" /> }
                            ].map(item => (
                                <div key={item.title} className="flex gap-4">
                                    {item.icon}
                                    <div>
                                        <h4 className="mb-1 text-sm font-bold uppercase text-white">{item.title}</h4>
                                        <p className="text-xs text-white/40">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-6 border border-white/10 bg-[#050505] p-8">
                         <div className="flex items-center justify-between">
                            <span className="font-mono text-xs uppercase text-white/60">Interaction State</span>
                            <span className="font-mono text-[10px] uppercase text-primary">Active</span>
                         </div>
                         <div className="group flex h-12 w-full cursor-pointer items-center justify-between border border-primary/40 px-4 transition-colors hover:bg-primary/10">
                            <span className="font-mono text-xs uppercase text-white">Primary CTA</span>
                            <div className="flex gap-2">
                                <div className="size-2 bg-primary"></div>
                                <div className="size-2 bg-primary/20"></div>
                            </div>
                         </div>
                         <div className="border border-white/5 bg-white/[0.01] p-4">
                             <pre className="font-mono text-[10px] text-white/30">
                                const [isOpen, setIsOpen] = useState(false);{'\n'}
                                const handleToggle = () =&gt; setIsOpen(!isOpen);{'\n'}
                                return ({'\n'}
                                {'  '}&lt;motion.div{'\n'}
                                {'    '}animate=&#123;&#123; height: isOpen ? 'auto' : 0 &#125;&#125;{'\n'}
                                {'  '}/&gt;{'\n'}
                                )
                             </pre>
                         </div>
                    </div>
                </div>
            </section>

             <section className="flex w-full flex-col items-center py-40">
                <div className="w-full max-w-4xl px-6 text-center">
                    <h2 className="mb-12 text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
                        Build with <span className="text-primary">Confidence</span>.
                    </h2>
                    <div className="flex flex-col justify-center gap-6 sm:flex-row">
                        <button 
                            onClick={handleRequestClick}
                            className="bg-primary px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-black shadow-[0_0_50px_rgba(194,248,38,0.2)] transition-all hover:scale-105 hover:bg-white"
                        >
                            Request a Sprint
                        </button>
                        <button className="border border-white/20 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:border-primary hover:text-primary">
                            View Docs
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};