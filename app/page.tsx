import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf8] flex flex-col items-center justify-center p-8 paper-font">
      {/* Page Title */}
      <h1 className="text-6xl font-bold text-[#2d2d2d] mb-12 tracking-wide">
        Low Fidelity Prototypes
      </h1>

      <div className="relative w-full max-w-5xl h-[600px]">
        {/* SVG for connecting arrows */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          {/* Arrow from Top to Left */}
          <path d="M 380 120 Q 300 200 280 250" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <polygon points="275,252 283,247 278,240" fill="#2d2d2d" />

          {/* Arrow from Top to Right */}
          <path d="M 520 150 Q 650 200 720 270" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <polygon points="723,272 722,263 715,267" fill="#2d2d2d" />

          {/* Arrow from Left to Top (curved back) */}
          <path d="M 200 280 Q 150 150 350 110" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <polygon points="353,109 345,112 349,118" fill="#2d2d2d" />

          {/* Arrow from Left to Bottom */}
          <path d="M 280 350 L 380 410" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <polygon points="383,412 378,405 372,409" fill="#2d2d2d" />

          {/* Arrow from Bottom to Right */}
          <path d="M 520 440 L 680 360" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <polygon points="683,358 674,360 678,367" fill="#2d2d2d" />

          {/* Arrow from Right to Bottom (curved) */}
          <path d="M 720 360 Q 580 450 480 450" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <polygon points="477,451 485,454 484,445" fill="#2d2d2d" />

          {/* Arrow pointing into Top from top left */}
          <path d="M 200 80 L 340 90" stroke="#2d2d2d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <polygon points="343,91 335,87 336,95" fill="#2d2d2d" />
        </svg>

        {/* Locaylo Stop Motion - Top */}
        <Link href="/locaylo-stop-motion" className="absolute top-0 left-1/2 -translate-x-1/2 block" style={{ zIndex: 10 }}>
          <div className="group">
            <div className="w-56 h-40 border-[3px] border-[#2d2d2d] rounded-[60%_40%_40%_60%/50%_50%_50%_50%] bg-white flex flex-col items-center justify-center p-6 hover:bg-[#f5f5f3] transition-colors rotate-[-1deg] shadow-[2px_2px_0px_#2d2d2d]">
              <div className="text-4xl mb-2"></div>
              <div className="text-center font-bold text-lg text-[#2d2d2d] uppercase tracking-wide">
                Locaylo
              </div>
              <div className="text-center font-bold text-lg text-[#2d2d2d] uppercase tracking-wide">
                
              </div>
            </div>
          </div>
        </Link>

        {/* Pokemon GO - Left */}
        <Link href="/pokemon-go" className="absolute top-48 left-8 block" style={{ zIndex: 10 }}>
          <div className="group">
            <div className="w-56 h-40 border-[3px] border-[#2d2d2d] rounded-[45%_55%_50%_50%/60%_40%_60%_40%] bg-white flex flex-col items-center justify-center p-6 hover:bg-[#f5f5f3] transition-colors rotate-[2deg] shadow-[2px_2px_0px_#2d2d2d]">
              <div className="text-4xl mb-2">🎱</div>
              <div className="text-center font-bold text-lg text-[#2d2d2d] uppercase tracking-wide">
                Local Catch
              </div>
            </div>
          </div>
        </Link>

        {/* Roman Roulette - Bottom */}
        <Link href="/roman-roulette" className="absolute bottom-12 left-1/2 -translate-x-1/2 block" style={{ zIndex: 10 }}>
          <div className="group">
            <div className="w-56 h-40 border-[3px] border-[#2d2d2d] rounded-[50%_50%_45%_55%/55%_55%_45%_45%] bg-white flex flex-col items-center justify-center p-6 hover:bg-[#f5f5f3] transition-colors rotate-[-2deg] shadow-[2px_2px_0px_#2d2d2d]">
              <div className="text-4xl mb-2"></div>
              <div className="text-center font-bold text-lg text-[#2d2d2d] uppercase tracking-wide">
                Roman
              </div>
              <div className="text-center font-bold text-lg text-[#2d2d2d] uppercase tracking-wide">
                Roulette
              </div>
            </div>
          </div>
        </Link>

        {/* Tinder - Right */}
        <Link href="/tinder" className="absolute top-48 right-8 block" style={{ zIndex: 10 }}>
          <div className="group">
            <div className="w-56 h-40 border-[3px] border-[#2d2d2d] rounded-[55%_45%_60%_40%/50%_50%_50%_50%] bg-white flex flex-col items-center justify-center p-6 hover:bg-[#f5f5f3] transition-colors rotate-[1deg] shadow-[2px_2px_0px_#2d2d2d]">
              <div className="text-4xl mb-2"></div>
              <div className="text-center font-bold text-lg text-[#2d2d2d] uppercase tracking-wide">
                Activity Finder
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 pb-8">
        <p className="text-[#2d2d2d] text-opacity-60">
          Created for MSE 343 - Human-Computer Interaction
        </p>
      </div>
    </div>
  );
}

