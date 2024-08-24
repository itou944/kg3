// app/api/hello/route.js

import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({ message: 'Hello from the API!' });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ 
    message: 'Hello from the API!',
    youSaid: body.message || 'Nothing' 
  });
}