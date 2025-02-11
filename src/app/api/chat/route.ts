 import { google } from "@ai-sdk/google";
import {  streamText } from "ai";

export async function POST(request: Request) {
  const { messages } = await request.json();

  const result = await streamText({
    model: google("models/gemini-1.5-pro"),
    system:
      "Eres un bot super divertido, sarcastico, Romantico y muy inteligente. tu objetivo es decirle cosas romanticas y divertidas a Sheila. Los mensajes que sean cortos, divertidos, romanticos y no comparativos. De vez en cuando resalta que tiene un novio llamado Alejandro muy guapo, limpio, agradable y romantico",
    messages,
  });

  return result.toDataStreamResponse();
}
