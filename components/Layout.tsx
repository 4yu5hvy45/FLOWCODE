import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isRequestPage = location.pathname === '/request';

    const navLinks = [
        { label: 'Deliverables', path: '/catalog' },
        { label: 'Process', path: '/process' },
        { label: 'Mentorship', path: '/mentorship' },
    ];

    const handleRequestClick = () => {
        window.open('http://wa.me/447441342347', '_blank');
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-background text-white selection:bg-primary selection:text-black">
            {/* Header */}
            <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
                <div className="flex h-20 items-center justify-between px-6 md:px-12 lg:px-20">
                    <div 
                        className="flex cursor-pointer items-center gap-4 group" 
                        onClick={() => navigate('/')}
                    >
                        <div className="flex size-8 items-center justify-center text-primary transition-transform group-hover:scale-110">
                            <svg fill="none" viewBox="0 0 48 48" className="size-full">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h1 className="text-xl font-black uppercase tracking-[0.15em] text-white">
                            Flowcode
                        </h1>
                    </div>

                    {/* Desktop Nav */}
                    {!isRequestPage && (
                        <div className="hidden md:flex flex-1 justify-end items-center gap-12">
                            <nav className="flex gap-10">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                                                isActive ? 'text-primary' : 'text-white/60 hover:text-primary'
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </nav>
                            <button 
                                onClick={handleRequestClick}
                                className="h-10 rounded-sm bg-primary px-6 text-[10px] font-black uppercase tracking-widest text-black transition-colors hover:bg-white"
                            >
                                Request Sprint
                            </button>
                        </div>
                    )}

                    {isRequestPage && (
                         <div className="hidden md:flex flex-1 justify-end items-center gap-12">
                             <button 
                                onClick={() => navigate('/')}
                                className="text-white/40 hover:text-white transition-colors"
                             >
                                <X size={24} />
                             </button>
                         </div>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden text-white/80 hover:text-primary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl md:hidden">
                     <nav className="flex flex-col items-center gap-12">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `text-xl font-black uppercase tracking-widest ${
                                        isActive ? 'text-primary' : 'text-white/60'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <button 
                            onClick={() => {
                                setIsMenuOpen(false);
                                handleRequestClick();
                            }}
                            className="mt-8 h-12 rounded-sm bg-primary px-8 text-sm font-black uppercase tracking-widest text-black"
                        >
                            Request Sprint
                        </button>
                    </nav>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 pt-20">
                {children}
            </main>

            {/* Footer */}
            {!isRequestPage && (
                <footer className="w-full border-t border-white/10 bg-black px-6 py-16 md:px-20">
                    <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-12 md:flex-row md:items-center">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-3 text-white opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                <div className="size-5">
                                    <svg fill="none" viewBox="0 0 48 48" className="size-full">
                                        <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <h2 className="text-xs font-black uppercase tracking-widest">Flowcode</h2>
                            </div>
                            <p className="max-w-xs text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                                Flowcode is a delivery practice by <a href="https://www.beyondbranding.media" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">Beyond Branding</a>.
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-8 md:flex-row md:items-center">
                             <div className="flex gap-6">
                                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/30 transition-colors hover:text-white">LinkedIn</a>
                                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/30 transition-colors hover:text-white">X / Twitter</a>
                            </div>
                            <div className="hidden h-8 w-px bg-white/10 md:block"></div>
                            <div className="text-[10px] font-mono uppercase text-primary">
                                Status: Systems_Nominal // V_2.0.4
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
};