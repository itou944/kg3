"use client"

//src/app/api/ai-response/route.js


import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import servicesPreprompt from '../../../constants/constants';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Constants

export async function POST(request) {
  try {
    const { keyGunId, message } = await request.json();

    // Validate the incoming data
    if (!keyGunId || !message) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }

    // Find the matching service based on keyGunId
    const selectedService = servicesPreprompt.find(service => service.id === keyGunId);

    // If no matching service is found, use a default prompt
    const prompt = selectedService ? selectedService.prompt : "You are an AI assistant. Please provide a helpful response.";

    // Generate response from OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 300
    });

    // Return the generated response
    return NextResponse.json({ content: response.choices[0].message.content });
  } catch (error) {
    console.error('Error generating AI response:', error);
    return NextResponse.json({ error: 'Failed to generate AI response' }, { status: 500 });
  }
}
