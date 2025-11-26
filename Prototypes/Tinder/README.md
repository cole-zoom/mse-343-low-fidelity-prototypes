# Activity Tinder

A Tinder-style app for discovering and joining local activities. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🃏 Swipe through activities with smooth animations
- 💬 Join group chats for activities you're interested in
- 👤 User profile management
- 📱 Mobile-first design with a phone frame UI
- 🎨 Modern brutalist design aesthetic

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
├── tailwind.config.js   # Tailwind config
└── postcss.config.js    # PostCSS config
```

## Usage

- **Swipe Left (X)**: Skip activity (it cycles to the back)
- **Swipe Right (✓)**: Join the activity and its group chat
- Navigate between tabs: Explore, Chats, and Profile

## License

MIT

