# The Most Over-Engineered Homework Assignment Ever

Welcome to our absolutely serious and definitely not thrown-together-at-the-last-minute collection of low-fidelity prototypes for MSE 343 (Human-Computer Interaction). This is a Next.js web app that exists solely to house four (4) interactive prototypes that we made for class. Yes, we built a whole website to display homework. No, we're not okay.

## What Even Is This

This is a web app showcases 4 prototypes that range from "questionably functional" to "surprisingly decent" and everything in between. We were supposed to explore the iterative design process of establishing requirements, designing alternatives, prototyping, and evaluation. Instead, we made these.

## The Prototypes (In Order of Absurdity)

1. **Locaylo Stop Motion** - A travel guide app that looks like someone's arts and crafts project. Features hand-drawn borders and a paper texture that screams "I discovered CSS filters."

2. **Pokemon GO (LocalCatch)** - Because nothing says "original idea" like taking Pokemon GO and making it about meeting strangers. It's like Pokemon GO but with more social anxiety.

3. **Roman Roulette (SPQR Matcher)** - Random activity matcher but make it ancient Rome. Why? Because at 2 AM, Roman Empire jokes are peak comedy.

4. **Tinder (Activity Finder)** - We literally just took Tinder's swipe mechanics and applied it to activities. Revolutionary. Groundbreaking. Probably already exists.

## Tech Stack (AKA We Might Have Gone Overboard)

- Next.js 16 (because regular React wasn't fancy enough)
- React 19 (the bleeding edge, baby)
- TypeScript (so we can pretend we know what we're doing)
- Tailwind CSS v4 (utility classes go brrr)
- Framer Motion (for animations that nobody asked for)
- Lucide React (pretty icons that make it look professional)

Yes, this is overkill for a class project. Yes, we know. No, we won't apologize.

## Project Structure (For the Organized Chaos)

```
Milestone_4/
├── app/
│   ├── layout.tsx              # The thing that wraps everything
│   ├── page.tsx                # Homepage with fancy design process cards
│   ├── globals.css             # Where the magic (read: hacks) happen
│   ├── locaylo-stop-motion/    # Prototype 1: Arts & Crafts Edition
│   ├── pokemon-go/             # Prototype 2: Pokemon Lawsuit Incoming
│   ├── roman-roulette/         # Prototype 3: SPQR Your Activities
│   └── tinder/                 # Prototype 4: Swipe Right on Fun
├── components/
│   └── Navigation.tsx          # Hamburger menu (not the food kind)
└── Prototypes/                 # Original Vite versions (the drafts)
```

## How to Actually Run This Thing

1. Install dependencies (pray they don't conflict):
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Open your browser and go to [http://localhost:3000](http://localhost:3000)

4. Marvel at what sleep deprivation can accomplish.

## Features (That Sound More Impressive Than They Are)

- **Navigation Component**: A hamburger menu that slides in from the right because we watched one too many UI/UX YouTube videos
- **Responsive Design**: It works on mobile. Barely. But it works.
- **Homepage**: Shows the design process cycle with cards that make it look like we understand design theory
- **Four Whole Prototypes**: Each one demonstrates that we can, in fact, make different things look different
- **Smooth Animations**: Because if it doesn't animate, did you even try?

## The "Design Philosophy" (Heavy Air Quotes)

Our homepage pretends to follow the design thinking process:

1. **Establish Requirements** - We asked ourselves "what's the deadline?" and went from there
2. **Design Alternatives** - Made four different things and called it a day
3. **Prototype** - You're looking at them. This is it. This is the prototype.
4. **Evaluate** - That's the professor's job, not ours

## Prototype Deep Dive (Because Length Matters for Grades)

### Locaylo Stop Motion
Remember those stop-motion videos from elementary school? We made an app that looks like that. It has:
- Hand-drawn borders (read: wavy CSS filters)
- Paper texture background (one Google search away)
- Radar animation for finding guides (it spins! wow!)
- Chat functionality (because every app needs chat)

### Pokemon GO (LocalCatch)
"What if Pokemon GO but for meeting people?" - a sentence that has definitely been said before. Features:
- Interactive map with pins (Mapbox API said hi)
- Role system: be a tourist or a local (choose your fighter)
- Profile cards with bios (stalk responsibly)
- "Request to meet" button (for the brave souls)

### Roman Roulette (SPQR Matcher)
The Roman Empire app that nobody asked for but everyone gets. Includes:
- Humorous Roman names (ChatGPT was involved)
- Loading animations that change messages (to hide the void)
- Ancient Roman aesthetic (Comic Sans was considered)
- One-click fate consultation (RNG gods decide your evening)

### Tinder (Activity Finder)
We swiped left on originality and made Tinder for activities. Contains:
- Card stack with swipe animations (Framer Motion did the heavy lifting)
- Group chat system (for coordinating poor life choices)
- Activity details with locations (Google Maps integration TBD)
- Profile management (change your name, live your truth)

## Available Scripts (The Usual Suspects)

- `npm run dev` - Start development server (your new best friend)
- `npm run build` - Build for production (why would you do this)
- `npm run start` - Start production server (seriously though, why)
- `npm run lint` - Run ESLint (prepare for disappointment)

## Development Notes (AKA What We Learned)

- Next.js App Router is cool but the learning curve is real
- Client components everywhere because we like interactivity
- Tailwind CSS v4 with @import syntax (breaking changes are fun!)
- Custom fonts from Google Fonts (because default fonts are for quitters)
- Each prototype is self-contained (no spaghetti code... mostly)
- TypeScript kept us honest (when we didn't use `any`)

## Custom Styling (The Crimes We Committed)

We added custom CSS for:
- Hand-drawn borders (filter: url('#squiggly'))
- Paper texture effects (background-image goes brrr)
- Radar animations (keyframes on keyframes)
- Custom scrollbars (because default scrollbars are ugly)
- Smooth transitions (transition: all 0.3s ease)

## Course Information (The Reason This Exists)

**MSE 343 - Human-Computer Interaction**  
Milestone 4 - Design Process Prototypes  
Created with coffee, anxiety, and questionable life choices.

## Final Thoughts

If you're reading this far into the README, you either:
1. Are grading this (hi professor!)
2. Are genuinely interested (why?)
3. Have nothing better to do (same)

Each prototype demonstrates different design patterns and interaction models. Or at least, that's what we'll say in the presentation. In reality, we just wanted to try different things and see what stuck.

This project is proof that you can absolutely over-engineer a class assignment and somehow make it work. Is it perfect? No. Does it function? Mostly. Are we proud of it? Ask us after we get the grade.

---

**Disclaimer**: Any resemblance to actual, functional applications is purely coincidental. No real users were harmed in the making of these prototypes. Side effects may include excessive scrolling, uncontrollable swiping, and an inexplicable desire to visit ancient Rome.
