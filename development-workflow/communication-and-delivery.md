---
layout: default
title: "Communication and Delivery"
---

## Make Status Actionable

A useful update explains what works, what is uncertain, and what would unblock the next step. “Still working” gives a teammate little information.

For example: “Title matching and empty results are implemented. I found that archived tasks share the same endpoint; I need the product decision on whether search should include them. The current branch excludes them and has tests for that assumption.”

Ask for help with evidence: the intended behavior, observed failure, exact reproduction, and what you have already tried. Do not paste secrets or private customer records into shared channels.

At handoff, include how to run the change, checks performed, limitations, and any release requirement. If a release changes stored data or configuration, make deployment order explicit. After release, verify the intended behavior and watch the signals likely to reveal a regression.

## Final Practice

Write a handoff for a task-search feature whose index migration must run before deployment. **Check:** name the ordering constraint, how to detect a slow query, and who should respond if error rates rise. Keep the update short enough for a teammate to act on it.

---

[Module overview](index.html) · [Previous: Implementing and Verifying a Change](implementing-and-verifying.html)
