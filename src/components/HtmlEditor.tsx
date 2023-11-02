'use client'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import { execCopy } from '@/utils/execCopy'
import { useHtml } from '@/hooks/markdown'

export default function HtmlEditor() {
  const { html, setHtml } = useHtml()

  return (
    <div className='space-y-3'>
      <div className='hstack justify-between'>
        <h2 className='text-3xl font-semibold'>Html</h2>
        <button
          className='btn btn-sm'
          onClick={() => {
            execCopy(html)
          }}
        >
          COPY
        </button>
      </div>
      <AceEditor
        mode='html'
        theme='solarized_dark'
        onChange={(value: string) => {
          setHtml(value)
        }}
        value={html}
        name='html-editor'
        fontSize={16}
        showGutter={true}
        style={{
          width: '100%',
        }}
      />
    </div>
  )
}
