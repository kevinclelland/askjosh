import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const ASSISTANT_ID = process.env.NEXT_PUBLIC_OPENAI_ASSISTANT_ID;