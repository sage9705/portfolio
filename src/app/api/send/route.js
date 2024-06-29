import { NextResponse } from 'next/server';

const EXPRESS_SERVER_URL = 'http://localhost:5000/api/send';

export async function POST(request) {
  const body = await request.json();

  try {
    const response = await fetch(EXPRESS_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ status: 'ERROR', message: error.message }, { status: 500 });
  }
}