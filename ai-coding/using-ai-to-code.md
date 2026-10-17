---
layout: default
title: "Using AI to Code Without Losing the Fundamentals"
---

## Choose the Kind of Help You Need

AI coding tools can explain unfamiliar code, suggest edits, generate examples, and help investigate failures. They can also invent APIs, miss requirements, or produce convincing explanations for incorrect code. Treat their output as a proposal you must be able to inspect.

| Mode | Useful for | Your responsibility |
| --- | --- | --- |
| Chat | Explanations, examples, comparing approaches | Supply relevant context and verify claims |
| Completion | Small edits while you write | Read the whole suggestion before accepting |
| Agent | Multi-step work using files and tools | Define boundaries, inspect actions, verify the result |

An agent has capabilities beyond writing a reply: it may read files, edit them, or run commands. Its actual access comes from the application hosting it. A request to explain a function does not require deployment credentials.

## Start with a Small, Observable Task

A useful first task is: “Explain where this form is validated, cite the relevant functions, and do not edit files.” Next, ask for one narrowly scoped bug fix with a concrete acceptance case.

Avoid beginning with “build the entire application.” Large requests make it harder to distinguish a good solution from a collection of assumptions. Break the work into a plan, one implementation slice, verification, and review.

Use AI to accelerate learning as well as typing. After a suggestion, explain the changed code in your own words. If you cannot explain why it works, ask for a walkthrough and run a small example before accepting it.

## Practice

Pick a short function you already understand. Ask for an explanation, then check every factual claim against the source. **Check:** identify one thing the tool can demonstrate from the code and one thing it would need runtime evidence to know. A confident description is not a test result.

---

[AI coding overview](index.html) · [Next: Writing Effective Coding Prompts](writing-effective-prompts.html)
