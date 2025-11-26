# Locaylo Stop Motion - Travel Guide App

A beautiful stop-motion style travel guide app built with React, TypeScript, and Tailwind CSS. This prototype features a unique paper-texture UI with hand-drawn elements and smooth animations.

## Features

- 🎨 Hand-drawn paper texture UI design
- ✈️ Travel destination search and planning
- 🤝 Local tour guide matching system
- 💬 Real-time chat interface
- 📱 Mobile-first phone frame design
- 🎭 Smooth animations and transitions

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
LocayloStopMotion/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md           # This file
```

## Usage

The app simulates a complete travel guide matching experience:

1. **Home Screen**: Enter your destination
2. **Details Screen**: Set your trip dates and preferences
3. **Loading Screen**: Watch the radar animation while finding a guide
4. **Match Screen**: View your matched local tour guide's profile
5. **Chat Screen**: Start chatting with your guide

Navigate between screens using the bottom navigation bar or back buttons.

## Development

This project uses:
- Vite for fast development and optimized production builds
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

## License

This project is a prototype for educational purposes.

