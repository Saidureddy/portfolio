import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getChatReply } from "./_lib/chatHandler";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { message, history } = req.body ?? {};
    const reply = await getChatReply(message, history);
    res.status(200).json({ reply });
  } catch (err) {
    console.error("chat handler error:", err);
    res.status(500).json({
      error: err instanceof Error ? err.message : "Unknown error",
    });
  }
}
