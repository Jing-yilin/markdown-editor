import { useCallback } from 'react'
import MonacoEditor from '@monaco-editor/react'
import { clsx } from 'clsx'
import { Toolbar } from '@/components/molecules/Toolbar'
import { useEditorStore } from '@/stores/editorStore'
import { useMarkdown } from '@/hooks/useMarkdown'

export function Editor() {
  const { content, setContent, theme, setTheme, fontSize, setFontSize } = useEditorStore()
  const html = useMarkdown(content)

  const handleEditorChange = useCallback((value: string | undefined) => {
    setContent(value || '')
  }, [setContent])

  return (
    <div className={clsx(
        'flex h-screen',
        theme === 'light' ? 'bg-white' : 'bg-gray-900'
      )}>
      <div className="flex-1 flex flex-col border-r border-gray-200 dark:border-gray-700">
        <Toolbar
          onThemeChange={setTheme}
          onFontSizeChange={setFontSize}
          settings={{ theme, fontSize, lineNumbers: false, wordWrap: true }}
        />
        <MonacoEditor
          height="calc(100vh - 40px)"
          defaultLanguage="markdown"
          value={content}
          onChange={handleEditorChange}
          theme={theme === 'light' ? 'vs' : 'vs-dark'}
          options={{
            minimap: { enabled: false },
            fontSize,
            lineHeight: 1.5,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            lineNumbers: 'off',
            glyphMargin: false,
            folding: false,
            contextmenu: false,
            suggestOnTriggerCharacters: false,
            quickSuggestions: false,
            renderLineHighlight: 'none',
            scrollbar: {
              vertical: 'hidden',
              horizontal: 'hidden'
            }
          }}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <Toolbar
          onThemeChange={setTheme}
          onFontSizeChange={setFontSize}
          settings={{ theme, fontSize, lineNumbers: false, wordWrap: true }}
        />
        <div 
          className={clsx(
            'flex-1 overflow-auto px-8 py-6',
            'prose prose-sm sm:prose lg:prose-lg mx-auto',
            'prose-headings:font-semibold prose-a:text-blue-600',
            'prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200',
            theme === 'dark' && 'prose-invert bg-gray-900'
          )}
          dangerouslySetInnerHTML={html}
        />
      </div>
    </div>
  )
}