export const projects = [
  {
    title: "ISO 8583 Multi-Network Payment Processor",

    description:
      "Built ISO 8583 message processing services integrating Visa, Mastercard, and RuPay within TOUCAN's payment switch, supporting Purchase, Refund, Reversal, UPI, COFT, and MOTO transaction flows across 12+ Spring Boot microservices covering onboarding, processing, settlement, and reconciliation.",

    technologies: ["Java", "Spring Boot", "ISO 8583", "Microservices"],

    features: [
      "Visa, Mastercard & RuPay message processing",
      "6 transaction flow types (Purchase, Refund, Reversal, UPI, COFT, MOTO)",
      "12+ microservices across the payment lifecycle",
    ],
  },

  {
    title: "High-Throughput Virtual Threads Transaction Pipeline",

    description:
      "Engineered a payment transaction pipeline on Java Virtual Threads with asynchronous execution and semaphore-based throttling, sustaining 8K TPS while applying backpressure to shield downstream PSPs from overload during peak traffic.",

    technologies: ["Java", "Virtual Threads", "Concurrency", "Semaphores"],

    features: [
      "Asynchronous execution on Virtual Threads",
      "Semaphore-based throttling",
      "Backpressure to protect downstream PSPs",
    ],
  },

  {
    title: "Kafka-Based Asynchronous Payment Event Pipeline",

    description:
      "Designed Kafka-based asynchronous workflows processing over 150K payment events daily, enabling reliable retry orchestration, fault-tolerant transaction processing, and scalable inter-service communication across the distributed payment platform.",

    technologies: ["Kafka", "Event-Driven Architecture", "Microservices"],

    features: [
      "150K+ events processed daily",
      "Reliable retry orchestration",
      "Fault-tolerant, scalable messaging between services",
    ],
  },

  {
    title: "Resilient Transaction Processing Framework",

    description:
      "Built a reusable transaction processing framework using Factory, Strategy, and Template Method design patterns to support Purchase, Refund, Reversal, UPI, COFT, and MOTO lifecycles, with retry strategies, timeout handling, idempotency, and state management to prevent duplicate processing during intermittent PSP outages.",

    technologies: ["Java", "Design Patterns", "Spring Boot"],

    features: [
      "Factory, Strategy & Template Method patterns",
      "Retry, timeout, and failure recovery handling",
      "Idempotency & transaction state management",
    ],
  },

  {
    title: "JavaScript Authentication SDK for Merchant Checkout",

    description:
      "Designed and developed a reusable JavaScript Authentication SDK for PCI DSS-certified merchant checkout applications, standardizing authentication and authorization workflows across integrating merchants and cutting integration time by 80%.",

    technologies: ["JavaScript", "PCI DSS", "SDK Design"],

    features: [
      "Standardized auth/authz workflows",
      "PCI DSS-certified checkout integration",
      "80% faster merchant onboarding",
    ],
  },
];
