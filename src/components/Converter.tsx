import { useHtml, useMarkdown } from '@/hooks/markdown'
import { tw } from '@/utils/tw'
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDown,
  FaAngleUp,
} from 'react-icons/fa'

const btnClass = tw(
  //
  'btn',
  'w-24',
  'md:w-full',
  'px-0',
)

const BtnToHtml = () => {
  const { toMarkdown, loading } = useMarkdown()
  return (
    <button
      className={tw(
        //
        btnClass,
        loading ? 'btn-disabled' : '',
      )}
      onClick={toMarkdown}
    >
      <FaAngleRight className={'text-xl hidden md:block'} />
      <FaAngleDown className={'text-xl md:hidden'} />
    </button>
  )
}

const BtnToMarkdown = () => {
  const { toHtml, loading } = useHtml()
  return (
    <button
      className={tw(
        //
        btnClass,
        loading ? 'btn-disabled' : '',
      )}
      onClick={toHtml}
    >
      <FaAngleLeft className={'text-xl hidden md:block'} />
      <FaAngleUp className={'text-xl md:hidden'} />
    </button>
  )
}

export const Converter = () => {
  return (
    <div className={'hstack justify-center'}>
      <BtnToHtml />
      <BtnToMarkdown />
    </div>
  )
}
