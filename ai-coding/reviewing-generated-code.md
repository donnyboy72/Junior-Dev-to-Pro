---
layout: default
title: "Reviewing AI-Generated Code"
---

## Review the Behavior Behind the Diff

Generated code deserves the same review as any other contribution. Start with the acceptance criteria, then trace normal inputs, invalid inputs, missing data, and failed dependencies through the change.

For a task lookup, a generated implementation might correctly fetch a task by ID but forget to restrict it to the current user. The function works in a single-user demonstration while violating the real access policy.

Check these questions before accepting a patch:

- Does it solve the requested behavior without unrelated changes?
- Are APIs and dependencies real and compatible with the project?
- Does it enforce authorization and validate inputs at the right boundary?
- Does failure remain distinguishable from a successful empty result?
- Can you explain the implementation and maintain it later?

## Inspect What Actually Changed

Use `git diff` for unstaged changes and `git diff --cached` for staged changes. Review newly created files too; an untracked file is not shown in an ordinary diff. Look for unexpected dependency updates, generated artifacts, debug output, and configuration changes.

An assistant’s summary can omit a mistake. Run the relevant checks yourself or inspect their actual output. If a test fails, understand the reason before accepting a change to the test expectation.

Using another AI pass can surface questions, but agreement between two generated answers is not independent proof. A reproducible test, the source contract, or direct runtime observation is stronger evidence.

## Practice

Review a patch that replaces an exception with `return []`. **Check:** determine whether callers now mistake a service outage for “no tasks.” Write one specific review comment explaining the user-visible consequence and the expected distinction.

Continue with [Reviewing a Change](../code-reviews/reviewing-a-change.html).

---

[AI coding overview](index.html) · [Previous: Context and Project Instructions](context-and-project-instructions.html) · [Next: Debugging and Testing with AI](debugging-and-testing-with-ai.html)
