# We Asked ChatGPT to Build Our Homework

Welcome to our collection of low-fidelity prototypes for MSE 343 (Human-Computer Interaction). This is a Next.js web app that exists to house four (4) interactive prototypes that we made for class. Well, "made" is a strong word. Let's say "prompted into existence."

Check it out [here](https://mse-343-low-fidelity-prototypes.vercel.app/)

## What Even Is This

This is a web app that showcases 4 prototypes that range from "questionably functional" to "surprisingly decent" and everything in between. We were supposed to explore the iterative design process of establishing requirements, designing alternatives, prototyping, and evaluation. Instead, we made these.

## The Prototypes (In Order of Absurdity)

1. **Locaylo Stop Motion** - A travel guide app that looks like someone's arts and crafts project. Features hand-drawn borders and a paper texture that screams "I asked an AI for CSS filter ideas."

2. **Pokemon GO (LocalCatch)** - Because nothing says "original idea" like taking Pokemon GO and making it about meeting strangers. It's like Pokemon GO but with more social anxiety.

3. **Roman Roulette (SPQR Matcher)** - Random activity matcher but make it ancient Rome. Why? Because ChatGPT suggested Roman names and we just rolled with it.

4. **Tinder (Activity Finder)** - We literally just took Tinder's swipe mechanics and applied it to activities. Revolutionary. Groundbreaking. Probably already exists.

## Tech Stack (That ChatGPT Recommended)

- Next.js 16 (ChatGPT said it was good)
- React 19 (seemed modern enough)
- TypeScript (for when we pretend to know what we're doing)
- Tailwind CSS v4 (utility classes because writing CSS is hard)
- Framer Motion (asked AI for animation libraries, got this)
- Lucide React (needed icons, AI delivered)

Full disclosure: about 60% of this code was written by asking "how do I make [thing] in Next.js?" and copy-pasting the response.

## Project Structure (Courtesy of npx create-next-app)

```
Milestone_4/
├── app/
│   ├── layout.tsx              # The thing that wraps everything
│   ├── page.tsx                # Homepage with fancy design process cards
│   ├── globals.css             # Where the magic (read: AI suggestions) happen
│   ├── locaylo-stop-motion/    # Prototype 1: Arts & Crafts Edition
│   ├── pokemon-go/             # Prototype 2: Pokemon Lawsuit Incoming
│   ├── roman-roulette/         # Prototype 3: SPQR Your Activities
│   └── tinder/                 # Prototype 4: Swipe Right on Fun
├── components/
│   └── Navigation.tsx          # Hamburger menu (not the food kind)
└── Prototypes/                 # Original Vite versions (the drafts)
```

## How to Actually Run This Thing

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Open your browser and go to [http://localhost:3000](http://localhost:3000)

4. Enjoy the fruits of AI-assisted labor.

## Features (That Sound More Impressive Than They Are)

- **Navigation Component**: A hamburger menu that slides in from the right (asked ChatGPT "how to make a slide-in menu in React")
- **Responsive Design**: It works on mobile. We think. ChatGPT said it would.
- **Homepage**: Shows the design process cycle with cards (prompt: "make me a nice homepage with cards")
- **Four Whole Prototypes**: Each one demonstrates that we can, in fact, ask AI to make different things
- **Smooth Animations**: Because ChatGPT knows Framer Motion better than we do

## The "Design Philosophy" (Heavy Air Quotes)

Our homepage pretends to follow the design thinking process:

1. **Establish Requirements** - Googled "design process steps" and found four of them
2. **Design Alternatives** - Made four different things and called it a day
3. **Prototype** - You're looking at them. This is it. This is the prototype.
4. **Evaluate** - That's the professor's job, not ours

## Prototype Deep Dive (Because Length Matters for Grades)

### Locaylo Stop Motion
Remember those stop-motion videos from elementary school? We made an app that looks like that. It has:
- Hand-drawn borders (ChatGPT provided the SVG filter code)
- Paper texture background (one Google image search away)
- Radar animation for finding guides (copy-pasted from Stack Overflow)
- Chat functionality (because every app needs chat, apparently)

### Pokemon GO (LocalCatch)
"What if Pokemon GO but for meeting people?" - a prompt we definitely gave to an AI. Features:
- Interactive map with pins (asked ChatGPT about map libraries)
- Role system: be a tourist or a local (choose your fighter)
- Profile cards with bios (standard UI components)
- "Request to meet" button (for the brave souls)

### Roman Roulette (SPQR Matcher)
The Roman Empire app that nobody asked for but ChatGPT named. Includes:
- Humorous Roman names (100% AI-generated, obviously)
- Loading animations that change messages (to hide loading times)
- Ancient Roman aesthetic (prompt: "make it look ancient Roman")
- One-click fate consultation (RNG decides your evening)

### Tinder (Activity Finder)
We swiped left on originality and asked AI how to make swipeable cards. Contains:
- Card stack with swipe animations (Framer Motion example from the docs)
- Group chat system (for coordinating activities)
- Activity details with locations (hardcoded, don't judge)
- Profile management (change your name, live your truth)

## Available Scripts (The Usual Suspects)

- `npm run dev` - Start development server (your new best friend)
- `npm run build` - Build for production (why would you do this)
- `npm run start` - Start production server (seriously though, why)
- `npm run lint` - Run ESLint (prepare for disappointment)

## Development Notes (AKA What We Learned)

- ChatGPT is pretty good at explaining Next.js App Router
- Client components everywhere because AI suggested it
- Tailwind CSS v4 syntax is different and we had to re-prompt a few times
- Custom fonts from Google Fonts (ChatGPT picked nice ones)
- Each prototype is self-contained (AI made them that way)
- TypeScript errors were fixed by asking "why is TypeScript yelling at me"

## Custom Styling (The AI Suggestions)

We added custom CSS for:
- Hand-drawn borders (ChatGPT knew about SVG filters)
- Paper texture effects (background-image suggestion)
- Radar animations (keyframe code from AI)
- Custom scrollbars (prompt: "how to style scrollbars")
- Smooth transitions (Tailwind classes mostly)

## Course Information (The Reason This Exists)

**MSE 343 - Human-Computer Interaction**  
Milestone 4 - Design Process Prototypes  
Created with ChatGPT, Claude, and a little bit of manual debugging.

## Final Thoughts

If you're reading this far into the README, you either:
1. Are grading this (hi professor!)
2. Are genuinely interested (why?)
3. Have nothing better to do (same)

Each prototype demonstrates different design patterns and interaction models. Or at least, that's what ChatGPT told us they demonstrate. In reality, we just wanted to see what AI could help us build in a limited timeframe.

This project is proof that you can absolutely use AI to build a class assignment and somehow make it work. Is it perfect? No. Does it function? Mostly. Did we learn anything? Probably not as much as if we'd built it from scratch, but we learned how to prompt effectively.

---

**Disclaimer**: Any resemblance to actual, functional applications is purely coincidental. No real users were harmed in the making of these prototypes. Side effects may include excessive scrolling, uncontrollable swiping, and an inexplicable desire to visit ancient Rome. AI was consulted for approximately 60-80% of the implementation. We did the other 20-40%, mainly fixing the stuff AI got wrong.
