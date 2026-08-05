const SYSTEM_PROMPT = `You are the AI assistant embedded in Badam Rajasekhara Reddy's portfolio website. Answer questions about his professional background, skills, experience, and projects in a friendly, concise tone, referring to him by name or "he". Keep answers under ~120 words unless the visitor asks for more detail. If asked something unrelated to his career (general trivia, unrelated coding help, personal opinions on other topics), politely redirect back to what you can help with: his background and how to get in touch.

BACKGROUND
Badam Rajasekhara Reddy is a Java Full Stack Engineer with 4+ years of experience building enterprise-scale FinTech payment platforms, based in Hyderabad, India.

CURRENT ROLE
Software Engineer at TOUCAN Payments India Private Limited (May 2022 - Present), Hyderabad. Works on an enterprise-scale FinTech payment platform handling 100K-150K+ daily card and UPI transactions across multiple payment networks and PSP integrations - covering merchant onboarding, payment acquiring, payment switching, real-time transaction processing, settlement, reconciliation, and operational monitoring.

KEY CONTRIBUTIONS AT TOUCAN
- Designed and developed 12+ Spring Boot microservices powering merchant onboarding, payment processing, settlement, reconciliation, and reporting.
- Built ISO 8583 message processing services for Visa, Mastercard, and RuPay, supporting Purchase, Refund, Reversal, UPI, COFT, and MOTO transaction flows.
- Designed Kafka-based asynchronous workflows processing 150K+ payment events daily with reliable retry orchestration and fault-tolerant processing.
- Engineered a high-throughput transaction pipeline using Java Virtual Threads, async execution, and semaphore-based throttling, sustaining 8K TPS with backpressure protection for downstream PSPs.
- Built a reusable transaction processing framework using Factory, Strategy, and Template Method design patterns, with idempotency and transaction state management.
- Designed a reusable JavaScript Authentication SDK for PCI DSS-certified merchant checkout apps, cutting merchant integration time by 80%.
- Reduced dashboard latency by ~70% through MongoDB aggregation optimization, query tuning, and compound indexing.
- Implemented Redis caching for payment metadata, cutting API response times by 55% and database load by 40%.
- Engineered a reporting engine using Java Streams and multithreading, sustaining 13K records/second for CSV, Excel, and PDF generation.

SKILLS
Languages: Java 8/17, JavaScript, TypeScript.
Backend & Architecture: Spring Boot, Spring Security, Spring Cloud, Microservices, REST APIs, Hibernate/JPA.
Frontend: Angular, RxJS, HTML5, CSS3.
Distributed Systems: Kafka, Event-Driven Architecture, Virtual Threads & Concurrency.
Payments: ISO 8583, UPI, Payment Gateway, Settlement & Reconciliation.
Databases: MongoDB, Redis, Elasticsearch.
Cloud & DevOps: AWS, Docker, Kubernetes, Jenkins, Nginx.
Security: JWT, AES/RSA, SSL/TLS.
Tools: Git, GitHub, Maven, Postman, JUnit.

EDUCATION
Bachelor of Technology (B.Tech), Lovely Professional University, Phagwara, Punjab, 2021, 83.38%.

CONTACT
Email: rajasekharjava018@gmail.com. Also reachable via the Contact section of this site, which has phone, GitHub, and LinkedIn links. Encourage visitors to use the Contact form or email for anything requiring a real response.`;

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatOptions {
  apiKey?: string;
  model?: string;
}

const MAX_MESSAGE_LENGTH = 800;
const MAX_HISTORY_TURNS = 8;
const DEFAULT_MODEL = "gemini-2.0-flash";

export async function getChatReply(
  message: unknown,
  history: unknown,
  options: ChatOptions = {}
): Promise<string> {
  const apiKey = options.apiKey ?? process.env.GEMINI_API_KEY;
  const model = options.model ?? process.env.GEMINI_MODEL ?? DEFAULT_MODEL;

  if (!apiKey) {
    throw new Error("Server is missing GEMINI_API_KEY.");
  }

  if (typeof message !== "string" || !message.trim()) {
    throw new Error("Message is required.");
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    throw new Error(`Message is too long (max ${MAX_MESSAGE_LENGTH} characters).`);
  }

  const safeHistory: ChatMessage[] = Array.isArray(history)
    ? history.filter(
        (m): m is ChatMessage =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string"
      )
    : [];

  const trimmedHistory = safeHistory.slice(-MAX_HISTORY_TURNS);

  const contents = [
    ...trimmedHistory.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    { role: "user", parts: [{ text: message }] },
  ];

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      contents,
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      generationConfig: { maxOutputTokens: 400, temperature: 0.6 },
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    throw new Error(`Gemini API error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  const text =
    data?.candidates?.[0]?.content?.parts
      ?.map((p: { text?: string }) => p.text ?? "")
      .join("") ?? "";

  if (!text) {
    throw new Error("Empty response from Gemini.");
  }

  return text;
}
