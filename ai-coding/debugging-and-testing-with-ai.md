---
layout: default
title: "Debugging and Testing with AI"
---

## Ask for Experiments, Not Guesses

Start a debugging session with a reproduction: the input, expected output, observed output, environment, and exact failing command. Ask the assistant for hypotheses and one experiment that can distinguish them.

If an API request times out, useful hypotheses include an unreachable host, an exhausted connection pool, and a slow query. Changing formatting code does not test any of those causes. Ask what evidence would support or rule out each explanation.

## Preserve the Regression Case

For a bug fix, capture a failing case before editing when practical. Ask the assistant to explain why the old code fails and why the proposed test would catch a recurrence.

```text
Reproduce the empty-list crash with a focused regression test.
Show that it fails against the existing implementation.
Then make the smallest fix and run the relevant checks.
Do not weaken an assertion merely to make the test pass.
```

Test expected behavior rather than mirroring the generated implementation. Include a boundary case and a failure path. If the implementation and its tests share the same mistaken assumption, both can look correct together.

## Read Test Output as Evidence

Distinguish “I suggest running this command” from “this command ran and passed.” Report missing tools, unavailable credentials, and skipped integration checks explicitly. A passing unit test does not verify a live service integration.

When an assistant repeatedly edits without progress, stop the loop. Inspect the current diff, return to the last useful reproduction, and reduce the task. Keep the useful evidence instead of stacking speculative changes.

## Practice

Give the assistant a small failing test from a disposable project. **Check:** require a hypothesis, one diagnostic step, a fix, and the final command output. Reject a patch that only deletes the failing assertion.

See [Debugging with Tests](../testing/debugging-with-tests.html).

---

[AI coding overview](index.html) · [Previous: Reviewing AI-Generated Code](reviewing-generated-code.html) · [Next: Setting Up Your First Coding Agent](setting-up-a-coding-agent.html)
