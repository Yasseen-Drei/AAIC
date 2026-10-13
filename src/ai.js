import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })

export default async function generateAIResponse(ingredients) {
  try {
    const response = await ai.models.generateContent({
      model: "models/gemini-3.8-flash",
      contents: `Give me a quick 3-step arabic only (could be multi cultural) recipe using ${ingredients}. you can use abasic ingredients that were not listed but 
      are generally in every household, you can also not use some ingredients if needed`,
    })
    return response.text
  } catch (error) {
    console.error("Gemini Error:", error)
    if (error?.status === 503 || error?.code === 503) {
      return "ERROR503"
    }
    return "err"
  }
}