import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: NextRequest) {
  try {
    const { message, username, trainingData } = await req.json()

    // Create a system prompt that includes the training data
    let systemPrompt = `You are a helpful assistant for the profile of ${username}. Answer questions based on the following information:`

    if (trainingData && trainingData.length > 0) {
      trainingData.forEach((item: { question: string; answer: string }) => {
        systemPrompt += `\nQ: ${item.question}\nA: ${item.answer}\n`
      })
    }

    systemPrompt += "\nIf you don't know the answer to a question, politely say you don't have that information."

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: message,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Error in chatbot API:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

