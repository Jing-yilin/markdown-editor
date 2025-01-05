import { Button } from '@/components/atoms/Button'
import type { ToolbarProps } from '@/types/editor'

export function Toolbar({ onThemeChange, onFontSizeChange, settings }: ToolbarProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-editor-toolbar border-b border-editor-border">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onThemeChange(settings.theme === 'light' ? 'dark' : 'light')}
      >
        {settings.theme === 'light' ? '🌙' : '☀️'}
      </Button>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onFontSizeChange(settings.fontSize - 1)}
          disabled={settings.fontSize <= 12}
        >
          -
        </Button>
        <span className="text-sm">{settings.fontSize}px</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onFontSizeChange(settings.fontSize + 1)}
          disabled={settings.fontSize >= 20}
        >
          +
        </Button>
      </div>
    </div>
  )
}