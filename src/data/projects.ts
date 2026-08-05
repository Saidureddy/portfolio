export const projects = [
  {
    title: "High-Throughput Transaction Pipeline",

    metric: "8K TPS",

    description:
      "Engineered a high-throughput payment transaction processing pipeline using Java Virtual Threads, asynchronous execution, and semaphore-based throttling, sustaining 8K TPS while implementing backpressure to prevent downstream PSP overload during peak traffic.",

    technologies: ["Java", "Virtual Threads", "Concurrency", "Semaphores"],

    features: [
      "Async execution with Virtual Threads",
      "Semaphore-based throttling",
      "Backpressure handling",
      "PSP overload protection",
    ],
  },

  {
    title: "Kafka-Based Payment Event Pipeline",

    metric: "150K+ events/day",

    description:
      "Designed Kafka-based asynchronous workflows processing over 150K payment events daily, enabling reliable retry orchestration, fault-tolerant transaction processing, and scalable inter-service communication across distributed microservices.",

    technologies: ["Kafka", "Event-Driven Architecture", "Microservices"],

    features: [
      "Retry orchestration",
      "Fault-tolerant processing",
      "Scalable inter-service communication",
    ],
  },

  {
    title: "Reusable Transaction Processing Framework",

    metric: "6 transaction types unified",

    description:
      "Built a reusable transaction processing framework using Factory, Strategy, and Template Method design patterns to support Purchase, Refund, Reversal, UPI, COFT, and MOTO lifecycles, with idempotency and state management for consistency across workflows.",

    technologies: ["Java", "Design Patterns", "Spring Boot"],

    features: [
      "Factory, Strategy & Template Method patterns",
      "Idempotency & state management",
      "Retry & timeout handling",
    ],
  },

  {
    title: "JavaScript Authentication SDK",

    metric: "80% faster integration",

    description:
      "Designed and developed a reusable JavaScript Authentication SDK for PCI DSS-certified merchant checkout applications, standardizing authentication and authorization workflows and reducing merchant integration time by 80%.",

    technologies: ["JavaScript", "PCI DSS", "SDK Design"],

    features: [
      "Standardized auth/authz workflows",
      "PCI DSS-certified checkout integration",
      "Reduced merchant onboarding time",
    ],
  },

  {
    title: "High-Performance Reporting Engine",

    metric: "13K records/sec",

    description:
      "Engineered high-performance reporting services using Java Streams, batch processing, and multithreading, achieving a sustained throughput of 13K records/second for CSV, Excel, and PDF report generation while optimizing JVM memory utilization.",

    technologies: ["Java", "Multithreading", "Batch Processing"],

    features: [
      "CSV, Excel & PDF generation",
      "Multithreaded batch processing",
      "JVM memory optimization",
    ],
  },

  {
    title: "MongoDB & Redis Performance Optimization",

    metric: "70% latency cut",

    description:
      "Reduced dashboard latency by approximately 70% through MongoDB aggregation optimization, query tuning, early filtering, projections, and compound indexing, and implemented Redis caching for frequently accessed payment metadata, cutting API response times by 55% and database load by 40%.",

    technologies: ["MongoDB", "Redis", "Caching"],

    features: [
      "Aggregation & query tuning",
      "Compound indexing",
      "Redis metadata caching",
    ],
  },
];
