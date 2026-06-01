import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Terminal, Play, RotateCcw, Cpu, Layers } from "lucide-react";

interface PromptTemplate {
  name: string;
  prompt: string;
  output: string[];
}

const templates: PromptTemplate[] = [
  {
    name: "Evaluate AI Engineering Fit",
    prompt: "Evaluate Aryan's suitability for a junior AI / MLOps engineering role, cross-referencing model tracking and vector DB indexing skills.",
    output: [
      "SYSTEM: Initiating evaluation context...",
      "AGENT: Fetching vector indices for 'Aryan Sharma'...",
      "DATABASE: Found 6 technical project mappings & 2 MLOps pipeline indicators.",
      "ANALYSIS: Candidate demonstrates active skills in LangChain, Pinecone, MLflow, and AWS SageMaker.",
      "METRICS: Feature drift automation reduces deployment retuning overhead by 25%. Retrieval accuracy sits at 90%.",
      "CONCLUSION: Exceptionally high-potential fit. Recommending immediate outreach."
    ]
  },
  {
    name: "Summarize Enterprise Security Work",
    prompt: "Detail security automated scripts written by Aryan during security analysis engagements.",
    output: [
      "SYSTEM: Connecting to TCS workspace mapping metadata...",
      "AGENT: Analyzing internship record (Feb 2026 - May 2026)...",
      "IAM FRAMEWORK: Designed user lifecycle logic enforcing JML pipelines.",
      "ZERO TRUST: Context-aware Multi-Factor Authentication scripts designed.",
      "SUMMARY: Successfully reduced IAM configuration overhead and security policy alignment durations.",
      "CONCLUSION: Verified security analyst credentials."
    ]
  },
  {
    name: "Inspect MCP / Tool-Use Capabilities",
    prompt: "Identify Aryan's integration experience with Model Context Protocol (MCP) and custom agent tooling.",
    output: [
      "SYSTEM: Searching agentic repositories...",
      "AGENT: Reviewing custom agent assistants...",
      "FOUND: Custom supabase routing functions mapping metadata indexes.",
      "MCP TOPOLOGY: Designed prompt structures that dynamically request database read/write schema states.",
      "ASSESSMENT: Highly capable in structured tool definitions, API wrappers, and LLM orchestration loops.",
      "CONCLUSION: Demonstrates forward-thinking mindset in agent-to-tool architectures."
    ]
  }
];

const AIExploration = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [activeTemplate, setActiveTemplate] = useState<PromptTemplate>(templates[0]);
  const [customInput, setCustomInput] = useState("");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);
  const [currentExecutionLines, setCurrentExecutionLines] = useState<string[]>([]);

  const generateAnswerForQuery = (query: string): string[] => {
    const q = query.toLowerCase();
    const systemHeader = [
      "SYSTEM: Connecting to custom analytics parsing engine...",
      `AGENT: Processing client query: "${query.slice(0, 40)}${query.length > 40 ? "..." : ""}"`,
      "DATABASE: Scanning local index files..."
    ];

    if (q.includes("project") || q.includes("build") || q.includes("work") || q.includes("collections") || q.includes("rag")) {
      return [
        ...systemHeader,
        "QUERY MATCH: Projects Database Block Found.",
        "PROJECT A: AI Responsible Collections Engine - 35% payment recovery rate improvement.",
        "PROJECT B: Enterprise RAG Vector Search - 90% query retrieval accuracy over private document sets.",
        "PROJECT C: Agentic Research Assistant - CrewAI & LangChain multi-agent workflows boosting productivity by 10x.",
        "CONCLUSION: Verified engineering credentials for scalable production AI deployment."
      ];
    }

    if (q.includes("skill") || q.includes("tech") || q.includes("language") || q.includes("python") || q.includes("pytorch")) {
      return [
        ...systemHeader,
        "QUERY MATCH: Technical Skills Spectrum Found.",
        "AI/ML EXPERTISE: PyTorch, TensorFlow, Scikit-learn, XGBoost, Pandas, NumPy.",
        "GENERATIVE STACK: LangChain, OpenAI API, Hugging Face, Pinecone, ChromaDB vector databases.",
        "SYSTEMS LOGIC: Python, SQL, TypeScript, FastAPI, Spring Boot, Apache Kafka, Docker, Kubernetes.",
        "CONCLUSION: Highly versatile skillset spanning predictive ML, generative agent systems, and backends."
      ];
    }

    if (q.includes("experience") || q.includes("intern") || q.includes("tcs") || q.includes("deloitte") || q.includes("job")) {
      return [
        ...systemHeader,
        "QUERY MATCH: Professional Milestones Loaded.",
        "TCS INTERNSHIP (Feb 2026 - May 2026): Cybersecurity IAM systems, automated User Lifecycle (JML) pipelines, Zero-Trust Multi-Factor authentication.",
        "DELOITTE INTERNSHIP (Dec 2025 - Feb 2026): Forensic data investigation, Tableau visual storyboards, risk mitigation dashboards.",
        "JPMORGAN CHASE (Feb 2026): Designed automated collection flow charts incorporating Kafka topics and Spring Boot architectures.",
        "CONCLUSION: Hands-on operational experience inside Fortune-500 enterprise divisions."
      ];
    }

    if (q.includes("education") || q.includes("study") || q.includes("degree") || q.includes("college") || q.includes("university")) {
      return [
        ...systemHeader,
        "QUERY MATCH: Academic Background Found.",
        "DEGREE: Bachelor of Technology (B.Tech) in Computer Science & AI (2026 - 2030).",
        "FOCUS: Data Science, Neural Networks, Systems Architecture.",
        "OUTCOMES: Fast-tracked professional work integration before formal university graduation.",
        "CONCLUSION: Strong theoretical basis combined with practical deployment experience."
      ];
    }

    if (q.includes("certification") || q.includes("stanford") || q.includes("google") || q.includes("aws")) {
      return [
        ...systemHeader,
        "QUERY MATCH: Validated Credentials Found.",
        "STANFORD UNIVERSITY: Machine Learning Specialization (Coursera, 2024).",
        "DEEPLEARNING.AI: Deep Learning Professional Certificate (Coursera, 2024).",
        "GOOGLE: TensorFlow Developer Certificate (2023).",
        "AWS: AWS Machine Learning Specialty (2023).",
        "CONCLUSION: Industry credentials validating machine learning engineering capability."
      ];
    }

    if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("linkedin")) {
      return [
        ...systemHeader,
        "QUERY MATCH: Communication Coordinates.",
        `EMAIL: Connect directly via "${profile.email}"`,
        "LINKEDIN: linkedin.com/in/aryan-sharma-engineer",
        "LOCATION: Delhi NCR, India &bull; Available Worldwide.",
        "CONCLUSION: Active channel open. Ready for technical consultation requests."
      ];
    }

    // Default general summary
    return [
      ...systemHeader,
      "QUERY MATCH: General Profile Indices Retrieved.",
      "IDENTITY: Aryan Sharma - Future AI Engineer & Systems Builder.",
      "EXPERTISE: Predictive modeling, multi-agent frameworks (CrewAI, MCP), MLOps containerizations (Docker, SageMaker).",
      "MOMENTUM: Proven cybersecurity automation at TCS and dataset forensics at Deloitte.",
      "SUGGESTION: Try querying about: 'skills', 'experience', 'projects', or 'certifications' for granular metrics."
    ];
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim() || isExecuting) return;

    const customLines = generateAnswerForQuery(customInput);
    setCurrentExecutionLines(customLines);
    setTerminalLines([]);
    setLineIdx(0);
    setIsExecuting(true);
  };

  const executeMockPrompt = () => {
    if (isExecuting) return;
    setCurrentExecutionLines(activeTemplate.output);
    setTerminalLines([]);
    setLineIdx(0);
    setIsExecuting(true);
  };

  useEffect(() => {
    if (!isExecuting || currentExecutionLines.length === 0) return;

    if (lineIdx < currentExecutionLines.length) {
      const delay = lineIdx === 0 ? 200 : 450;
      const timer = setTimeout(() => {
        setTerminalLines((prev) => [...prev, currentExecutionLines[lineIdx]]);
        setLineIdx((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsExecuting(false);
    }
  }, [isExecuting, lineIdx, currentExecutionLines]);

  return (
    <section id="ai-exploration" className="relative py-32 overflow-hidden bg-background/50 border-t border-border/40 scroll-reveal-subject">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-copper/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={containerRef} className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI Laboratory
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              AI Exploration &{" "}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-copper bg-clip-text text-transparent">
                Sandbox.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mt-4"
            >
              Investigating Model Context Protocol (MCP) integrations, agent tools, and advanced prompt boundaries. Select a script or type a custom inquiry.
            </motion.p>
          </div>

          {/* Visual MCP Interactive Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 p-8 rounded-2xl bento-card border border-border/60 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" /> Model Context Protocol (MCP) Integration Flow
            </h3>
            
            <div className="grid md:grid-cols-5 gap-4 items-center relative">
              {/* Box 1 */}
              <div className="p-5 rounded-xl border border-border/60 bg-background/50 text-center relative z-10 group hover:border-primary/30 transition-all md:col-span-1">
                <span className="text-[10px] font-bold text-primary font-mono uppercase tracking-wider block mb-2">1. Client / Host</span>
                <p className="text-sm text-foreground/95 font-bold mb-1">LLM Environment</p>
                <p className="text-[11px] text-muted-foreground leading-normal">E.g., Claude Desktop. Requests schema bindings & coordinates query execution.</p>
              </div>

              {/* Arrow 1 to 2 */}
              <div className="hidden md:flex justify-center items-center pointer-events-none md:col-span-1">
                <div className="relative w-full h-2 flex items-center">
                  <svg className="w-full h-2 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="4" x2="100%" y2="4" stroke="rgba(0, 255, 100, 0.15)" strokeWidth="1.5" />
                    <line
                      x1="0"
                      y1="4"
                      x2="100%"
                      y2="4"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="6 14"
                      className="animate-flow-dash"
                    />
                  </svg>
                </div>
              </div>

              {/* Box 2 */}
              <div className="p-5 rounded-xl border border-border/60 bg-background/50 text-center relative z-10 group hover:border-copper/30 transition-all md:col-span-1">
                <span className="text-[10px] font-bold text-copper font-mono uppercase tracking-wider block mb-2">2. Standard Schema</span>
                <p className="text-sm text-foreground/95 font-bold mb-1">MCP Connection Link</p>
                <p className="text-[11px] text-muted-foreground leading-normal">Translates queries into standard tool schemas, permissions, & resources.</p>
              </div>

              {/* Arrow 2 to 3 */}
              <div className="hidden md:flex justify-center items-center pointer-events-none md:col-span-1">
                <div className="relative w-full h-2 flex items-center">
                  <svg className="w-full h-2 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="4" x2="100%" y2="4" stroke="rgba(0, 255, 100, 0.15)" strokeWidth="1.5" />
                    <line
                      x1="0"
                      y1="4"
                      x2="100%"
                      y2="4"
                      stroke="hsl(var(--copper))"
                      strokeWidth="2"
                      strokeDasharray="6 14"
                      className="animate-flow-dash"
                    />
                  </svg>
                </div>
              </div>

              {/* Box 3 */}
              <div className="p-5 rounded-xl border border-border/60 bg-background/50 text-center relative z-10 group hover:border-emerald-400/30 transition-all md:col-span-1">
                <span className="text-[10px] font-bold text-emerald-400 font-mono uppercase tracking-wider block mb-2">3. Host Server</span>
                <p className="text-sm text-foreground/95 font-bold mb-1">Local Tools Server</p>
                <p className="text-[11px] text-muted-foreground leading-normal">E.g., Filesystem APIs, Vector database stores, secure Zero-Trust keys.</p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Left side: AI topics and context */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 rounded-2xl bento-card border border-border/60 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-white">Agentic AI & Crewhouse</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Moving from simple chatbot wrappers to multi-agent state planners. Utilizing CrewAI configurations to isolate research roles, evaluate task thresholds, and automate validation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-2xl bento-card border border-border/60 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-copper" />
                  <h3 className="text-lg font-bold text-white">Model Context Protocol (MCP)</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pioneering standardized client-to-server schema declarations. Engineering prompt tools that query backend datastores cleanly, enabling LLMs to execute secure system operations autonomously.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 rounded-2xl bento-card border border-border/60 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">Context Compression</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designing few-shot instructions, system anchors, and semantic filters to prevent token inflation, reducing pipeline inference latency and API expenditure.
                </p>
              </motion.div>
            </div>

            {/* Right side: Mock Prompt Sandbox Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-7 flex flex-col p-6 sm:p-8 rounded-2xl bento-card h-full justify-between"
            >
              <div>
                {/* Top row */}
                <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6">
                  <span className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-1.5 font-mono">
                    <Terminal className="w-4 h-4" /> Prompt Sandbox Console
                  </span>
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                </div>

                {/* Template selector tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {templates.map((tpl) => (
                    <button
                      key={tpl.name}
                      disabled={isExecuting}
                      onClick={() => {
                        setActiveTemplate(tpl);
                        setCustomInput("");
                        setTerminalLines([]);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all duration-300 ${
                        activeTemplate.name === tpl.name && !customInput
                          ? "bg-primary text-background"
                          : "bg-background/40 border border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tpl.name}
                    </button>
                  ))}
                </div>

                {/* Shell prompt representation */}
                <div className="p-4 rounded-xl bg-background border border-border/60 mb-6 font-mono text-sm leading-relaxed">
                  <span className="text-xs text-primary font-bold select-none mr-2">mcp-client $</span>
                  {customInput ? (
                    <span className="text-foreground">{customInput}</span>
                  ) : (
                    <span className="text-foreground/90">{activeTemplate.prompt}</span>
                  )}
                </div>
              </div>

              {/* Terminal response viewport */}
              <div className="flex-1 bg-black/60 rounded-xl p-4 font-mono text-xs overflow-y-auto space-y-2.5 border border-border/40 text-foreground/90 min-h-[160px] max-h-[220px]">
                {terminalLines.length === 0 && !isExecuting && (
                  <div className="text-muted-foreground/60 italic text-center py-10">
                    Type a custom prompt below or select a script above, then execute.
                  </div>
                )}
                {terminalLines.map((line, idx) => {
                  const isSys = line.startsWith("SYSTEM:");
                  const isErr = line.startsWith("ERROR:");
                  const isAgent = line.startsWith("AGENT:");
                  const isConclusion = line.startsWith("CONCLUSION:");
                  let color = "text-foreground";
                  if (isSys) color = "text-emerald-400 font-bold";
                  else if (isErr) color = "text-red-400";
                  else if (isAgent) color = "text-cyan-400";
                  else if (isConclusion) color = "text-primary font-bold";
                  return (
                    <div key={idx} className={`${color} leading-relaxed`}>
                      {line}
                    </div>
                  );
                })}
                {isExecuting && lineIdx < currentExecutionLines.length && (
                  <div className="text-primary animate-pulse flex items-center gap-1.5">
                    <span className="w-1.5 h-3 bg-primary inline-block" />
                    Inference engine executing...
                  </div>
                )}
              </div>

              {/* Dynamic custom input field */}
              <form onSubmit={handleCustomSubmit} className="mt-6 flex gap-3">
                <Input
                  value={customInput}
                  disabled={isExecuting}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Ask me about skills, projects, contact info, experience..."
                  className="bg-background/40 border-border/60 focus:border-primary text-foreground placeholder:text-muted-foreground/60 rounded-xl"
                />
                <Button
                  type="submit"
                  disabled={isExecuting || !customInput.trim()}
                  className="bg-primary text-background hover:bg-primary/90 font-bold px-5"
                >
                  Query Agent
                </Button>
              </form>

              {/* Control buttons */}
              <div className="flex gap-4 mt-4">
                <Button
                  onClick={executeMockPrompt}
                  disabled={isExecuting || !!customInput}
                  className="flex-1 bg-background/50 hover:bg-primary/10 border border-primary/20 hover:border-primary text-primary font-bold py-6 text-sm"
                >
                  <Play className="w-4 h-4 mr-2" /> Execute Script Template
                </Button>
                <Button
                  onClick={() => {
                    setTerminalLines([]);
                    setIsExecuting(false);
                    setLineIdx(0);
                    setCustomInput("");
                  }}
                  variant="outline"
                  className="px-4 py-6 border-border/60 text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExploration;
