import { useMemo } from 'react'
import { marked } from 'marked'

export function useMarkdown(content: string) {
  return useMemo(() => {
    return {
      __html: marked(content, {
        breaks: true,
        gfm: true,
      })
    }
  }, [content])
}