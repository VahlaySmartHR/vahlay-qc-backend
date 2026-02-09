import { openai } from "./ai.service";

export async function transcribeAudio(audioUrl: string) {
  const result = await openai.audio.transcriptions.create({
    file: audioUrl as any,
    model: "gpt-4o-transcribe"
  });
  return result.text;
}
