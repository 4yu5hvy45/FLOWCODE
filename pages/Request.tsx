import React, { useState } from 'react';
import { Layout, Terminal, Zap, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Request: React.FC = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Request initialized. We'll be in touch.");
            navigate('/');
        }, 1500);
    };

    return (
        <div className="flex flex-grow items-stretch">
             <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 lg:grid-cols-12">
                 {/* Form Side */}
                <div className="border-r border-white/5 px-6 py-16 md:px-20 md:py-24 lg:col-span-7">
                    <div className="max-w-xl">
                        <div className="mb-8 inline-block border border-primary/30 px-3 py-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Engagement Request</span>
                        </div>
                        <h1 className="mb-12 text-5xl font-black uppercase leading-none tracking-tighter text-white md:text-7xl">
                            Request a <br/><span className="text-primary">Sprint</span>
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-12">
                             <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="mb-1 block text-[10px] font-black uppercase tracking-[0.2em] text-primary">Your Name</label>
                                    <input 
                                        id="name" 
                                        type="text" 
                                        required
                                        placeholder="E.g. Alexander Chen"
                                        className="border-b border-l-0 border-r-0 border-t-0 border-white/20 bg-transparent px-0 py-4 text-white placeholder:text-white/20 focus:border-primary focus:ring-0"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="org" className="mb-1 block text-[10px] font-black uppercase tracking-[0.2em] text-primary">Organization</label>
                                    <input 
                                        id="org" 
                                        type="text" 
                                        required
                                        placeholder="Company or Studio Name"
                                        className="border-b border-l-0 border-r-0 border-t-0 border-white/20 bg-transparent px-0 py-4 text-white placeholder:text-white/20 focus:border-primary focus:ring-0"
                                    />
                                </div>
                             </div>

                             <div className="flex flex-col">
                                <label htmlFor="role" className="mb-1 block text-[10px] font-black uppercase tracking-[0.2em] text-primary">Your Role</label>
                                <select 
                                    id="role" 
                                    className="cursor-pointer appearance-none border-b border-l-0 border-r-0 border-t-0 border-white/20 bg-transparent px-0 py-4 text-white focus:border-primary focus:ring-0"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select your position</option>
                                    <option className="bg-black" value="founder">Founder / CEO</option>
                                    <option className="bg-black" value="agency-owner">Agency Owner</option>
                                    <option className="bg-black" value="product-lead">Product Lead</option>
                                    <option className="bg-black" value="engineering-manager">Engineering Manager</option>
                                    <option className="bg-black" value="other">Other</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="pain" className="mb-1 block text-[10px] font-black uppercase tracking-[0.2em] text-primary">Current Handoff Pain Points</label>
                                <textarea 
                                    id="pain" 
                                    rows={3}
                                    placeholder="What's slowing down your design-to-code pipeline?"
                                    className="border-b border-l-0 border-r-0 border-t-0 border-white/20 bg-transparent px-0 py-4 text-white placeholder:text-white/20 focus:border-primary focus:ring-0"
                                ></textarea>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="timeline" className="mb-1 block text-[10px] font-black uppercase tracking-[0.2em] text-primary">Target Project Timeline</label>
                                <select 
                                    id="timeline" 
                                    className="cursor-pointer appearance-none border-b border-l-0 border-r-0 border-t-0 border-white/20 bg-transparent px-0 py-4 text-white focus:border-primary focus:ring-0"
                                    defaultValue=""
                                >
                                    <option value="" disabled>When do you need to start?</option>
                                    <option className="bg-black" value="immediate">Immediate (Within 2 weeks)</option>
                                    <option className="bg-black" value="next-month">Next Month</option>
                                    <option className="bg-black" value="planning">Q3/Q4 Planning</option>
                                </select>
                            </div>

                            <div className="pt-8">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="group relative flex w-full min-w-[280px] items-center justify-between bg-primary px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-white md:w-auto"
                                >
                                    {isSubmitting ? 'Processing...' : 'Initialize Request'}
                                    {!isSubmitting && <ArrowRight className="text-xl transition-transform group-hover:translate-x-1" />}
                                </button>
                                <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
                                    Response typical within 24 business hours.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Sidebar Side */}
                <div className="relative bg-[#050505] bg-technical-grid bg-technical px-6 py-16 md:px-20 md:py-24 lg:col-span-5">
                     <div className="sticky top-40">
                         <h2 className="mb-12 text-xs font-black uppercase tracking-[0.4em] text-white">Why Flowcode?</h2>
                         <div className="space-y-10">
                            {[
                                { title: "Zero Rework", desc: "We deliver production-intent code that skips the \"rebuild from scratch\" phase entirely.", icon: <Layout /> },
                                { title: "Developer-Ready", desc: "Structured, documented, and componentized. Your engineers will actually want to use this codebase.", icon: <Terminal /> },
                                { title: "Architectural Intent", desc: "We don't just copy pixels. We translate design systems into scalable frontend architectures.", icon: <Zap /> },
                                { title: "High Velocity", desc: "One sprint to bridge the gap that usually takes teams months to negotiate.", icon: <Zap /> }
                            ].map((item, i) => (
                                <div key={i} className="group flex gap-6">
                                    <div className="flex size-10 shrink-0 items-center justify-center border border-primary/20 text-primary transition-colors group-hover:border-primary">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-bold uppercase tracking-wider text-white">{item.title}</h3>
                                        <p className="text-sm leading-relaxed text-white/40">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                         </div>

                         <div className="mt-20 border border-white/10 bg-black/60 p-8 backdrop-blur-sm">
                            <div className="mb-4 flex items-center gap-2">
                                <span className="size-2 animate-pulse rounded-full bg-primary"></span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Availability</span>
                            </div>
                            <p className="text-xs font-medium uppercase tracking-tighter leading-relaxed text-white/60">
                                Currently accepting 2 new sprint engagements for next month.
                            </p>
                         </div>
                     </div>
                </div>
             </div>
        </div>
    );
};
