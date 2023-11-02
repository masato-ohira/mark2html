import { NextResponse } from 'next/server'
export async function GET(req: Request) {
  console.log(req)
  return NextResponse.json({
    ok: true,
  })
}

export async function POST(req: Request) {
  const json = await req.json()
  return NextResponse.json(json)
}
