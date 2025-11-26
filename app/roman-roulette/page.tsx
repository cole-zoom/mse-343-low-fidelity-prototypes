"use client";

import React, { useState, useEffect } from 'react';
import { Scroll, Sword, User, RefreshCw, Crown, Columns } from 'lucide-react';

const ROMAN_NAMES = [
  "Maximus Procrastinatus",
  "Julius Cheesar",
  "Brutus the Back-Patte", 
  "Agrippina the Aggressive",
  "Claudius the Clumsy",
  "Flavia the Fun-Killer",
  "Spartacus (No, I am Spartacus)",
  "Biggus Gallus"
];

const ROMAN_ACTIVITIES = [
  "Competitive Toga Folding",
  "Lion Taming (Beginner Class)",
  "Chariot Racing in Rush Hour",
  "Philosophy Debate: Does Pineapple Belong on Pizza?",
  "Building a Road (It leads nowhere)",
  "Grape Peeling Marathon",
  "Public Bath Singing",
  "Invading a Small Village (It's a brunch spot now)"
];

const LOADING_MESSAGES = [
  "Consulting the Oracles...",
  "Sharpening Gladius...",
  "Feeding the Lions...",
  "Polishing the Marble...",
  "Appeasing Jupiter...",
  "Fixing the Aqueduct Leaks..."
];

export default function RomanRoulette() {
  const [screen, setScreen] = useState('start'); // start, loading, result
  const [match, setMatch] = useState({ person: '', activity: '' });
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MESSAGES[0]);

  // Handle the "Sign Up" flow
  const findDestiny = () => {
    setScreen('loading');
    
    // Cycle through funny loading messages
    let msgIndex = 0;
    const msgInterval = setInterval(() => {
      msgIndex = (msgIndex + 1) % LOADING_MESSAGES.length;
      setLoadingMsg(LOADING_MESSAGES[msgIndex]);
    }, 800);

    // Simulate API delay and matching
    setTimeout(() => {
      clearInterval(msgInterval);
      const randomPerson = ROMAN_NAMES[Math.floor(Math.random() * ROMAN_NAMES.length)];
      const randomActivity = ROMAN_ACTIVITIES[Math.floor(Math.random() * ROMAN_ACTIVITIES.length)];
      setMatch({ person: randomPerson, activity: randomActivity });
      setScreen('result');
    }, 3000);
  };

  const reset = () => {
    setScreen('start');
  };

  return (
    <div className="min-h-screen bg-[#f4e4bc] text-[#4a3b32] font-serif flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor - Pillars */}
      <div className="absolute left-4 top-0 bottom-0 w-16 bg-repeat-y opacity-20 hidden md:flex flex-col items-center gap-4">
         <div className="h-full border-x-4 border-[#8b5a2b] w-8"></div>
      </div>
      <div className="absolute right-4 top-0 bottom-0 w-16 bg-repeat-y opacity-20 hidden md:flex flex-col items-center gap-4">
         <div className="h-full border-x-4 border-[#8b5a2b] w-8"></div>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-md bg-[#fff9f0] border-8 border-double border-[#8b5a2b] shadow-2xl rounded-lg p-8 relative z-10">
        
        {/* Decorative Corners */}
        <div className="absolute top-2 left-2 text-[#b8860b]"><Columns size={24} /></div>
        <div className="absolute top-2 right-2 text-[#b8860b]"><Columns size={24} /></div>
        <div className="absolute bottom-2 left-2 text-[#b8860b]"><Columns size={24} /></div>
        <div className="absolute bottom-2 right-2 text-[#b8860b]"><Columns size={24} /></div>

        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-[#8b5a2b] pb-4">
          <h1 className="text-3xl font-bold uppercase tracking-widest text-[#800000]">
            SPQR Matcher
          </h1>
          <p className="text-sm italic mt-2 text-[#666]">Divinely Ordained Activities</p>
        </div>

        {/* SCREENS */}
        
        {/* 1. START SCREEN */}
        {screen === 'start' && (
          <div className="flex flex-col items-center gap-6 animate-fadeIn">
            <div className="w-32 h-32 bg-[#800000] rounded-full flex items-center justify-center text-[#ffd700] shadow-lg mb-2">
              <Crown size={64} />
            </div>
            <p className="text-center text-lg">
              Citizen! Are you bored of the usual bread and circuses?
            </p>
            <p className="text-center text-sm italic opacity-75">
              Let the fates decide your companion and your quest.
            </p>
            
            <button 
              onClick={findDestiny}
              className="group relative px-8 py-4 bg-[#800000] text-[#ffd700] font-bold text-xl uppercase tracking-wider rounded border-2 border-[#b8860b] hover:bg-[#600000] hover:scale-105 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none"
            >
              <span className="flex items-center gap-2">
                <Scroll size={20} />
                Consult The Gods
              </span>
            </button>
          </div>
        )}

        {/* 2. LOADING SCREEN */}
        {screen === 'loading' && (
          <div className="flex flex-col items-center gap-8 py-8 animate-fadeIn">
            <div className="relative">
              <div className="absolute inset-0 animate-ping opacity-25 bg-[#b8860b] rounded-full"></div>
              <RefreshCw size={64} className="text-[#b8860b] animate-spin" />
            </div>
            
            <h2 className="text-xl font-bold text-[#800000] animate-pulse">
              {loadingMsg}
            </h2>
            
            <div className="w-full bg-[#e0d0b0] h-2 rounded-full overflow-hidden border border-[#8b5a2b]">
              <div className="h-full bg-[#800000] roman-progress-bar w-full origin-left"></div>
            </div>
          </div>
        )}

        {/* 3. RESULT SCREEN */}
        {screen === 'result' && (
          <div className="flex flex-col items-center gap-6 animate-fadeIn">
            <h2 className="text-xl uppercase tracking-widest text-[#8b5a2b] font-bold border-b border-[#b8860b]">
              The Senate Decrees
            </h2>

            <div className="w-full space-y-4">
              {/* Partner Card */}
              <div className="bg-[#fdfbf7] p-4 border border-[#d4c5a9] rounded shadow-inner flex items-center gap-4">
                <div className="bg-[#e0d0b0] p-3 rounded-full text-[#800000]">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-[#8b5a2b] font-bold">Your Companion</p>
                  <p className="text-lg font-bold">{match.person}</p>
                </div>
              </div>

              {/* Activity Card */}
              <div className="bg-[#fdfbf7] p-4 border border-[#d4c5a9] rounded shadow-inner flex items-center gap-4">
                <div className="bg-[#e0d0b0] p-3 rounded-full text-[#800000]">
                  <Sword size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-[#8b5a2b] font-bold">Your Quest</p>
                  <p className="text-lg font-bold">{match.activity}</p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm italic mt-2">
              &quot;Fortune favors the bold, but check for lions first.&quot;
            </p>

            <button 
              onClick={reset}
              className="mt-4 px-6 py-2 bg-transparent text-[#800000] font-bold uppercase tracking-wider border-2 border-[#800000] hover:bg-[#800000] hover:text-[#ffd700] transition-colors rounded"
            >
              Try Fate Again
            </button>
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-[#8b5a2b] text-xs opacity-60">
        EST. MMXIV • ROME
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes progressBar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .roman-progress-bar {
          animation: progressBar 3s linear forwards;
        }
      `}</style>
    </div>
  );
}

