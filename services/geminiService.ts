
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Historical Curator service using Gemini 3 Flash.
 * Always creates a fresh instance to ensure it uses the most up-to-date API key.
 */
export const getCuratorResponse = async (prompt: string, lang: 'ko' | 'en'): Promise<string> => {
  // Always use process.env.API_KEY directly as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the WRISTORY Historical Curator. Your goal is to educate users about Korean independence fighters and the history of Bitcoin in a respectful, heroic, and engaging manner. You also explain that WRISTORY preserves these legacies using Tezos blockchain technology. Always respond in the requested language: ${lang === 'ko' ? 'Korean' : 'English'}. Keep a solemn yet hopeful tone.`,
      }
    });
    // Access response text property directly (not a method)
    return response.text || "";
  } catch (error: any) {
    console.error("Curator Error:", error);
    // Handle specific API error by triggering the key selection dialog
    if (error.message?.includes("Requested entity was not found.")) {
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        window.aistudio.openSelectKey();
      }
    }
    throw error;
  }
};

/**
 * Strategy Advisor service using Gemini 3 Pro.
 * Returns structured advice for blockchain ecosystem development in JSON.
 */
export const getStrategyAdvice = async (prompt: string): Promise<any> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a world-class blockchain strategist and ecosystem architect for the 'Wristory' project. Provide advice in JSON format.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            suggestion: { type: Type.STRING },
            steps: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          // Required ordering of properties for schema consistency
          propertyOrdering: ["title", "suggestion", "steps"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("Requested entity was not found.")) {
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        window.aistudio.openSelectKey();
      }
    }
    throw error;
  }
};

/**
 * Generates professional NFT metadata based on historical activist names.
 */
export const generateNFTMetadata = async (activistName: string): Promise<any> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate professional NFT metadata for: ${activistName}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            attributes: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  trait_type: { type: Type.STRING },
                  value: { type: Type.STRING }
                }
              }
            },
            era: { type: Type.STRING }
          },
          propertyOrdering: ["name", "description", "attributes", "era"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error: any) {
    if (error.message?.includes("Requested entity was not found.")) {
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        window.aistudio.openSelectKey();
      }
    }
    throw error;
  }
};

/**
 * Generates 4K high-quality heroic portraits using Gemini 3 Pro Image.
 * High-quality image generation requires mandatory API key selection.
 */
export const generateNFTImage = async (activistName: string): Promise<string | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: `A heroic portrait of Korean Independence Activist ${activistName}. Digital art style.` }],
      },
      config: {
        imageConfig: { aspectRatio: "1:1", imageSize: "4K" }
      }
    });

    // Per guidelines, iterate through parts to find the actual image part (inlineData)
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error: any) {
    if (error.message?.includes("Requested entity was not found.")) {
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        window.aistudio.openSelectKey();
      }
    }
    throw error;
  }
};
