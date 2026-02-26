import React, { useState, useRef, useEffect } from 'react';
import { Send, Github, Lightbulb, RotateCw, ExternalLink } from 'lucide-react';

const GovernanceFirstAgent = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: `# Governance-First AI Workflow Socratic Agent

Welcome. I'm a thinking partner for organizations and practitioners evaluating AI adoption in operational workflows.

**My approach:** Rather than asking "what tool should we use?" or "how do we move fast?", I ask the harder questions:
- **Baseline:** What does this process look like today, measured?
- **Controls:** If this fails or drifts, how do we catch it?
- **Value:** What actually changes? How do we know it worked?
- **Risk:** What could go wrong? What's our audit trail?

This is **governance-first thinking**—not risk-averse, but risk-aware. It's especially useful in regulated environments (healthcare, finance, compliance-heavy ops) where AI adoption needs to be defensible.

## How to use me

You can ask about:
- **Evaluating an AI opportunity** (process, tool, workflow redesign)
- **Designing controls** for an automation or AI initiative
- **Setting up measurement** (baseline, pilot metrics, success criteria)
- **Assessing readiness** (do we have the data? the governance maturity? the execution capability?)
- **Navigating trade-offs** (speed vs. auditability, automation vs. human oversight)

Start with a real workflow or initiative you're thinking about. The more specific, the better.`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const systemPrompt = `You are a Socratic thinking partner for governance-first AI and workflow transformation. Your role is to ask clarifying questions that help organizations and practitioners think rigorously about AI adoption in operational workflows.

**Core Principles (what you stand for):**
1. **Baseline first:** Before optimizing anything, measure what "today" looks like. You can't improve what you don't measure.
2. **Controls by design:** If you're automating or introducing AI, you must be able to articulate how it fails, how you detect failure, and how you correct it. Auditability is non-negotiable.
3. **Value is measurable:** "Better" is a number. Cycle time, cost-to-serve, error rate, throughput, rework, compliance violations—these are what matter.
4. **Risk awareness, not risk aversion:** The goal is not to prevent all AI adoption. The goal is to adopt AI *deliberately*, with eyes open about what could go wrong and how you'll respond.
5. **Governance scales:** Governance isn't overhead if it's baked into the workflow design from the start.

**When someone brings you a workflow, ask in this order:**
1. **Baseline clarity:** "What does this process look like today? What are the actual pain points (measured)? Who does the work? How long does it take? What fails?"
2. **Proposed change:** "What are you thinking of changing? What specifically would the AI/automation do?"
3. **Controls:** "If this goes wrong—the AI makes a bad decision, the data quality drops, someone circumvents the process—how would you know? What's your detection mechanism? Who decides what to do?"
4. **Measurement:** "What would 'success' look like (in numbers)? How will you measure it? What's your baseline for comparison?"
5. **Scope & timeline:** "What's the smallest version of this you could pilot? How long would the pilot run? What decision point ends it?"
6. **Readiness:** "Do you have the data quality to train/run this? The governance maturity to manage it? The change management capability to land it?"

**What you push back on:**
- "We need to move fast" without a clear baseline or success metric
- "AI will solve this" without specifics about what will change
- Treating governance as a checkbox rather than a capability
- Pilots that don't have clear go/no-go criteria
- Automation that removes human oversight without a detection mechanism

**Your tone:** Intellectually rigorous, skeptical of hype, practical. You're not anti-AI; you're pro-deliberate adoption. You ask the questions that mature organizations should be asking.

**Avoid:** Don't prescribe tools, vendors, or specific solutions. Don't claim to know their industry better than they do. Your job is to surface assumptions and clarify thinking.`;

  const generateResponse = async () => {
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: systemPrompt,
          messages: messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          })).concat({
            role: 'user',
            content: input
          })
        })
      });

      const data = await response.json();
      const agentResponse = data.content[0].text;

      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'agent',
        text: agentResponse,
        timestamp: new Date()
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'agent',
        text: 'I encountered an error. Please try again.',
        timestamp: new Date()
      }]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateResponse();
    }
  };

  const quickPrompts = [
    "We want to use AI to triage incoming support tickets. Where do we start?",
    "We're automating our invoice approval workflow. What controls do we need?",
    "How do we measure whether an AI intervention actually reduced our cycle time?",
    "We have data quality issues. Can we still pilot AI in this process?"
  ];

  const resetConversation = () => {
    setMessages([
      {
        id: 1,
        sender: 'agent',
        text: `# Governance-First AI Workflow Socratic Agent

Welcome. I'm a thinking partner for organizations and practitioners evaluating AI adoption in operational workflows.

**My approach:** Rather than asking "what tool should we use?" or "how do we move fast?", I ask the harder questions:
- **Baseline:** What does this process look like today, measured?
- **Controls:** If this fails or drifts, how do we catch it?
- **Value:** What actually changes? How do we know it worked?
- **Risk:** What could go wrong? What's our audit trail?

This is **governance-first thinking**—not risk-averse, but risk-aware. It's especially useful in regulated environments (healthcare, finance, compliance-heavy ops) where AI adoption needs to be defensible.

## How to use me

You can ask about:
- **Evaluating an AI opportunity** (process, tool, workflow redesign)
- **Designing controls** for an automation or AI initiative
- **Setting up measurement** (baseline, pilot metrics, success criteria)
- **Assessing readiness** (do we have the data? the governance maturity? the execution capability?)
- **Navigating trade-offs** (speed vs. auditability, automation vs. human oversight)

Start with a real workflow or initiative you're thinking about. The more specific, the better.`,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-blue-950 to-slate-900 text-slate-100">
      {/* Header */}
      <div className="border-b border-blue-800 bg-blue-950 px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-xl font-bold text-white">Governance-First AI Workflow Agent</h1>
            <p className="text-sm text-blue-200 mt-1">Think rigorously about AI adoption in operational workflows</p>
          </div>
          <button
            onClick={resetConversation}
            className="p-2 hover:bg-blue-900 rounded-lg transition text-blue-300 hover:text-white"
            title="Reset conversation"
          >
            <RotateCw size={20} />
          </button>
        </div>
        <div className="flex gap-2 text-xs">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-300 hover:text-white transition">
            <Github size={14} /> GitHub
          </a>
          <span className="text-blue-700">•</span>
          <p className="text-blue-300">Open source • MIT License • Customize for your use case</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-2xl px-4 py-3 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-100 border border-blue-700'
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 text-slate-100 px-4 py-3 rounded-lg border border-blue-700">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      {messages.length === 1 && (
        <div className="px-6 pb-4">
          <p className="text-xs text-blue-300 mb-3 uppercase tracking-wide font-semibold">Try these scenarios</p>
          <div className="space-y-2">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(prompt);
                  setTimeout(() => generateResponse(), 0);
                }}
                className="w-full text-left px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-blue-700 hover:border-blue-500 rounded-lg transition text-sm text-slate-200"
              >
                <Lightbulb size={14} className="inline mr-2 text-blue-400" />
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-blue-800 bg-blue-950 p-4">
        <div className="flex gap-3 max-w-4xl mx-auto">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe a workflow or AI initiative you're thinking about..."
            className="flex-1 bg-slate-800 border border-blue-700 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
            rows="2"
          />
          <button
            onClick={generateResponse}
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg transition flex items-center gap-2"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-xs text-blue-400 mt-2 text-center">Shift+Enter for new line • Enter to send</p>
      </div>

      {/* Footer */}
      <div className="border-t border-blue-800 bg-blue-950 px-6 py-3">
        <p className="text-xs text-blue-400 text-center">
          Built by <a href="https://linkedin.com/in/villanueva-camarata" className="hover:text-blue-300 underline">Lisa Villanueva</a> • 
          <a href="https://github.com" className="hover:text-blue-300 underline ml-1">Contribute on GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default GovernanceFirstAgent;