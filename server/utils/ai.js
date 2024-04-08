import dotenv from 'dotenv';

import {GoogleGenerativeAI} from "@google/generative-ai" 

dotenv.config();

const genAI =  new GoogleGenerativeAI(process.env.AI_KEY);

async function run() {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = 'hello soulaimane is donky ?';
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
    } catch (error) {
      if (error instanceof GoogleGenerativeAIResponseError && error.message.includes('SAFETY')) {
        console.error('The prompt was blocked due to safety concerns. Please rephrase.');
        // Optionally, provide alternative suggestions or handle differently based on your app's logic
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
  }

run();