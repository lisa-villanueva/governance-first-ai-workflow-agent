# Getting Started

## Installation

### Option 1: Run Locally

**Prerequisites:** Node.js 16+, npm

1. Clone the repository:
```bash
   git clone https://github.com/lisa-villanueva/governance-first-ai-workflow-agent.git
   cd governance-first-ai-workflow-agent
```

2. Install dependencies:
```bash
   npm install
```

3. Set up environment:
```bash
   cp config.example.env .env.local
```
   Add your Claude API key to `.env.local`

4. Start:
```bash
   npm run dev
```

5. Open http://localhost:3000

---

## Your First Conversation

1. Describe a real workflow you're thinking about
2. Be specific (include numbers: cycle time, volume, error rate)
3. Let the agent ask questions

### Example First Message:

"We're evaluating AI for our invoice approval workflow. Current state: 500 invoices/month, 7-day approval cycle. Pain point: Finance team spends 40% of time on duplicate checks."

---

## Pro Tips

1. **Be Concrete** - Avoid "automate our process". Do "reduce screening cycle from 3 days to 1 day"
2. **Bring Data** - The agent asks for numbers (baseline, volume, error rate)
3. **Think Workflows, Not Tools** - Don't lead with "Should we use tool X?"
4. **Expect Push-Back** - If the agent says "I need more specificity", that's intentional

---

## Next Steps

- Read Core Principles
- Explore Use Cases for examples in your industry
- Review Templates for your own work
