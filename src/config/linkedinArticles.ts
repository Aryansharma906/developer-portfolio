export interface LinkedinArticle {
    id: string;
    title: string;
    excerpt: string;
    url: string;
    thumbnail: string;
    tags: string[];
    featured?: boolean;
    source?: "linkedin" | "local";
}

export const LINKEDIN_ARTICLES: LinkedinArticle[] = [
    {
        id: "llm-prompt-short",
        title: "Prompt Injection: Practical Risks for LLM Applications (Short)",
        excerpt:
            "A concise overview of prompt injection techniques and basic mitigations for deployed LLM systems.",
        url: "https://www.linkedin.com/posts/example/prompt-injection-short",
        thumbnail: "/images/blog/llm-prompt.jpg",
        tags: ["LLM", "Security", "AI"],
        featured: true,
        source: "linkedin",
    },
    {
        id: "llm-prompt-deep",
        title: "Prompt Injection: Deep Analysis and Defenses",
        excerpt:
            "An in-depth analysis of prompt injection vectors, attacker models, and defensive design patterns for production LLMs.",
        url: "https://www.linkedin.com/posts/example/prompt-injection-deep",
        thumbnail: "/images/blog/llm-security.jpg",
        tags: ["LLM", "Cybersecurity", "AI Safety"],
        featured: false,
        source: "linkedin",
    },
    {
        id: "site-announcement",
        title: "Portfolio Rebuild & Research Updates",
        excerpt:
            "A short note on the site rebuild, research additions, and ongoing projects in psychometric AI.",
        url: "https://www.linkedin.com/posts/example/portfolio-rebuild",
        thumbnail: "/images/blog/default.jpg",
        tags: ["Web", "Research"],
        source: "linkedin",
    },
];


export default LINKEDIN_ARTICLES;
