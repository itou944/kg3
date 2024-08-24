import axios from 'axios';
import { BOT_ROLES } from '../constants/constants';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openaiClient = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`
  }
});

export const generateBotResponse = async (query, botName) => {
  const role = BOT_ROLES[botName.toUpperCase()] || BOT_ROLES.BLENDER; // Default to Blender if bot not found

  try {
    const response = await openaiClient.post('', {
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: role },
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