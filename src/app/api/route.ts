import { NextResponse, type NextRequest } from 'next/server'

export async function GET (req: NextRequest, res: NextResponse) {
  return NextResponse.json({ msg: 'ini api folder', url: req.url })
}
