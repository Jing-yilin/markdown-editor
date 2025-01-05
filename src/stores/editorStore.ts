import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { EditorState } from '@/types/editor'

const defaultContent = `# Welcome to Markdown Editor

This is a **live preview** markdown editor with modern architecture.

## Features

- Real-time preview
- Clean interface
- Code syntax highlighting
- Dark mode support
- Customizable settings

### Code Example

\`\`\`typescript
interface User {
  name: string;
  age: number;
}

function greet(user: User) {
  return \`Hello, \${user.name}!\`;
}
\`\`\`

### Table Example

| Feature | Status |
|---------|--------|
| Preview | ✅ |
| Dark Mode | ✅ |
| Settings | ✅ |
`

export const useEditorStore = create<EditorState>()(
  persist(
    (set) => ({
      content: defaultContent,
      setContent: (content) => set({ content }),
      theme: 'light',
      setTheme: (theme) => {
        document.documentElement.className = theme
        set({ theme })
      },
      fontSize: 14,
      setFontSize: (fontSize) => set({ fontSize }),
    }),
    {
      name: 'editor-storage',
    }
  )
)