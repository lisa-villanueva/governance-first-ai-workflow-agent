# Governance-First AI Workflow Agent

Governance-first AI workflow thinking partner. Built with Claude.

**TLDR:** A Socratic thinking partner for governance-first AI adoption in operational workflows. Built with Claude Code. Helps organizations adopt AI deliberately, with measurement, controls, and clear risk awareness—especially critical in regulated environments.

## Built With

This agent was designed with [Claude Code](https://www.anthropic.com/claude-code) and uses Claude's API for reasoning about governance and workflow transformation.



**Status:** Open Source (MIT License) | **Version:** 1.0 | **Last Updated:** February 2026

---

## Why This Exists

Too many organizations adopt AI by asking: *"What tool should we use?" and "How do we move fast?"*

This agent asks the harder questions:

- **Baseline:** What does this process look like today—measured?
- **Controls:** If this fails or drifts, how do we catch it?
- **Value:** What actually changes? How do we know it worked?
- **Risk:** What could go wrong? What's our audit trail?

**Governance-first thinking** isn't risk-averse. It's risk-aware. It's especially critical in regulated environments (healthcare, finance, compliance-heavy ops) where automation must be defensible.

---

## What This Agent Does

It's a conversational partner that helps you think rigorously about AI adoption through:

1. **Workflow Clarity** — Understanding current state, pain points, and bottlenecks in measured terms
2. **Controls Design** — Articulating how automation fails, detection mechanisms, and human oversight points
3. **Value Definition** — Specifying what "success" looks like (cycle time, cost, error rate, throughput)
4. **Risk Assessment** — Identifying failure modes and auditability requirements
5. **Scope & Timeline** — Designing small, reversible pilots with clear go/no-go criteria

---

## Quick Start

### Run It Locally (3 minutes)

1. Clone the repo:
```bash
   git clone https://github.com/lisa-villanueva/governance-first-ai-workflow-agent.git
   cd governance-first-ai-workflow-agent
```

2. Install dependencies:
```bash
   npm install
```

3. Add your Claude API key:
```bash
   cp config.example.env .env.local
```
   Edit `.env.local` with your API key.

4. Start the agent:
```bash
   npm run dev
```

5. Open http://localhost:3000

---

## Core Principles

1. **Baseline First** — Measure what "today" looks like before proposing changes
2. **Controls by Design** — Articulate failure modes and detection mechanisms
3. **Value is Measurable** — "Better" is a number (cycle time, cost, error rate)
4. **Risk Awareness** — Adopt AI deliberately with clear risk understanding
5. **Governance Scales** — Governance is cheap when baked in from the start

---

## How to Use This Agent

Ask about:
- Evaluating an AI opportunity
- Designing controls for automation
- Setting up measurement and pilot criteria
- Assessing organizational readiness

**Start with a real workflow you're thinking about.**

---

## License

MIT License. See LICENSE file.

---

## About

Built by Lisa Villanueva, Governed AI Strategist.

- [LinkedIn](https://linkedin.com/in/villanueva-camarata)
- [GitHub](https://github.com/lisa-villanueva)
