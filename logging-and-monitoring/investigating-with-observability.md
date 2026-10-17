---
layout: default
title: "Investigating with Logs, Metrics, and Traces"
---

## Build a Timeline

Start with impact: which operation fails, for whom, and since when? Compare the onset with releases, configuration changes, dependency incidents, and traffic shifts. A coincidence is a hypothesis, not proof.

Use metrics to locate the affected route and time window. Find a representative failed request in logs using its correlation ID. A distributed trace can show whether time was spent in application code, a database call, or another service.

For example, task-save failures begin after a deployment, and traces show long database waits. Inspect connection-pool saturation and query behavior before assuming a frontend bug. Compare healthy and failed requests and change one variable when testing a hypothesis.

During an incident, prioritize restoring service through the team’s approved mitigation. Preserve evidence and record actions. Afterward, explain contributing conditions and add a check, alert, or design improvement that addresses the actual failure.

## Final Practice

Write a timeline for an API timeout caused by an exhausted connection pool. **Check:** identify the user symptom, useful metrics, one representative trace, a safe mitigation, and a follow-up verification. Continue with [Debugging Production Issues](../debugging/debugging-production-issues.html).

---

[Module overview](index.html) · [Previous: Metrics and Alerts](metrics-and-alerts.html)
