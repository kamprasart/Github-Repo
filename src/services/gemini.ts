// Gemini AI service for audio content analysis and recommendations
// This service provides integration with Google's Gemini API

const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta'

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string
      }>
    }
  }>
}

export async function generateContent(prompt: string, apiKey: string): Promise<string> {
  const response = await fetch(
    `${GEMINI_API_ENDPOINT}/models/gemini-pro:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  )

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.statusText}`)
  }

  const data: GeminiResponse = await response.json()
  return data.candidates[0]?.content?.parts[0]?.text || ''
}

export async function analyzeAudioDescription(
  description: string,
  apiKey: string
): Promise<string> {
  const prompt = `Analyze the following audio content description and provide relevant tags and genre classifications:\n\n${description}`
  return generateContent(prompt, apiKey)
}

export async function suggestLicense(
  useCase: string,
  apiKey: string
): Promise<string> {
  const prompt = `Based on the following use case, suggest the most appropriate Creative Commons license:\n\n${useCase}`
  return generateContent(prompt, apiKey)
}
