---
layout: default
title: "Capstone: A Small Change You Can Explain"
---

## Build a Task-Title Validator

Use a disposable Python project. Create a `task_titles.py` module exposing `validate_title(value)`. Ask your assistant to help implement this contract:

- Non-string input raises `TypeError`.
- Leading and trailing whitespace is removed.
- A blank result raises `ValueError`.
- A result longer than 80 characters raises `ValueError`.
- Otherwise, return the trimmed title without changing its internal spacing.

For this exercise, length means Python’s `len()` on the trimmed string. That is an explicit practice constraint, not a complete policy for every internationalized interface.

## Work in Reviewable Steps

1. Write a focused prompt with the contract and ask for a plan.
2. Supply project context and a real check command, such as `python3 -m unittest discover -s tests` after creating the tests directory.
3. Ask for cases covering valid input, empty input, whitespace-only input, 80 characters, 81 characters, and a non-string value.
4. Inspect the assertions before implementing the function.
5. Make the smallest implementation and run the tests.
6. Inspect the full diff and explain the implementation yourself.

Keep the tool’s access limited to the practice project. No API keys, external connectors, deployments, or production data are needed for this task.

## Expected Results

| Input | Expected result |
| --- | --- |
| `"  Write tests  "` | `"Write tests"` |
| `"Keep  internal spaces"` | Unchanged internal spacing |
| `"   "` | `ValueError` |
| `None` | `TypeError` |
| `"a" * 80` | Accepted |
| `"a" * 81` | `ValueError` |

## Final Handoff

Report the files changed, command run, observed result, and any limitation. Describe one suggestion you accepted and why. If the assistant changed an assertion or added a dependency, justify that change against the original contract.

**Check:** you should be able to explain and modify the finished function without asking the assistant again. For the agent-building extension, trace a read-tool request through your host and explain where an out-of-scope request would be rejected.

---

[AI coding overview](index.html) · [Previous: Cost, Context Limits, and Evaluation](cost-context-and-evaluation.html)
