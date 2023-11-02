export const execCopy = (str: string) => {
  // テキストをコピーするための一時的な要素を作成
  var tempElement = document.createElement('textarea')
  tempElement.value = str
  document.body.appendChild(tempElement)

  // テキストを選択してコピー
  tempElement.select()
  document.execCommand('copy')

  // 一時的な要素を削除
  document.body.removeChild(tempElement)

  // コピー完了のメッセージなどを表示する場合
  alert('クリップボードにコピーしました')
}
