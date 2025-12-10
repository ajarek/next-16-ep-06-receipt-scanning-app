import { streamText, UIMessage, convertToModelMessages } from "ai"
import { google } from "@ai-sdk/google"
import { z } from "zod"

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json()

    const result = streamText({
      model: google("gemini-2.5-flash"),
      messages: convertToModelMessages(messages),
      tools: {
        create_invoice_data: {
          description:
            "Create a JavaScript object from the downloaded PDF invoice",
          // @ts-expect-error parameters type mismatch
          parameters: z.object({
            seller: z.string().describe("The name of the seller"),
            sellerAddress: z.string().describe("The address of the seller"),
            nip: z.string().describe("The tax identification number (NIP)"),
            number: z.string().describe("The invoice number"),
            date: z.string().describe("The date of issue (YYYY-MM-DD)"),
            name: z.string().describe("The name or description"),
            amount: z.number().describe("The total amount"),
            ptu: z.number().describe("The PTU (VAT) amount"),
            paymentDate: z.string().describe("The payment date (YYYY-MM-DD)"),
          }),
        },
      },
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.error("Error streaming chat completion:", error)
    return new Response("Failed to stream chat completion", { status: 500 })
  }
}
