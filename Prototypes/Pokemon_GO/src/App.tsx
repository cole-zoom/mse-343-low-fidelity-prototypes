import React, { useState, useEffect } from 'react';
import { MapPin, User, Navigation, MessageCircle, Settings, X, Heart, Check } from 'lucide-react';

/**
 * MOCK DATA
 * Simulating the "Pokemon" (People) around you.
 */
const MOCK_PEOPLE = [
  { id: 1, name: 'Sarah', role: 'Local', bio: 'Expert on the best coffee spots.', x: 30, y: 30, avatar: '☕️', status: 'Online' },
  { id: 2, name: 'Mike', role: 'Tourist', bio: 'Looking for hiking buddies!', x: 70, y: 20, avatar: '🎒', status: 'Online' },
  { id: 3, name: 'Jessica', role: 'Local', bio: 'I know all the hidden history facts.', x: 20, y: 70, avatar: '📚', status: 'Busy' },
  { id: 4, name: 'David', role: 'Tourist', bio: 'First time here, loves photography.', x: 80, y: 60, avatar: '📸', status: 'Online' },
  { id: 5, name: 'Alex', role: 'Local', bio: 'Foodie guide available!', x: 50, y: 85, avatar: '🍕', status: 'Online' },
];

/**
 * APP COMPONENT
 */
export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'auth' | 'map'>('auth');
  const [currentUser, setCurrentUser] = useState<{ name: string; role: 'Local' | 'Tourist' } | null>(null);

  const handleLogin = (name: string, role: 'Local' | 'Tourist') => {
    setCurrentUser({ name, role });
    setCurrentScreen('map');
  };

  return (
    <div className="w-full h-screen bg-gray-900 text-white font-sans overflow-hidden">
      {currentScreen === 'auth' ? (
        <AuthScreen onLogin={handleLogin} />
      ) : (
        <MapScreen user={currentUser} onLogout={() => setCurrentScreen('auth')} />
      )}
    </div>
  );
}

/**
 * AUTH SCREEN
 * Simple Login/Create Account toggle
 */
function AuthScreen({ onLogin }: { onLogin: (name: string, role: 'Local' | 'Tourist') => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [role, setRole] = useState<'Local' | 'Tourist'>('Tourist');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(name, role);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-500 to-teal-700 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl w-full max-w-sm shadow-2xl z-10">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <MapPin size={40} className="text-teal-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2 text-white">LocalCatch</h1>
        <p className="text-center text-teal-100 mb-8">
          {isLogin ? 'Welcome back, explorer!' : 'Join the map and meet new people.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-teal-100 mb-1 ml-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-teal-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              placeholder="e.g. Ash Ketchum"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-teal-100 mb-1 ml-1">I am a...</label>
            <div className="flex bg-white/20 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setRole('Tourist')}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${role === 'Tourist' ? 'bg-white text-teal-700 shadow-sm' : 'text-teal-100 hover:bg-white/10'}`}
              >
                Tourist
              </button>
              <button
                type="button"
                onClick={() => setRole('Local')}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${role === 'Local' ? 'bg-white text-teal-700 shadow-sm' : 'text-teal-100 hover:bg-white/10'}`}
              >
                Local
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-400 hover:bg-teal-300 text-teal-900 font-bold py-4 rounded-xl shadow-lg transform transition active:scale-95 mt-4"
          >
            {isLogin ? 'Start Exploring' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button onClick={() => setIsLogin(!isLogin)} className="text-sm text-teal-100 hover:text-white underline">
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * MAP SCREEN
 * The core visual experience mimicking Pokemon Go
 */
function MapScreen({ user, onLogout }: { user: any, onLogout: () => void }) {
  const [selectedPerson, setSelectedPerson] = useState<any>(null);
  const [radarPing, setRadarPing] = useState(false);

  // Radar animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRadarPing(true);
      setTimeout(() => setRadarPing(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative bg-[#8CD790] overflow-hidden select-none">
      
      {/* --- MAP VISUALS (CSS Art) --- */}
      
      {/* Roads */}
      <div className="absolute top-0 left-1/3 w-24 h-full bg-[#E0E0E0] transform -skew-x-12 border-l-4 border-r-4 border-white/50"></div>
      <div className="absolute top-1/2 left-0 w-full h-32 bg-[#E0E0E0] transform -skew-y-6 border-t-4 border-b-4 border-white/50"></div>
      <div className="absolute bottom-0 right-1/4 w-16 h-full bg-[#E0E0E0] transform skew-x-6"></div>
      
      {/* Water / Parks */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-[#64B5F6] rounded-full opacity-80 border-4 border-[#90CAF9]"></div>
      <div className="absolute bottom-20 left-10 w-64 h-40 bg-[#4CAF50] rounded-3xl opacity-60"></div>
      
      {/* Buildings (Abstract blocks) */}
      <div className="absolute top-32 left-8 w-16 h-16 bg-[#A5D6A7] transform rotate-12 rounded-lg"></div>
      <div className="absolute bottom-40 right-10 w-20 h-24 bg-[#A5D6A7] transform -rotate-6 rounded-lg"></div>


      {/* --- INTERACTIVE ELEMENTS --- */}

      {/* Mock People Pins */}
      {MOCK_PEOPLE.map((person) => (
        <button
          key={person.id}
          onClick={() => setSelectedPerson(person)}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-500 hover:scale-110 z-20"
          style={{ left: `${person.x}%`, top: `${person.y}%` }}
        >
          {/* Status Indicator */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-600 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {person.name}
          </div>
          
          {/* The Pin */}
          <div className={`w-12 h-12 rounded-full border-4 shadow-lg flex items-center justify-center text-xl bg-white relative
            ${person.role === 'Local' ? 'border-purple-500' : 'border-orange-500'}`}>
            {person.avatar}
            {/* Pulse effect if online */}
            {person.status === 'Online' && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </div>
          
          {/* Ground shadow */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-[2px]"></div>
        </button>
      ))}

      {/* PLAYER (You) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
        {/* Radar Ring Animation */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/30 transition-all duration-1000 ease-out
          ${radarPing ? 'w-64 h-64 opacity-0' : 'w-0 h-0 opacity-100'}`}></div>
        
        {/* Player Avatar */}
        <div className="relative">
          <div className="w-16 h-16 bg-blue-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center relative z-10">
            <User size={32} className="text-white" />
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm whitespace-nowrap">
            You ({user.role})
          </div>
        </div>
      </div>

      {/* --- UI OVERLAYS --- */}
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-50 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md rounded-xl p-2 shadow-lg pointer-events-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
            {user.name[0]}
          </div>
          <div>
            <div className="text-xs text-gray-500 font-bold uppercase">Level 3 {user.role}</div>
            <div className="w-24 h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
              <div className="w-2/3 h-full bg-yellow-400"></div>
            </div>
          </div>
        </div>

        <button 
          onClick={onLogout}
          className="bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg pointer-events-auto text-gray-700 hover:bg-red-50 hover:text-red-500"
        >
          <Settings size={24} />
        </button>
      </div>

      {/* Bottom Floating Menu */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
         <button className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-600 transform transition hover:scale-110 active:scale-95">
           <Navigation size={20} />
         </button>
         
         {/* Main Action Button (PokeBall style) */}
         <button className="w-20 h-20 bg-gradient-to-b from-red-500 to-red-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white relative overflow-hidden transform transition hover:-translate-y-2 active:translate-y-0 active:scale-95 group">
            <div className="absolute top-1/2 w-full h-1 bg-gray-800/20"></div>
            <div className="w-8 h-8 bg-white rounded-full border-4 border-gray-300 shadow-inner z-10 group-hover:scale-110 transition-transform"></div>
         </button>

         <button className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-600 transform transition hover:scale-110 active:scale-95">
           <MessageCircle size={20} />
         </button>
      </div>


      {/* --- MODALS --- */}
      
      {/* Profile Card (Pokedex Style) */}
      {selectedPerson && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl transform transition-all animate-in zoom-in-95 duration-200">
            {/* Card Header */}
            <div className={`h-24 ${selectedPerson.role === 'Local' ? 'bg-purple-100' : 'bg-orange-100'} relative`}>
              <button 
                onClick={() => setSelectedPerson(null)}
                className="absolute top-4 right-4 bg-white/50 hover:bg-white p-1 rounded-full text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Card Body */}
            <div className="px-6 pb-6 -mt-12 relative">
              <div className="flex justify-between items-end mb-4">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border-4 border-white flex items-center justify-center text-4xl">
                  {selectedPerson.avatar}
                </div>
                <div className="mb-2 flex gap-2">
                   <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                     ${selectedPerson.role === 'Local' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
                     {selectedPerson.role}
                   </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800">{selectedPerson.name}</h2>
              <p className="text-gray-500 text-sm mb-4">500m away • {selectedPerson.status}</p>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-gray-600 italic">"{selectedPerson.bio}"</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <RequestButton name={selectedPerson.name} />
                
                <button className="w-full py-3 rounded-xl border-2 border-gray-100 font-semibold text-gray-500 hover:bg-gray-50 transition-colors">
                  View Full Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * REQUEST BUTTON COMPONENT
 * Handles the "Sending..." state for requesting a meet
 */
function RequestButton({ name }: { name: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleClick = () => {
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 1500);
  };

  if (status === 'sent') {
    return (
      <button disabled className="w-full py-3 bg-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 cursor-default">
        <Check size={20} /> Request Sent!
      </button>
    );
  }

  return (
    <button 
      onClick={handleClick}
      disabled={status === 'sending'}
      className={`w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-95
        ${status === 'sending' ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-200'}`}
    >
      {status === 'sending' ? (
        'Sending...'
      ) : (
        <>
          <Heart size={20} className="fill-white/20" /> Request to Meet
        </>
      )}
    </button>
  );
}

