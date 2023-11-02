import { useHtml, useMarkdown } from '@/hooks/markdown'
import { tw } from '@/utils/tw'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

const BtnToHtml = () => {
  const { toMarkdown, loading } = useMarkdown()
  return (
    <button
      className={tw(
        //
        'btn w-full',
        loading ? 'btn-disabled' : '',
      )}
      onClick={toMarkdown}
    >
      <FaAngleRight className={'text-xl'} />
    </button>
  )
}

const BtnToMarkdown = () => {
  const { toHtml, loading } = useHtml()
  return (
    <button
      className={tw(
        //
        'btn w-full',
        loading ? 'btn-disabled' : '',
      )}
      onClick={toHtml}
    >
      <FaAngleLeft className={'text-xl'} />
    </button>
  )
}

export const Converter = () => {
  return (
    <div className={'space-y-4'}>
      <BtnToHtml />
      <BtnToMarkdown />
    </div>
  )
}
