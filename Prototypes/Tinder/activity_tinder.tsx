import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  User, 
  Layers, 
  X, 
  Check, 
  Send, 
  ChevronLeft, 
  MapPin, 
  Users, 
  Settings, 
  Edit3,
  Beer,
  Mountain,
  Gamepad2,
  Sun,
  Coffee,
  LucideIcon
} from 'lucide-react';

// --- Types ---
interface Activity {
  id: number;
  title: string;
  details: string;
  location: string;
  participants: number;
  Icon: LucideIcon;
  color: string;
}

interface Message {
  id: number;
  sender: string;
  text: string;
  isMe: boolean;
}

// --- Mock Data ---
const INITIAL_ACTIVITIES: Activity[] = [
  { 
    id: 1, 
    title: 'Bar Hopping', 
    details: 'Hitting up 3 dive bars downtown. First round is on me! We are meeting at The Rusty Nail and then heading to The Dive. Cash only places, so bring some bills.', 
    location: 'Downtown', 
    participants: 4,
    Icon: Beer,
    color: 'bg-blue-100'
  },
  { 
    id: 2, 
    title: 'Sunday Hike', 
    details: 'Easy 5k trail. Bring your dogs! We start at the north trailhead. The path is a bit rocky so wear good shoes. Afterwards we might grab a smoothie.', 
    location: 'Greenbelt Park', 
    participants: 8,
    Icon: Mountain,
    color: 'bg-green-100'
  },
  { 
    id: 3, 
    title: 'Board Game Night', 
    details: 'Catan and Ticket to Ride. Pizza provided. BYOB. We usually play until around 11pm. If you have any requests, put them in the chat!', 
    location: 'Community Center', 
    participants: 3,
    Icon: Gamepad2,
    color: 'bg-yellow-100'
  },
  { 
    id: 4, 
    title: 'Morning Yoga', 
    details: 'Sunrise session by the lake. Beginners welcome. Bring a mat. We will focus on Hatha flow. Namaste!', 
    location: 'Lakefront', 
    participants: 12,
    Icon: Sun,
    color: 'bg-purple-100'
  },
  { 
    id: 5, 
    title: 'Code & Coffee', 
    details: 'Working on side projects together. fast wifi and good brew. Come hang out and code.', 
    location: 'The Grind Cafe', 
    participants: 5,
    Icon: Coffee,
    color: 'bg-orange-100'
  },
];

const INITIAL_MESSAGES: Record<number, Message[]> = {
  1: [
    { id: 1, sender: "Alice", text: "Which bar are we starting at?", isMe: false },
    { id: 2, sender: "Host", text: "The Rusty Nail at 8pm!", isMe: false },
  ],
  2: [
    { id: 1, sender: "Bob", text: "Is it muddy today?", isMe: false },
  ],
};

// --- Animations ---
const cardVariants = {
  enter: { scale: 0.95, opacity: 0.8, y: 10, x: 0 },
  center: { 
    scale: 1, 
    opacity: 1, 
    y: 0, 
    x: 0, 
    rotate: 0,
    transition: { duration: 0.3 }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? 400 : -400,
    rotate: direction > 0 ? 15 : -15,
    opacity: 0,
    transition: { duration: 0.3 }
  })
};

// --- Components ---

// 1. Activity Card (Just Content, No Buttons)
const ActivityCard = ({ 
  activity, 
  direction,
}: { 
  activity: Activity; 
  direction: number;
}) => {
  const ActivityIcon = activity.Icon;

  return (
    <motion.div
      key={activity.id}
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute top-0 left-0 w-full h-full border-4 border-black rounded-3xl flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white z-10 overflow-hidden"
    >
      <div className="flex-1 flex flex-col p-6 overflow-hidden">
        {/* Vector Icon Image Area */}
        <div className={`w-full aspect-square ${activity.color} border-4 border-black rounded-2xl mb-6 flex items-center justify-center shrink-0`}>
          <ActivityIcon size={80} strokeWidth={1.5} className="text-black opacity-80" />
        </div>
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <h2 className="text-3xl font-black mb-1 uppercase tracking-tight leading-none">{activity.title}</h2>
          
          <div className="flex items-center gap-2 text-sm font-bold border-b-4 border-black pb-4 mb-4 mt-2">
            <MapPin size={16} />
            <span>{activity.location}</span>
            <span className="mx-2 text-gray-400">|</span>
            <Users size={16} />
            <span>{activity.participants}</span>
          </div>
          
          <div>
            <h3 className="text-xs font-black uppercase mb-2 text-gray-400">What we're doing</h3>
            <p className="text-xl font-bold leading-snug pb-4">{activity.details}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 2. Chat List Component
const ChatList = ({ chats, onOpenChat }: { chats: Activity[], onOpenChat: (id: number) => void }) => {
  if (chats.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8 opacity-50">
        <div className="w-24 h-24 border-4 border-black rounded-full flex items-center justify-center mb-4 bg-gray-100">
          <MessageCircle size={40} strokeWidth={1.5} />
        </div>
        <h2 className="text-xl font-bold mb-2">No Chats Yet</h2>
        <p className="font-medium">Swipe right on activities to join their group chats!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-yellow-50">
      <div className="p-6 border-b-4 border-black bg-white sticky top-0 z-10">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Your Groups</h1>
      </div>
      <div className="p-4 flex flex-col gap-4 overflow-y-auto">
        {chats.map((chat) => (
          <div 
            key={chat.id} 
            onClick={() => onOpenChat(chat.id)}
            className="border-4 border-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer bg-white flex items-center gap-4"
          >
            <div className={`w-14 h-14 ${chat.color} rounded-full border-2 border-black shrink-0 flex items-center justify-center`}>
              <chat.Icon size={24} strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg truncate">{chat.title}</h3>
                <span className="text-xs font-bold text-gray-500">2m</span>
              </div>
              <p className="text-sm font-medium text-gray-600 truncate">Bob: Sounds good to me!</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. Chat Room Component
const ChatRoom = ({ activity, onBack }: { activity: Activity, onBack: () => void }) => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES[activity.id] || []);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMsg: Message = {
      id: Date.now(),
      sender: "Me",
      text: inputText,
      isMe: true
    };
    setMessages([...messages, newMsg]);
    setInputText("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-300 z-50">
      {/* Chat Header */}
      <div className="p-4 border-b-4 border-black flex items-center gap-3 bg-white z-10 shadow-sm">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full border-2 border-transparent hover:border-black transition-all">
          <ChevronLeft size={28} strokeWidth={3} />
        </button>
        <div className={`w-10 h-10 ${activity.color} rounded-full border-2 border-black flex items-center justify-center font-bold shrink-0`}>
          <activity.Icon size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-black text-lg truncate leading-none">{activity.title}</h2>
          <span className="text-xs font-bold text-gray-500">{activity.participants} members</span>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full border-2 border-transparent hover:border-black transition-all">
          <Settings size={24} />
        </button>
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 p-4 bg-gray-100 flex flex-col gap-4 overflow-y-auto">
        <div className="self-center bg-yellow-200 px-4 py-1 rounded-full text-xs font-bold border-2 border-black text-black my-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          You joined the group
        </div>
        
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col max-w-[80%] ${msg.isMe ? 'self-end items-end' : 'self-start items-start'}`}>
            {!msg.isMe && <span className="text-xs font-bold mb-1 ml-1 text-gray-600">{msg.sender}</span>}
            <div className={`
              p-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]
              ${msg.isMe 
                ? 'bg-black text-white rounded-tl-xl rounded-bl-xl rounded-br-xl' 
                : 'bg-white text-black rounded-tr-xl rounded-br-xl rounded-bl-xl'}
            `}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 border-t-4 border-black bg-white pb-safe">
        <div className="flex gap-2 items-center">
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Message..." 
            className="flex-1 border-2 border-black p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black font-bold placeholder:font-normal placeholder:text-gray-400"
          />
          <button 
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="p-3 bg-black text-white border-2 border-black rounded-xl active:scale-95 disabled:opacity-50 disabled:active:scale-100 transition-all"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// 4. Profile View
const Profile = () => (
  <div className="flex flex-col h-full bg-white">
    <div className="p-8 flex flex-col items-center border-b-4 border-black bg-purple-50">
      <div className="w-32 h-32 bg-white border-4 border-black rounded-full mb-4 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <User size={64} strokeWidth={1.5} />
      </div>
      <h1 className="text-3xl font-black uppercase">Jane Doe</h1>
      <p className="text-lg font-medium text-center opacity-75">Adventurer. Coffee lover. Night owl.</p>
    </div>
    
    <div className="p-6 space-y-4">
      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Account</div>
      
      <button className="w-full bg-white border-2 border-black p-4 rounded-xl font-bold flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all">
        <span className="flex items-center gap-3">
            <Edit3 size={20}/> Edit Profile
        </span>
        <span>&rarr;</span>
      </button>
      
      <button className="w-full bg-white border-2 border-black p-4 rounded-xl font-bold flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all">
        <span className="flex items-center gap-3">
            <Settings size={20}/> Settings
        </span>
        <span>&rarr;</span>
      </button>

      <div className="mt-8 p-6 border-4 border-dashed border-gray-300 rounded-xl text-center text-gray-400 font-bold text-sm">
        Premium Features Coming Soon
      </div>
    </div>
  </div>
);

// --- Main App Shell ---

export default function App() {
  const [activeTab, setActiveTab] = useState<'activities' | 'chats' | 'profile'>('activities');
  const [activityQueue, setActivityQueue] = useState<Activity[]>(INITIAL_ACTIVITIES);
  const [joinedChats, setJoinedChats] = useState<Activity[]>([]);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  
  // Track direction for exit animation
  const [exitDirection, setExitDirection] = useState(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    setExitDirection(direction === 'right' ? 1 : -1);
    
    // Slight delay to allow state to trigger exit animation
    setTimeout(() => {
      const currentActivity = activityQueue[0];
      
      if (direction === 'right') {
        // SWIPE RIGHT: Join Chat & Remove
        if (!joinedChats.find(c => c.id === currentActivity.id)) {
          setJoinedChats(prev => [currentActivity, ...prev]);
        }
        setActivityQueue(prev => prev.slice(1));
      } else {
        // SWIPE LEFT: Move to Back of List (Carousel)
        setActivityQueue(prev => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
      }
    }, 50); 
  };

  const currentActivity = activityQueue[0];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8 font-sans selection:bg-yellow-200">
      
      {/* Phone Frame */}
      <div className="w-[375px] h-[680px] border-[8px] border-black rounded-[40px] bg-white relative flex flex-col shadow-2xl overflow-hidden ring-4 ring-gray-900/10">
        
        {/* Dynamic Notch/Header area */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-white z-50 flex justify-center pt-2">
            <div className="w-32 h-6 bg-black rounded-full"></div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative overflow-hidden bg-gray-50 mt-8">
          
          {/* View: Activities (The Stack + Buttons) */}
          <AnimatePresence mode="popLayout" custom={exitDirection}>
          {activeTab === 'activities' && (
             <motion.div 
                key="activities-tab"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="w-full h-full flex flex-col"
             >
               {/* 1. The Stack Area (Flexible Height) */}
               <div className="flex-1 relative p-4 pb-0 flex items-center justify-center">
                   
                   <div className="absolute top-4 left-6 right-6 z-0 flex justify-between items-center pointer-events-none">
                     <h1 className="text-4xl font-black italic tracking-tighter text-gray-200">FINDER</h1>
                   </div>

                   {activityQueue.length > 0 ? (
                     <div className="relative w-full h-full max-h-[460px]">
                       {/* Background Cards for visual stack depth */}
                       {activityQueue.length > 1 && (
                         <div className="absolute top-0 left-0 w-full h-full border-4 border-black rounded-3xl bg-white z-0 scale-95 translate-y-4 opacity-50"></div>
                       )}
                       
                       {/* The Active Card */}
                       <AnimatePresence custom={exitDirection}>
                         <ActivityCard 
                           key={currentActivity.id} 
                           activity={currentActivity} 
                           direction={exitDirection}
                         />
                       </AnimatePresence>
                     </div>
                   ) : (
                     <div className="text-center p-8">
                       <div className="text-6xl mb-4 animate-bounce">🎉</div>
                       <h2 className="text-2xl font-black mb-2">You're caught up!</h2>
                       <p className="mb-6 font-medium text-gray-600">You've joined all the available activities in your area.</p>
                       <button 
                        onClick={() => {
                            setActivityQueue(INITIAL_ACTIVITIES);
                            setJoinedChats([]);
                        }}
                        className="px-8 py-3 bg-black text-white border-4 border-transparent hover:border-black hover:bg-white hover:text-black font-black text-lg uppercase transition-all rounded-xl"
                       >
                         Reset Demo
                       </button>
                     </div>
                   )}
               </div>

               {/* 2. Action Buttons (Fixed Height) */}
               {activityQueue.length > 0 && (
                   <div className="h-24 p-4 flex gap-6 items-center justify-center shrink-0 mb-4 z-20">
                     <button 
                       onClick={() => handleSwipe('left')}
                       className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center hover:bg-red-100 active:scale-90 transition-all bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                     >
                       <X size={32} className="text-black" />
                     </button>
                     
                     <button 
                       onClick={() => handleSwipe('right')}
                       className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center hover:bg-green-100 active:scale-90 transition-all bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                     >
                       <Check size={32} className="text-black" />
                     </button>
                   </div>
               )}
             </motion.div>
          )}
          </AnimatePresence>

          {/* View: Chats List */}
          {activeTab === 'chats' && !activeChatId && (
            <ChatList 
              chats={joinedChats} 
              onOpenChat={(id) => setActiveChatId(id)} 
            />
          )}

          {/* View: Individual Chat Room */}
          {activeTab === 'chats' && activeChatId && (
            <div className="absolute inset-0 z-30">
               <ChatRoom 
                 activity={joinedChats.find(c => c.id === activeChatId)!} 
                 onBack={() => setActiveChatId(null)}
               />
            </div>
          )}

          {/* View: Profile */}
          {activeTab === 'profile' && <Profile />}

        </div>

        {/* Bottom Navigation */}
        {!activeChatId && (
          <nav className="h-20 border-t-4 border-black flex justify-around items-center bg-white z-20 pb-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] shrink-0">
            <button 
              onClick={() => setActiveTab('activities')}
              className={`flex flex-col items-center p-2 transition-all active:scale-95 ${activeTab === 'activities' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
              <Layers size={28} strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase mt-1 tracking-widest">Explore</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('chats')}
              className={`flex flex-col items-center p-2 transition-all active:scale-95 ${activeTab === 'chats' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
              <div className="relative">
                <MessageCircle size={28} strokeWidth={2.5} />
                {joinedChats.length > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white">{joinedChats.length}</span>
                  </div>
                )}
              </div>
              <span className="text-[10px] font-black uppercase mt-1 tracking-widest">Chats</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center p-2 transition-all active:scale-95 ${activeTab === 'profile' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
              <User size={28} strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase mt-1 tracking-widest">Profile</span>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}