//src/lib/openai.js

// src/lib/openai.js
import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openaiClient = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`
  }
});

export const generateBotResponse = async (query, keyGunId) => {
  const service = servicesPreprompt.find(s => s.id === keyGunId);
  if (!service) {
    throw new Error('Invalid service ID');
  }

  try {
    const response = await openaiClient.post('', {
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: service.prompt },
        { role: 'user', content: query }
      ],
      temperature: 0.7,
      max_tokens: 300
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw new Error('Failed to generate AI response');
  }
};