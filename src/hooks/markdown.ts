import { sleep } from '@/utils/sleep'
import axios from 'axios'
import { atom, useAtom, useAtomValue } from 'jotai'
import MarkdownIt from 'markdown-it'

const mdOptions: MarkdownIt.Options = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
}
const md = new MarkdownIt(mdOptions)

// atoms
// ------------------------------
const $html = atom('')
const $markdown = atom('')
const $loading = atom(false)

// hooks
// ------------------------------
export const useHtml = () => {
  const [loading, setLoading] = useAtom($loading)
  const [html, setHtml] = useAtom($html)
  const markdown = useAtomValue($markdown)

  const toHtml = async () => {
    setLoading(true)
    setHtml('')
    const res = md.render(markdown)
    await sleep(100)
    setHtml(res)
    setLoading(false)
    return true
  }

  return {
    html,
    setHtml,
    toHtml,
    loading,
  }
}

export const useMarkdown = () => {
  const [markdown, setMarkdown] = useAtom($markdown)
  const [loading, setLoading] = useAtom($loading)
  const html = useAtomValue($html)

  const toMarkdown = async () => {
    setLoading(true)
    setMarkdown('')
    const { data } = await axios.post('/api/html2md', {
      html,
    })
    setMarkdown(data.markdown)
    setLoading(false)
    return true
  }

  return {
    markdown,
    setMarkdown,
    loading,
    setLoading,
    toMarkdown,
  }
}
