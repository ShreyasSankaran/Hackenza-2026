import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, ArrowRight } from 'lucide-react';

// Note: This is an example modal component. In a real app, you'd manage state via props or context.
const Login = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
                            <p className="text-gray-400 text-sm mt-2">Sign in to access your dashboard</p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        type="email"
                                        className="block w-full pl-10 pr-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-white placeholder-gray-500 sm:text-sm"
                                        placeholder="you@college.edu"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        type="password"
                                        className="block w-full pl-10 pr-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-white placeholder-gray-500 sm:text-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-slate-600 rounded bg-slate-700" />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">Remember me</label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300">Forgot password?</a>
                                </div>
                            </div>

                            <button type="button" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                                Sign in
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-400">
                                Don't have an account?{' '}
                                <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300">
                                    Contact Admin
                                </a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Login;
