import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ShieldCheck, Database, Clock, FileText } from 'lucide-react';

const features = [
    {
        title: "Intelligent Retrieval",
        description: "Document grounded answers from PDF, Word, and Excel files with deep citation linking and knowledge gap detection.",
        icon: Database,
        color: "from-blue-400 to-cyan-500"
    },
    {
        title: "Smart Booking",
        description: "Natural language room booking with real-time availability checks, conflict resolution, and waitlist management.",
        icon: Calendar,
        color: "from-purple-400 to-pink-500"
    },
    {
        title: "Admin Workflow",
        description: "One-click approvals, email-based secure links, real-time notifications, and role-based document access control.",
        icon: ShieldCheck,
        color: "from-amber-400 to-orange-500"
    }
];

const Features = () => {
    return (
        <div id="features" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-900/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-base text-cyan-400 font-semibold tracking-wide uppercase"
                    >
                        Powerful Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
                    >
                        Everything you need to manage academic resources
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto"
                    >
                        CSIS SmartAssist combines advanced AI with practical utility to streamline campus operations.
                    </motion.p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />

                            <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg mb-6`}>
                                <feature.icon className="h-6 w-6 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>

                            <div className="mt-6 flex items-center text-sm font-medium text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                                Learn more <span className="ml-1">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
