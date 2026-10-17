---
layout: default
title: "Cost, Context Limits, and Evaluation"
---

## Budget for the Whole Task

An agent may call a model repeatedly, include previous messages again, and return large tool outputs. Track total requests, input/output tokens where reported, elapsed time, tool calls, and any separately charged capabilities.

Model prices and limits change, so use the provider’s current pricing and usage information instead of a fixed dollar claim in a tutorial. A consumer subscription and API billing may be separate products; verify which account and billing mechanism your tool actually uses.

Keep credentials scoped and set provider-side usage controls where available. Application-side limits should stop runaway loops, excessive retries, and oversized file reads. A maximum output length on one response does not cap spending across repeated requests.

## Manage the Context Deliberately

A context window limits what a model can consider in a request. Large logs and irrelevant files consume space and can crowd out requirements. Search first, read relevant sections, summarize verified findings, and keep a short handoff for long tasks.

Do not treat a summary as fresh evidence. Recheck important paths and command results against the repository when resuming after a long break or a significant change.

## Evaluate on Tasks You Understand

Compare tools or models using a small set of representative tasks: explain a function, fix a bug with a regression case, and make a narrow refactor. Keep the starting code, prompt, constraints, and checks consistent. Repeat important cases because model outputs can vary.

Measure correctness, review effort, unnecessary changes, completion time, and cost together. A quick patch that takes an hour to untangle may be worse than a slower, clear result.

## Practice

Create a three-task evaluation table with a success condition and a stop budget for each. **Check:** include one permission-sensitive task, one missing-information case, and one known failing test. Record actual outcomes rather than relying on how polished the final explanation sounds.

---

[AI coding overview](index.html) · [Previous: Tools, Reusable Instructions, and MCP](tools-skills-and-mcp.html) · [Next: Capstone: A Small Change You Can Explain](ai-coding-capstone.html)
