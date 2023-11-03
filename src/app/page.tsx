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
    <div className={tw('p-4 md:p-8')}>
      <div
        className={tw(
          //
          'flex',
          'flex-col',
          'md:flex-row',
          'md:justify-between',
          'md:items-center',

          'gap-10',
          'md:gap-3',
        )}
      >
        <div className={'md:w-[48%]'}>
          <HtmlEditor />
        </div>

        <div className='md:w-[4%]'>
          <Converter />
        </div>

        <div className={'md:w-[48%]'}>
          <MarkdownEditor />
        </div>
      </div>
    </div>
  )
}
