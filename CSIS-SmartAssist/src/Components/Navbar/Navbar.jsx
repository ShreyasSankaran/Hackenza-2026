import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, User, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onLoginClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <Zap className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">
                            CSIS <span className="text-cyan-400">SmartAssist</span>
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="#features" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                            <a href="#chat" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Chat</a>
                            <button onClick={onLoginClick} className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center gap-2">
                                <User className="h-4 w-4" />
                                Login
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                            <a href="#features" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Features</a>
                            <a href="#chat" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Chat</a>
                            <button onClick={() => { onLoginClick(); setMobileMenuOpen(false); }} className="w-full text-left text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Login</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
