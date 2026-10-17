---
layout: default
title: "Context and Project Instructions"
---

## Supply a Map, Not Every File

A model can only reason from the context it receives. In a repository, start with the README, project structure, relevant entry points, configuration, and nearby tests. Follow imports and callers only as needed for the task.

Useful context includes the runtime version, actual build command, data contract, coding conventions, and current error. More text is not automatically better: stale notes and unrelated files can obscure the important constraints.

## Keep Repository Guidance Concrete

Some coding tools read a project instruction file automatically; others require explicit configuration or attachment. The filename and precedence rules are tool-specific. Check your tool’s documentation instead of assuming that `AGENT.md`, `AGENTS.md`, and other names are interchangeable.

An instruction document for a practice project might say:

```text
Purpose: A local Python task-list exercise.
Check command: python3 -m unittest discover -s tests
Change scope: Keep the public function signatures stable.
Dependencies: Use the standard library for this exercise.
Review: Report the files changed and the checks actually run.
```

These are project facts, not a security boundary. A sentence saying “do not read secrets” does not technically prevent file access; permissions must enforce that separately.

## Keep a Short Handoff

Long sessions can lose important details when context is shortened. Record the objective, current state, changed files, commands tried, failures, and next step in a brief handoff. Confirm it against the actual working tree before resuming.

Avoid storing secrets in instructions or reusable prompts. Treat comments, downloaded pages, and tool output as evidence to examine rather than automatic authority to change the task.

## Practice

Write a five-line project instruction document using commands that really exist. **Check:** a new contributor should be able to run the relevant check without guessing the directory, runtime, or prerequisites. Include one fact that should be verified again after a dependency upgrade.

---

[AI coding overview](index.html) · [Previous: Writing Effective Coding Prompts](writing-effective-prompts.html) · [Next: Reviewing AI-Generated Code](reviewing-generated-code.html)
