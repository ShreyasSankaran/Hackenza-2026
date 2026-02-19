import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                                <span className="font-bold text-white text-lg">A</span>
                            </div>
                            <span className="font-bold text-xl text-white">
                                CSIS <span className="text-cyan-400">SmartAssist</span>
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Empowering academic institutions with next-generation AI.
                            Streamlining bookings, approvals, and knowledge sharing.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Features</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Integrations</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Changelog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Documentation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; 2024 CSIS SmartAssist. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-4 md:mt-0">
                        <span>Built with</span>
                        <Heart className="h-4 w-4 text-red-500 fill-current" />
                        <span>for CSIS Department</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
