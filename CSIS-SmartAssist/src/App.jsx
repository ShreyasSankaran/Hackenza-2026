import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import RoleBasedAccess from './Components/RoleBasedAccess/RoleBasedAccess';
import ChatbotUI from './Components/ChatbotUI/ChatbotUI';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500/30 font-sans">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />

      <main>
        <Hero />
        <Features />
        <RoleBasedAccess />
      </main>

      <Footer />

      {/* Floating Elements */}
      <ChatbotUI />

      {/* Modals */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default App;
