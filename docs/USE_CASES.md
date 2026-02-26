# Use Cases: Real-World Scenarios

## Healthcare: Patient Intake Automation

**Current state:** 500 intake forms/month, 3 days to screen, 20% fail initial review

**Proposed change:** AI pre-screens for completeness

**Questions:**
- What happens when the AI flags a form as incomplete? How does the patient know?
- How would we detect if the AI started missing red flags?
- What's acceptable error rate?

---

## Finance: Invoice Approval Workflow

**Current state:** 500 invoices/month, 7-day approval cycle, 15% fail compliance check

**Proposed change:** AI approves invoices below risk threshold

**Questions:**
- What's the risk threshold? Who decides?
- If the AI approves an invoice that should have been rejected, how do you catch it?
- What's your rollback time if something goes wrong?

---

## Compliance: Audit Trail Design

**Current state:** Manual audit logs, inconsistent documentation

**Proposed change:** Automated logging of all AI decisions

**Questions:**
- What data needs to be logged?
- Who reviews the logs and how often?
- How do you detect tampering or gaps?
