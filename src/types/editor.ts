export interface EditorState {
  content: string
  setContent: (content: string) => void
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  fontSize: number
  setFontSize: (size: number) => void
}

export interface EditorSettings {
  theme: 'light' | 'dark'
  fontSize: number
  lineNumbers: boolean
  wordWrap: boolean
}

export interface ToolbarProps {
  onThemeChange: (theme: 'light' | 'dark') => void
  onFontSizeChange: (size: number) => void
  settings: EditorSettings
}