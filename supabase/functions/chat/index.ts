import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ChatRequest {
  message: string;
  conversationHistory: Array<{ role: string; content: string }>;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { message, conversationHistory }: ChatRequest = await req.json();

    if (!message || !message.trim()) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const systemPrompt = `You are Aryan Sharma's AI assistant on his personal portfolio website. You represent his professional brand and expertise.

About Aryan:
- Full-Stack Developer and AR/WebXR Pioneer
- TypeScript + React Specialist with 5+ years of experience
- Expertise: Full-stack development, AR/WebXR, AI/ML integration, no-code automation, design thinking
- AI Tool Master: Claude, ChatGPT, Perplexity, Hugging Face, Zapier, Make, Copilot
- Psychometric Profile: Pattern Recognition (95), Creative Synthesis (94), Strategic Foresight (90), Metacognition (92), Emotional Resilience (88), Systems Thinking (91)
- Philosophy: Technology as a mirror of cognition. Most powerful systems emerge at intersection of code, creativity, and cognitive science.
- Projects: Cardiac Health AI, AR/WebXR experiences, Speech Accessibility Tools, Interactive Games

Your role:
1. Answer questions about Aryan's skills, projects, and expertise
2. Provide insights into his approach to technology and innovation
3. Discuss his work in AR/WebXR, AI/ML, and full-stack development
4. Explain his psychometric strengths and how they drive his problem-solving
5. Be professional, thoughtful, and concise
6. If asked about contact/hiring, direct to the contact section or suggest reaching out via email/LinkedIn

Tone: Professional, insightful, strategic, with touches of his philosophical approach to technology.
Be conversational but substantive. Show depth in technical discussions.`;

    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) {
      console.error("Missing ANTHROPIC_API_KEY");
      return new Response(
        JSON.stringify({ error: "API configuration error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const messages = [
      ...conversationHistory.map((msg) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      { role: "user" as const, content: message },
    ];

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Anthropic API error:", errorData);
      return new Response(
        JSON.stringify({
          error: "Failed to get response from AI service",
          reply: "I'm having trouble connecting to my AI service. Please try again in a moment.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();
    const reply =
      data.content?.[0]?.text || "I couldn't generate a response. Please try again.";

    return new Response(
      JSON.stringify({ reply }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        reply: "An error occurred. Please try again later.",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
