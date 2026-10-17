---
layout: default
title: "Metrics and Alerts"
---

## Watch the Service from the User’s Perspective

Metrics aggregate measurements over time. For a request-serving application, begin with request rate, failure rate, latency distribution, and resource saturation. A CPU graph alone cannot tell whether users can save tasks.

A service-level indicator might be the fraction of task-save requests that succeed. Define which requests count and which failures matter. An objective then specifies the intended reliability over a time window; it is a team decision based on user needs.

Alert on a condition that requires action. A sustained rise in task-save failures is often more useful than one brief CPU spike. An alert should describe the impact, point to relevant evidence, and identify an owner and response procedure.

Avoid unbounded metric labels. A separate series for every request ID or user ID can overload a metrics system. Use low-cardinality labels such as route pattern and status class; retain per-request details in logs or traces.

## Practice

Design an alert for a task API. **Check:** define a minimum traffic level, evaluation window, failure condition, owner, and first diagnostic step. Explain how a single expected invalid-input response differs from a widespread server outage.

---

[Module overview](index.html) · [Previous: Writing Useful Logs](writing-useful-logs.html) · [Next: Investigating with Logs, Metrics, and Traces](investigating-with-observability.html)
