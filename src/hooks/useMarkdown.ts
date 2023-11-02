import axios from 'axios'
import { useState } from 'react'

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const useMarkdown = () => {
  const [markdown, setMarkdown] = useState('')
  const [html, setHtml] = useState('')

  const toMarkdown = async () => {
    setMarkdown('')
    // await sleep(200)
    const { data } = await axios.post('/api/markdown', {
      html,
    })
    setMarkdown(data.markdown)
  }

  const cpMarkdown = () => {
    // テキストをコピーするための一時的な要素を作成
    var tempElement = document.createElement('textarea')
    tempElement.value = markdown
    document.body.appendChild(tempElement)

    // テキストを選択してコピー
    tempElement.select()
    document.execCommand('copy')

    // 一時的な要素を削除
    document.body.removeChild(tempElement)

    // コピー完了のメッセージなどを表示する場合
    alert('テキストがクリップボードにコピーされました')
  }

  return {
    markdown,
    toMarkdown,
    html,
    setHtml,
    cpMarkdown,
  }
}
