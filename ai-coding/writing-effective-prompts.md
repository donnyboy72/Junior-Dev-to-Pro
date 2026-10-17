---
layout: default
title: "Writing Effective Coding Prompts"
---

## Give the Task a Contract

A useful coding prompt names the problem, relevant location, constraints, and observable outcome. It does not need elaborate role-playing or a long list of generic instructions.

```text
Problem: The task list crashes when the API returns an empty items array.
Scope: Inspect the task-list component and its nearby tests.
Expected behavior: Show “No tasks yet” with a Create Task link.
Constraints: Keep the existing API contract and avoid new dependencies.
Verification: Cover loading, populated, empty, and failed responses.
Before editing: Explain the likely cause and proposed change.
```

This prompt gives the assistant a way to decide whether the work is complete. “Make the code better” leaves correctness and scope undefined.

## Separate Facts from Assumptions

Include an error message, relevant input, expected output, and the command that reproduced a failure. Use the smallest useful excerpt instead of an unrelated full log. Remove credentials and private data before sharing it.

Ask the assistant to identify missing information rather than inventing a framework, database schema, or dependency version. If it proposes a library method, verify that method in the installed version or official documentation.

Iterate from observed results. “The test still fails for an empty array; here is the assertion output” is more actionable than asking it to “try harder.” When a task drifts, restate the acceptance criteria and inspect the diff before another round of edits.

## Practice

Rewrite “add login” as a focused request for one part of the flow. **Check:** define what is included, what is deferred, successful behavior, failure behavior, and how permission-sensitive behavior will be verified. Ask for a plan before implementation when unresolved choices would change the design.

---

[AI coding overview](index.html) · [Previous: Using AI to Code Without Losing the Fundamentals](using-ai-to-code.html) · [Next: Context and Project Instructions](context-and-project-instructions.html)
