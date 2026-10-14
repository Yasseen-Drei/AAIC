import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })

export default async function generateAIResponse(ingredients) {
  try {
    const response = await ai.models.generateContent({
      model: "models/gemini-3.8-flash",
      contents: `Give me a quick 3-step arabic only (could be multi cultural) recipe using ${ingredients}. (the recipe is arabic yet you reply in english)you can use abasic ingredients that were not listed but 
      are generally in every household, you can also not use some ingredients if needed. try to mentrion the origins of the dish and where it came from. ***even though it is an arbic recipe reply in ENGLISH***`,
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