import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles, User } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6"
                        >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Next-Gen Academic Assistant
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                        >
                            <span className="block">Meet CSIS</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                SmartAssist
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                        >
                            AI-powered room booking, approvals, and academic intelligence — all in one futurist chatbot interface. Experience the future of campus management.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4"
                        >
                            <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-cyan-400 hover:bg-cyan-300 md:py-4 md:text-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                                Try the Chatbot
                                <Bot className="ml-2 h-5 w-5" />
                            </button>
                            <button className="flex items-center justify-center px-8 py-3 border border-gray-700 text-base font-medium rounded-lg text-gray-300 bg-slate-800/50 hover:bg-slate-800 md:py-4 md:text-lg transition-all hover:border-cyan-500/50">
                                Explore Features
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Hero Image / Chatbot Preview */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
                    >
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <div className="relative block w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                                {/* Mock Chat Interface Header */}
                                <div className="bg-slate-900 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                                            <Bot className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-white">SmartAssist AI</h3>
                                            <div className="flex items-center gap-1.5">
                                                <span className="block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                                <span className="text-xs text-gray-400">Online</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mock Chat Body */}
                                <div className="p-4 space-y-4 h-[300px] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-800/50 pointer-events-none" />

                                    {/* Bot Message */}
                                    <div className="flex gap-3">
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex-shrink-0 flex items-center justify-center">
                                            <Bot className="h-4 w-4 text-white" />
                                        </div>
                                        <div className="bg-slate-700/50 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%] border border-slate-600">
                                            <p className="text-sm text-gray-200">Hello! I'm SmartAssist. How can I help you with your academic schedule today?</p>
                                        </div>
                                    </div>

                                    {/* User Message */}
                                    <div className="flex gap-3 flex-row-reverse">
                                        <div className="h-8 w-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center">
                                            <User className="h-4 w-4 text-white" />
                                        </div>
                                        <div className="bg-cyan-600/20 rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%] border border-cyan-500/30">
                                            <p className="text-sm text-gray-200">Is Lab 101 available tomorrow at 2 PM?</p>
                                        </div>
                                    </div>

                                    {/* Bot Message with Typing Indicator */}
                                    <div className="flex gap-3">
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex-shrink-0 flex items-center justify-center">
                                            <Bot className="h-4 w-4 text-white" />
                                        </div>
                                        <div className="bg-slate-700/50 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%] border border-slate-600">
                                            <div className="flex gap-1.5 py-1">
                                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mock Input */}
                                <div className="p-3 border-t border-slate-700 bg-slate-900">
                                    <div className="flex gap-2">
                                        <div className="flex-1 bg-slate-800 rounded-lg h-9 px-3 flex items-center text-sm text-gray-500">
                                            Type your message...
                                        </div>
                                        <div className="h-9 w-9 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/10 rounded-full blur-3xl opacity-50" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
