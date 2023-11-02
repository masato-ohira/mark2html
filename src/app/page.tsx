'use client'

import { useMarkdown } from '@/hooks/useMarkdown'
import { tw } from '@/utils/tw'
import dynamic from 'next/dynamic'

const CodeEditor = dynamic(() => import('@/components/CodeEditor'), {
  ssr: false,
})

export default function Home() {
  const { markdown, toMarkdown, html, setHtml, cpMarkdown } = useMarkdown()

  return (
    <div
      className={tw(
        //
        'container',
        'max-w-5xl',
        'mx-auto',
        'py-8',
        'px-4',
        'space-y-8',
      )}
    >
      <h1
        className={tw(
          //
          'text-5xl',
          'font-semibold',
        )}
      >
        HTML to Markdown
      </h1>

      <div className='space-y-2'>
        <label className={'font-semibold'}>HTMLを入力してください</label>
        {/* <textarea
          className={tw(
            //
            'textarea',
            'textarea-bordered',
            'w-full',
            'min-h-[320px]',
          )}
          onChange={(e) => {
            setHtml(e.target.value)
          }}
        ></textarea> */}

        <CodeEditor
        // mode={'html'}
        // theme='monokai'
        // onChange={() => {}}
        // name='UNIQUE_ID_OF_DIV'
        // editorProps={{ $blockScrolling: true }}
        />
      </div>

      <div className='flex justify-between'>
        <button
          className='btn btn-primary'
          onClick={() => {
            if (html) {
              toMarkdown()
            } else {
              alert('htmlを入力してください')
            }
          }}
        >
          ↓ to-markdown
        </button>
        {markdown && (
          <>
            <div className='btn' onClick={cpMarkdown}>
              コピー
            </div>
          </>
        )}
      </div>

      {markdown && (
        <div>
          <textarea className={'textarea w-full min-h-[320px]'}>
            {markdown}
          </textarea>
        </div>
      )}
    </div>
  )
}
