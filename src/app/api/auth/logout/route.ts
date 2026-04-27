import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Logout is handled on the client side by clearing localStorage
  // This endpoint can be used for additional cleanup if needed
  return NextResponse.json({ success: true });
}
