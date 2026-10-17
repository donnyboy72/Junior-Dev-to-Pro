---
layout: default
title: "Scope, Assumptions, and Overengineering"
---

## Solve the Observed Problem

A small feature can expand into a framework rewrite when hypothetical future needs drive the design. Start from the current requirements and choose a solution that is easy to understand and change.

For example, a single task filter probably does not need a general query-language engine. A straightforward function with explicit inputs may solve the immediate problem while leaving room for later improvements.

Avoid copying code or generated suggestions without tracing their behavior. Check assumptions about null values, ordering, permissions, errors, and library versions. Familiar-looking code can still be wrong for the surrounding contract.

Keep unrelated improvements separate. Reformatting every file while fixing one validation bug makes review harder and obscures the important change. If refactoring is necessary, explain how it supports the behavior change and preserve verification.

## Practice

A ticket asks for sorting tasks by due date. List the questions that affect correctness before selecting an implementation. **Check:** include missing dates, equal dates, timezone interpretation, ascending versus descending order, and whether ordering happens before pagination. Identify one optional improvement to defer.

---

[Module overview](index.html) · [Previous: Getting Stuck and Asking for Help](getting-stuck-and-asking-for-help.html) · [Next: Verification and Accountability](verification-and-accountability.html)
