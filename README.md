# Design Process Prototypes - MSE 343

A Next.js web application showcasing 4 interactive prototypes, inspired by the iterative design process of establishing requirements, designing alternatives, prototyping, and evaluation.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4
- **Beautiful Homepage**: Displays the design process cycle with visual cards for each stage
- **4 Interactive Prototypes**:
  1. **Locaylo Stop Motion** - Travel guide matching app with paper/stop-motion aesthetic
  2. **Pokemon GO** - Location-based local/tourist connection platform
  3. **Roman Roulette** - Random activity matcher with Roman theme
  4. **Tinder** - Activity-based social connection app (swipe interface)
- **Navigation Component**: Hamburger menu with smooth animations for easy routing
- **Responsive Design**: Works seamlessly across devices

## 📁 Project Structure

```
Milestone_4/
├── app/
│   ├── layout.tsx              # Root layout with navigation
│   ├── page.tsx                # Homepage with design process
│   ├── globals.css             # Global styles + Tailwind
│   ├── locaylo-stop-motion/    # Prototype 1
│   ├── pokemon-go/             # Prototype 2
│   ├── roman-roulette/         # Prototype 3
│   └── tinder/                 # Prototype 4
├── components/
│   └── Navigation.tsx          # Reusable navigation component
└── Prototypes/                 # Original Vite prototypes (reference)
```

## 🛠️ Setup & Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Philosophy

The homepage is inspired by the design thinking process:

1. **Establish Requirements** ✓ - Define user needs and goals
2. **Design Alternatives** ✏️ - Explore multiple solutions
3. **Prototype** 🔨 - Build interactive demonstrations
4. **Evaluate** 📊 - Assess effectiveness through testing

Each prototype demonstrates different UI/UX patterns and interaction models, showcasing the iterative nature of design.

## 🧭 Navigation

The app features a hamburger menu in the top-right corner that slides in from the right. It provides:
- Quick access to the homepage
- Links to all 4 prototypes
- Smooth animations and transitions
- Backdrop overlay for focus

## 🎯 Prototypes Overview

### 1. Locaylo Stop Motion
A travel tour guide matching app with a unique paper/stop-motion design aesthetic. Features:
- Hand-drawn borders and animations
- Paper texture background
- Radar animation for finding guides
- Chat functionality with matched guides

### 2. Pokemon GO (LocalCatch)
Location-based platform connecting tourists with locals. Features:
- Interactive map with user pins
- Role-based system (Tourist/Local)
- Profile cards with bio information
- Request to meet functionality

### 3. Roman Roulette (SPQR Matcher)
Random activity and companion matcher with a Roman Empire theme. Features:
- Humorous Roman names and activities
- Loading animations with changing messages
- Ancient Roman aesthetic
- One-click fate consultation

### 4. Tinder (Activity Finder)
Activity-based social connection app using swipe mechanics. Features:
- Card stack with swipe animations (Framer Motion)
- Group chat system
- Activity details with location
- Profile management

## 📦 Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## 🎨 Custom Styling

The app includes custom CSS for:
- Hand-drawn borders (Locaylo)
- Paper texture effects
- Radar animations
- Custom scrollbars
- Smooth transitions

## 🚧 Development Notes

- Uses Next.js App Router for file-based routing
- Client components used for interactive prototypes
- Tailwind CSS v4 with @import syntax
- Custom fonts loaded from Google Fonts
- All prototypes are fully self-contained

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎓 Course Information

Created for **MSE 343 - Human-Computer Interaction**  
Milestone 4 - Design Process Prototypes

---

**Note**: Each prototype demonstrates different design patterns and interaction models, providing a comprehensive showcase of modern web application design approaches.

