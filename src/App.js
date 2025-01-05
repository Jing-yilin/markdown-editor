import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import Editor from '@monaco-editor/react';
import { marked } from 'marked';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #ffffff;
`;

const EditorContainer = styled.div`
  flex: 1;
  border-right: 1px solid #e0e0e0;
`;

const PreviewContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
`;

const Toolbar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #5f6368;
`;

const Preview = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  p {
    margin-bottom: 16px;
    line-height: 1.6;
  }

  code {
    background-color: #f6f8fa;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 85%;
  }

  pre {
    background-color: #f6f8fa;
    padding: 16px;
    border-radius: 6px;
    overflow: auto;
  }

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    margin: 0 0 16px;
  }

  ul, ol {
    padding-left: 2em;
    margin-bottom: 16px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 16px;
  }

  th, td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  tr:nth-child(2n) {
    background-color: #f6f8fa;
  }
`;

const defaultContent = `# Welcome to Markdown Editor

This is a **live preview** markdown editor that mimics Google Docs' interface with Typora's editing style.

## Features

- Real-time preview
- Clean interface
- Code syntax highlighting
- Support for tables and other markdown extensions

### Code Example

\`\`\`javascript
function greeting(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Table Example

| Feature | Status |
|---------|--------|
| Preview | ✅ |
| Editing | ✅ |
| Export  | 🚧 |
`;

function App() {
  const [content, setContent] = useState(defaultContent);

  const handleEditorChange = useCallback((value) => {
    setContent(value);
  }, []);

  const getMarkdownPreview = useCallback(() => {
    return { __html: marked(content, { breaks: true }) };
  }, [content]);

  return (
    <Container>
      <EditorContainer>
        <Toolbar>Editor</Toolbar>
        <Editor
          height="calc(100% - 40px)"
          defaultLanguage="markdown"
          value={content}
          onChange={handleEditorChange}
          theme="light"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineHeight: 21,
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
      </EditorContainer>
      <PreviewContainer>
        <Toolbar>Preview</Toolbar>
        <Preview dangerouslySetInnerHTML={getMarkdownPreview()} />
      </PreviewContainer>
    </Container>
  );
}

export default App;