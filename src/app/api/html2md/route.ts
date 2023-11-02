import { NextResponse } from 'next/server'
import { NodeHtmlMarkdown } from 'node-html-markdown'

export async function GET() {
  return NextResponse.json({
    ok: true,
  })
}

export async function POST(req: Request) {
  const { html } = await req.json()
  if (html) {
    const markdown = NodeHtmlMarkdown.translate(html as string)
    return NextResponse.json({
      markdown,
    })
  } else {
    const errotText = 'htmlがありません'
    return NextResponse.json(
      {
        error: errotText,
      },
      {
        status: 400,
      },
    )
  }
}
