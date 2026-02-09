import { openai } from "./ai.service";
import { VahlayDefaultPrompt } from "../prompts/vahlay-default.v1";

export async function runQC(transcript: string) {
  const res = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    temperature: 0.2,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: VahlayDefaultPrompt },
      { role: "user", content: transcript }
    ]
  });

  return JSON.parse(res.choices[0].message.content!);
}
