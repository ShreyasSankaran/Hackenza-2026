import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Minimize2, Paperclip } from 'lucide-react';

const ChatbotUI = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Hello! I am CSIS SmartAssist. How can I help you today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMessage = { id: Date.now(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const responses = [
                "I can help check lab availability for you.",
                "That implementation looks correct based on the documentation.",
                "You can find the room booking form in the admin dashboard.",
                "Professor Smith has office hours today at 3 PM."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            const newBotMessage = { id: Date.now() + 1, type: 'bot', text: randomResponse };
            setMessages(prev => [...prev, newBotMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    }`}
            >
                <MessageSquare className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-slate-900 animate-pulse" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-slate-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-b border-cyan-500/20 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                                    <Bot className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">SmartAssist AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-cyan-300">Online & Ready</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                                    <Minimize2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.type === 'bot' ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`flex items-end gap-2 max-w-[80%] ${msg.type === 'bot' ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <div className={`h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.type === 'bot' ? 'bg-cyan-900/50 text-cyan-400' : 'bg-slate-700 text-gray-300'
                                            }`}>
                                            {msg.type === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                                        </div>
                                        <div className={`p-3 rounded-2xl ${msg.type === 'bot'
                                                ? 'bg-slate-800/80 border border-slate-700 text-gray-200 rounded-bl-none'
                                                : 'bg-cyan-600/20 border border-cyan-500/30 text-white rounded-br-none shadow-[0_0_10px_rgba(34,211,238,0.1)]'
                                            }`}>
                                            <p className="text-sm leading-relaxed">{msg.text}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="flex items-end gap-2">
                                        <div className="h-8 w-8 rounded-full bg-cyan-900/50 text-cyan-400 flex-shrink-0 flex items-center justify-center">
                                            <Bot className="h-4 w-4" />
                                        </div>
                                        <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-2xl rounded-bl-none">
                                            <div className="flex gap-1.5 h-full items-center">
                                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-slate-900 border-t border-slate-800">
                            <div className="relative flex items-center gap-2">
                                <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                                    <Paperclip className="h-5 w-5" />
                                </button>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask about availability, approvals..."
                                    className="flex-1 bg-slate-800 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-slate-700"
                                />
                                <button
                                    onClick={handleSend}
                                    className={`p-3 rounded-xl transition-all ${inputValue.trim()
                                            ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20'
                                            : 'bg-slate-800 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    <Send className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatbotUI;
