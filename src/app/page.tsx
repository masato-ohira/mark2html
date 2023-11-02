'use client'

import { Converter } from '@/components/Converter'
import MarkdownEditor from '@/components/MarkdownEditor'
import { tw } from '@/utils/tw'
import dynamic from 'next/dynamic'

const HtmlEditor = dynamic(() => import('@/components/HtmlEditor'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className={tw('p-8')}>
      <div
        className={tw(
          //
          'flex',
          'justify-between',
          'items-center',
          'gap-3',
        )}
      >
        <div className={'w-[48%]'}>
          <HtmlEditor />
        </div>

        <div className='w-[4%]'>
          <Converter />
        </div>

        <div className={'w-[48%]'}>
          <MarkdownEditor />
        </div>
      </div>
    </div>
  )
}
