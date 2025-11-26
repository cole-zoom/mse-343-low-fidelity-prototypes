import React, { useState, useEffect } from 'react';
import { Plane, Search, User, Settings, ArrowLeft, Send } from 'lucide-react';

// --- Types ---
type ViewState = 'HOME' | 'DETAILS' | 'LOADING' | 'MATCH' | 'CHAT';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [destination, setDestination] = useState<string>('Japan');
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState<{sender: 'me'|'guide', text: string}[]>([
    { sender: 'guide', text: "Hi! I'm Yuta, I'll be your tour guide." }
  ]);

  // Handle the loading timeout logic
  useEffect(() => {
    if (currentView === 'LOADING') {
      const timer = setTimeout(() => {
        setCurrentView('MATCH');
      }, 4000); // 4 seconds of "cool animation"
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    setMessages([...messages, { sender: 'me', text: chatMessage }]);
    setChatMessage('');
    
    // Auto reply for prototype feel
    setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'guide', text: "That sounds great! I know the perfect place." }]);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-stone-200">
      
      {/* --- BLUE PLASTIC PHONE FRAME --- */}
      <div 
        className="relative bg-[#2c55db] p-4 rounded-[45px] shadow-2xl"
        style={{ width: '360px', height: '720px' }}
      >
        {/* Top Speaker/Camera "Notch" area (drawn on plastic) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#2040a0] rounded-b-xl opacity-20"></div>

        {/* --- SCREEN AREA --- */}
        <div className="paper-texture w-full h-full rounded-[30px] overflow-hidden flex flex-col relative border-2 border-gray-400">
          
          {/* CONTENT AREA */}
          <div className="flex-1 overflow-y-auto p-5 paper-font text-[#222]">
            
            {/* VIEW: HOME */}
            {currentView === 'HOME' && (
              <div className="flex flex-col items-center h-full pt-10 animate-fade-in">
                <h1 className="text-4xl text-center mb-8 font-bold leading-tight">Enter<br/>Destination</h1>
                
                <div className="mb-8 transform -rotate-12">
                   <Plane size={80} strokeWidth={1.5} />
                </div>

                <div className="w-full relative mb-12">
                  <div className="hand-drawn-border flex items-center p-3 bg-white/50">
                    <Search className="mr-2 opacity-50" />
                    <input 
                      type="text" 
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="bg-transparent border-none outline-none w-full text-xl font-bold placeholder-gray-400 paper-font"
                      placeholder="Search..."
                    />
                  </div>
                </div>

                <p className="text-xl mb-auto opacity-70">Ready for take off?</p>
                
                <button 
                  onClick={() => setCurrentView('DETAILS')}
                  className="hand-drawn-border w-full py-4 text-2xl font-bold hover:bg-black hover:text-white transition-colors hand-drawn-btn"
                >
                  Next ➡
                </button>
              </div>
            )}

            {/* VIEW: DETAILS */}
            {currentView === 'DETAILS' && (
              <div className="flex flex-col h-full pt-4 animate-fade-in">
                <div className="flex items-center mb-6">
                    <button onClick={() => setCurrentView('HOME')} className="p-2">
                        <ArrowLeft />
                    </button>
                    <h2 className="text-3xl font-bold ml-4 underline decoration-wavy decoration-blue-500">{destination}</h2>
                </div>

                <div className="flex justify-center mb-6">
                    <Plane size={48} className="animate-bounce" />
                </div>

                <div className="hand-drawn-box p-4 bg-white/40 mb-auto space-y-6">
                    <div className="flex justify-between items-center border-b-2 border-dashed border-gray-400 pb-2">
                        <span className="text-xl">City:</span>
                        <span className="text-xl font-bold">Tokyo</span>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-lg">Start of trip:</label>
                        <div className="hand-drawn-border p-2 text-center bg-white font-bold text-lg">
                            12 / 31 / 2025
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-lg">End of trip:</label>
                        <div className="hand-drawn-border p-2 text-center bg-white font-bold text-lg">
                            01 / 07 / 2026
                        </div>
                    </div>
                </div>

                <div className="text-center mb-4 text-lg">Confirm filters?</div>
                
                <button 
                  onClick={() => setCurrentView('LOADING')}
                  className="hand-drawn-box bg-[#eee] w-full py-4 text-2xl font-bold hover:bg-[#ddd] hand-drawn-btn"
                >
                  Confirm & Match
                </button>
              </div>
            )}

            {/* VIEW: LOADING (The Cool Animation) */}
            {currentView === 'LOADING' && (
              <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
                
                {/* RADAR ANIMATION */}
                <div className="relative w-48 h-48 mb-8">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 border-4 border-[#222] rounded-full opacity-80"></div>
                  {/* Inner Ring */}
                  <div className="absolute inset-4 border-2 border-dashed border-[#555] rounded-full opacity-50"></div>
                  {/* Crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <div className="w-full h-0.5 bg-[#222]"></div>
                    <div className="h-full w-0.5 bg-[#222] absolute"></div>
                  </div>
                  
                  {/* The Sweep */}
                  <div className="radar-sweep"></div>
                  
                  {/* Center Plane */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <Plane size={32} fill="#222" />
                  </div>

                  {/* Blips */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full blip" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full blip" style={{ animationDelay: '1.2s' }}></div>
                </div>

                <h2 className="text-3xl font-bold mb-2">Finding you a Guide!</h2>
                <p className="text-lg opacity-70 mb-8">Scanning local frequencies...</p>
                <div className="text-sm border-t border-dashed border-gray-400 pt-4 w-3/4">
                    We will notify you when a match has been found.
                </div>
              </div>
            )}

            {/* VIEW: MATCH FOUND */}
            {currentView === 'MATCH' && (
              <div className="flex flex-col items-center h-full pt-6 animate-fade-in">
                <h1 className="text-4xl font-bold text-center mb-6">MATCH<br/>found!</h1>
                
                {/* Profile Card */}
                <div className="hand-drawn-box w-full p-6 bg-white rotate-1 shadow-lg mb-auto">
                    <div className="w-24 h-24 mx-auto border-2 border-black rounded-xl flex items-center justify-center text-5xl mb-4 bg-gray-50">
                        😊
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-2">Yuta</h2>
                    <div className="space-y-2 text-lg px-4">
                        <div className="flex justify-between border-b border-gray-200">
                            <span>Age:</span>
                            <span className="font-bold">24</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200">
                            <span>Sex:</span>
                            <span className="font-bold">Male</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200">
                            <span>From:</span>
                            <span className="font-bold">Japan</span>
                        </div>
                        <div className="pt-2">
                            <span>Likes:</span>
                            <div className="flex gap-2 mt-1">
                                <span className="border border-black px-2 rounded-full text-sm">Ramen</span>
                                <span className="border border-black px-2 rounded-full text-sm">History</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button 
                  onClick={() => setCurrentView('CHAT')}
                  className="hand-drawn-border w-full py-4 text-2xl font-bold mt-6 hover:bg-black hover:text-white hand-drawn-btn flex items-center justify-center gap-2"
                >
                  Say Hi! <span>➡</span>
                </button>
              </div>
            )}

            {/* VIEW: CHAT */}
            {currentView === 'CHAT' && (
              <div className="flex flex-col h-full animate-fade-in">
                {/* Chat Header */}
                <div className="flex items-center border-b-2 border-black pb-2 mb-4">
                    <button onClick={() => setCurrentView('MATCH')} className="mr-3">
                        <ArrowLeft />
                    </button>
                    <div>
                        <div className="text-xs opacity-60">Tour Guide</div>
                        <div className="text-xl font-bold">Yuta</div>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto space-y-4 px-1">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                            <div 
                                className={`
                                    max-w-[80%] p-3 text-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.2)]
                                    ${msg.sender === 'me' 
                                        ? 'bg-white rounded-t-xl rounded-bl-xl rounded-br-none' 
                                        : 'bg-[#eee] rounded-t-xl rounded-br-xl rounded-bl-none'}
                                `}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="mt-4 pt-2 border-t-2 border-black flex gap-2">
                    <input 
                        type="text" 
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type something..."
                        className="flex-1 hand-drawn-border px-3 py-2 bg-transparent outline-none text-lg"
                    />
                    <button 
                        onClick={handleSendMessage}
                        className="hand-drawn-border p-3 hover:bg-black hover:text-white transition-colors"
                    >
                        <Send size={20} />
                    </button>
                </div>
              </div>
            )}

          </div>

          {/* --- BOTTOM NAVIGATION --- */}
          <div className="h-16 bg-[#fdfbf7] border-t-4 border-[#222] flex justify-around items-center z-10 shrink-0">
            <button 
                onClick={() => setCurrentView('HOME')} 
                className={`p-2 transition-transform hover:scale-110 ${currentView === 'HOME' ? 'opacity-100' : 'opacity-50'}`}
            >
                <User size={28} strokeWidth={2.5} />
            </button>
            <button 
                onClick={() => setCurrentView('HOME')}
                className="p-2 transition-transform hover:scale-110 opacity-50 hover:opacity-100"
            >
                <Search size={28} strokeWidth={2.5} />
            </button>
            <button className="p-2 transition-transform hover:scale-110 opacity-50 hover:opacity-100">
                <Plane size={28} strokeWidth={2.5} />
            </button>
            <button className="p-2 transition-transform hover:scale-110 opacity-50 hover:opacity-100">
                <Settings size={28} strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

