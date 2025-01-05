# Modern Markdown Editor

A modern Markdown editor built with React, TypeScript, and Atomic Design principles.

## Features

- 📝 Real-time Markdown preview
- 🌓 Dark mode support
- 🔤 Adjustable font size
- 💾 Persistent settings
- 🎨 Clean and modern interface
- 📱 Responsive design
- ⚡ Fast development experience

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Editor**: Monaco Editor
- **Markdown Parser**: Marked
- **Architecture**: Atomic Design

## Project Structure

```
src/
├── components/        # Components following Atomic Design
│   ├── atoms/        # Basic building blocks
│   ├── molecules/    # Combinations of atoms
│   └── organisms/    # Complex components
├── features/         # Feature modules
├── hooks/           # Custom React hooks
├── stores/          # State management
├── styles/          # Global styles
├── types/           # TypeScript types
└── utils/           # Utility functions
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Jing-yilin/markdown-editor.git
```

2. Install dependencies:
```bash
cd markdown-editor
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:8966 in your browser

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

MIT