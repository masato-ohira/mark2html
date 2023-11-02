'use client'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'

const handleOnChange = () => {
  console.log('Changed!')
}

export default function CodeEditor() {
  return (
    <AceEditor
      mode='javascript'
      theme='monakai'
      onChange={handleOnChange}
      name='editor01'
    />
  )
}
