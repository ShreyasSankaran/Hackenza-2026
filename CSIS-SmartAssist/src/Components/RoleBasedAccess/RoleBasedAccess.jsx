import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, BookOpen, Shield, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const roles = [
    { id: 'student', label: 'Student', icon: User },
    { id: 'teacher', label: 'Teacher', icon: BookOpen },
    { id: 'admin', label: 'Admin', icon: Shield },
];

const RoleBasedAccess = () => {
    const [activeTab, setActiveTab] = useState('student');

    return (
        <div className="py-20 bg-slate-900/50 border-y border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Tailored Experiences for Every Role
                    </h2>
                    <p className="mt-4 text-xl text-gray-400">
                        SmartAssist adapts its interface and capabilities based on who is using it.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Tabs */}
                    <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4">
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveTab(role.id)}
                                className={`w-full flex items-center p-4 rounded-xl transition-all border ${activeTab === role.id
                                        ? 'bg-slate-800 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                                        : 'bg-transparent border-slate-700 hover:bg-slate-800/50'
                                    }`}
                            >
                                <div className={`p-2 rounded-lg mr-4 ${activeTab === role.id ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-gray-400'
                                    }`}>
                                    <role.icon className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <span className={`block text-lg font-bold ${activeTab === role.id ? 'text-white' : 'text-gray-400'
                                        }`}>
                                        {role.label} View
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {role.id === 'student' && 'Access resources & ask questions'}
                                        {role.id === 'teacher' && 'Manage courses & bookings'}
                                        {role.id === 'admin' && 'System oversight & approvals'}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content Mockup */}
                    <div className="w-full lg:w-2/3">
                        <div className="relative bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl min-h-[400px]">
                            {/* Fake Browser Header */}
                            <div className="bg-slate-900 px-4 py-3 border-b border-slate-700 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="ml-4 bg-slate-800 rounded px-3 py-1 text-xs text-gray-500 flex-1 text-center font-mono">
                                    smartassist.csis.edu/dashboard/{activeTab}
                                </div>
                            </div>

                            {/* Dynamic Content */}
                            <div className="p-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {activeTab === 'student' && (
                                            <div className="space-y-6">
                                                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                                                    <h3 className="text-xl font-bold text-white">Student Dashboard</h3>
                                                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">Active Session</span>
                                                </div>
                                                <div className="grid gap-4">
                                                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                                                        <h4 className="font-semibold text-cyan-400 mb-2">Recent Queries</h4>
                                                        <p className="text-sm text-gray-300 flex items-center gap-2">
                                                            <Clock className="w-4 h-4 text-cyan-500" />
                                                            "What is the syllabus for CS101?"
                                                        </p>
                                                    </div>
                                                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                                                        <h4 className="font-semibold text-purple-400 mb-2">Room Availability</h4>
                                                        <p className="text-sm text-gray-300 mb-2">Checked Lab 304 availability for today.</p>
                                                        <button className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">Check Again</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'teacher' && (
                                            <div className="space-y-6">
                                                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                                                    <h3 className="text-xl font-bold text-white">Faculty Portal</h3>
                                                    <button className="bg-cyan-500 hover:bg-cyan-600 text-black text-sm px-3 py-1 rounded-lg font-medium transition-colors">
                                                        + New Booking
                                                    </button>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center justify-between bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                                                        <div>
                                                            <p className="font-medium text-white">Lab 101 Booking Request</p>
                                                            <p className="text-sm text-gray-400">Wed, 14th Oct • 10:00 AM - 12:00 PM</p>
                                                        </div>
                                                        <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded border border-yellow-500/30">Pending Approval</span>
                                                    </div>
                                                    <div className="flex items-center justify-between bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                                                        <div>
                                                            <p className="font-medium text-white">Seminar Hall A</p>
                                                            <p className="text-sm text-gray-400">Recurring: Every Friday</p>
                                                        </div>
                                                        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">Confirmed</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'admin' && (
                                            <div className="space-y-6">
                                                <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                                                    <h3 className="text-xl font-bold text-white">Admin Control Panel</h3>
                                                    <div className="flex gap-2">
                                                        <div className="text-center px-4 border-r border-slate-600">
                                                            <span className="block text-xl font-bold text-white">12</span>
                                                            <span className="text-xs text-gray-400">Pending</span>
                                                        </div>
                                                        <div className="text-center px-2">
                                                            <span className="block text-xl font-bold text-cyan-400">45</span>
                                                            <span className="text-xs text-gray-400">Approved</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 flex justify-between items-center">
                                                        <div>
                                                            <p className="font-medium text-white">Prof. Smith - Lab 202</p>
                                                            <p className="text-xs text-gray-400">Reason: Extra Class</p>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <button className="p-1 rounded bg-green-500/20 text-green-400 hover:bg-green-500/30">
                                                                <CheckCircle className="w-5 h-5" />
                                                            </button>
                                                            <button className="p-1 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30">
                                                                <AlertCircle className="w-5 h-5" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                                                        <p className="text-sm font-semibold text-white mb-2">System Alerts</p>
                                                        <div className="flex items-center gap-2 text-xs text-orange-300 bg-orange-500/10 p-2 rounded border border-orange-500/20">
                                                            <AlertCircle className="w-3 h-3" />
                                                            Conflict detected in Lab 105 for 2:00 PM
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoleBasedAccess;
