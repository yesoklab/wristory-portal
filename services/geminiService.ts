
import { GoogleGenAI, Type } from "@google/genai";

// Initialize GoogleGenAI inside functions to ensure it always uses the most up-to-date API key.
export const getCuratorResponse = async (prompt: string, lang: 'ko' | 'en') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the WRISTORY Historical Curator. Your goal is to educate users about Korean independence fighters and the history of Bitcoin in a respectful, heroic, and engaging manner. You also explain that WRISTORY preserves these legacies using Tezos blockchain technology. Always respond in the requested language: ${lang === 'ko' ? 'Korean' : 'English'}. Keep a solemn yet hopeful tone.`,
      }
    });
    return response.text;
  } catch (error: any) {
    console.error("Curator Error:", error);
    // Handle key selection error for models requiring specific API key access
    if (error.message?.includes("Requested entity was not found.")) {
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        window.aistudio.openSelectKey();
      }
    }
    throw error;
  }
};

export const getStrategyAdvice = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    // Upgraded to gemini-3-pro-preview for complex reasoning and ecosystem architecture.
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a world-class blockchain strategist and ecosystem architect for the 'Wristory' project. The project consists of two main pillars: 1) The official landing page (wristory.co.kr), which serves as a digital gallery and airdrop registration center, and 2) This Token Hub, which manages WRI tokenomics and NFT minting. Your mission is to provide advice on how to unify these two sites to maximize community growth, token utility, and historical preservation. You specialize in Tezos (SmartPy), FA2 tokens, and building community-led decentralized organizations (DAOs) for historical heritage projects.",
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
          required: ["title", "suggestion", "steps"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // Handle key selection error for models requiring paid keys
    if (error.message?.includes("Requested entity was not found.")) {
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        window.aistudio.openSelectKey();
      }
    }
    throw error;
  }
};

export const generateNFTMetadata = async (activistName: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate professional NFT metadata for the Korean Independence Activist: ${activistName}. Provide historical accuracy and a respectful tone.`,
      config: {
        systemInstruction: "You are a professional historian and NFT metadata architect. Generate structured data for the Wristory project's 'Independence Activist' collection. The response must be in Korean and include historical facts.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "NFT의 정식 명칭 (예: 대한의 기개, 안중근)" },
            description: { type: Type.STRING, description: "역사적 배경을 담은 3-4문장의 상세 설명" },
            attributes: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  trait_type: { type: Type.STRING },
                  value: { type: Type.STRING }
                }
              },
              description: "출생년도, 주요활동지, 훈장 등 4가지 이상의 속성"
            },
            era: { type: Type.STRING, description: "활동 시기 (예: 일제강점기 1900년대)" }
          },
          required: ["name", "description", "attributes", "era"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error: any) {
    console.error("Metadata Generation Error:", error);
    if (error.message?.includes("Requested entity was not found.")) {
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        window.aistudio.openSelectKey();
      }
    }
    throw error;
  }
};

export const generateNFTImage = async (activistName: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    // Upgraded to gemini-3-pro-image-preview for high-quality (4K) image requests.
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          {
            text: `A heroic and solemn portrait of the Korean Independence Activist ${activistName}. Digital art style combining traditional Korean ink wash painting (Sumi-e) with modern cinematic lighting. Background showing hints of the Korean flag (Taegeukgi) or historical landscapes of Seoul 1900s. Highly detailed, respectful, 4k resolution.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: "4K"
        }
      }
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error: any) {
    console.error("Image Generation Error:", error);
    // Mandatory key re-selection prompt for gemini-3-pro-image-preview if error occurs
    if (error.message?.includes("Requested entity was not found.")) {
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        window.aistudio.openSelectKey();
      }
    }
    throw error;
  }
};
