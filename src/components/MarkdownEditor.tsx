'use client'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-markdown'
import 'ace-builds/src-noconflict/theme-solarized_light'
import { execCopy } from '@/utils/execCopy'
import { useMarkdown } from '@/hooks/markdown'

export default function MarkdownEditor() {
  const { markdown, setMarkdown } = useMarkdown()
  return (
    <div className='space-y-3'>
      <div className='hstack justify-between'>
        <h2 className='text-3xl font-semibold'>Markdown</h2>
        <button
          className='btn btn-sm'
          onClick={() => {
            execCopy(markdown)
          }}
        >
          COPY
        </button>
      </div>
      <AceEditor
        mode='markdown'
        theme='solarized_light'
        onChange={(value: string) => {
          setMarkdown(value)
        }}
        value={markdown}
        name='markdown-editor'
        fontSize={16}
        showGutter={true}
        style={{
          width: '100%',
        }}
      />
    </div>
  )
}
