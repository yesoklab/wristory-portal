import { GoogleGenAI } from "@google/genai";

export interface VideoGenerationResult {
  done: boolean;
  uri?: string;
  error?: string;
}

/**
 * AI 홍보 영상을 생성을 시작합니다.
 * @param prompt 영상 생성에 사용할 텍스트 프롬프트
 * @returns 생성 작업의 오퍼레이션 이름 (폴링에 사용)
 */
export async function generatePromoVideo(prompt: string): Promise<string> {
  // Vercel 환경변수 또는 AI Studio에서 주입된 API 키를 가져옵니다.
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === 'undefined') {
    throw new Error("API 키가 설정되지 않았습니다. Vercel 환경변수나 AI Studio 설정을 확인해 주세요.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    // Veo 3.1 Lite 모델을 사용하여 영상 생성을 요청합니다.
    const operation = await ai.models.generateVideos({
      model: 'veo-3.1-lite-generate-preview',
      prompt,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    if (!operation.name) {
      throw new Error("영상 생성 작업을 시작하지 못했습니다.");
    }

    return operation.name; // 폴링을 위해 오퍼레이션 이름을 반환합니다.
  } catch (error) {
    console.error("Video Generation Error:", error);
    throw error;
  }
}

/**
 * 영상 생성 작업의 상태를 확인합니다.
 * @param operationName 확인하려는 오퍼레이션 이름
 */
export async function checkVideoStatus(operationName: string): Promise<VideoGenerationResult> {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === 'undefined') {
    throw new Error("API 키가 없습니다.");
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    // 오퍼레이션 상태를 조회합니다.
    const operation = await ai.operations.getVideosOperation({ 
      operation: { name: operationName } as any 
    });
    
    if (operation.done) {
      const uri = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (uri) {
        // 다운로드 링크에 API 키를 붙여서 반환합니다 (인증 필요).
        return { done: true, uri: `${uri}?x-goog-api-key=${apiKey}` };
      }
      return { done: true, error: "영상이 생성되었으나 주소를 가져오지 못했습니다." };
    }
    
    return { done: false };
  } catch (error) {
    console.error("Check Video Status Error:", error);
    throw error;
  }
}
