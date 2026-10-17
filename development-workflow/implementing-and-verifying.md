---
layout: default
title: "Implementing and Verifying a Change"
---

## Deliver One Complete Path

A vertical slice connects input, application behavior, storage if needed, and output. For a small task-search feature, start with one request that returns the correct results before adding optional filters.

Make the smallest coherent change and keep related tests near the behavior they protect. Use a failing reproduction for a bug when practical. Avoid broad refactoring unless it is needed to make the change understandable or correct.

Verification should follow risk. A typo fix needs an inspected diff and perhaps a rendered preview. A database write needs checks for invalid data and partial failure. An access-control change needs cases with users who have different permissions.

Before review, inspect the diff as someone seeing it for the first time. Remove temporary debugging output, explain non-obvious choices, and run the documented checks relevant to the change. Separate a failure caused by your patch from a pre-existing failure, and report both accurately.

## Practice

Break “add task search” into a small first slice and two optional follow-ups. **Check:** the first slice must be useful and testable on its own, and it must enforce access restrictions even before optional improvements land.

---

[Module overview](index.html) · [Previous: Understanding the Task](understanding-the-task.html) · [Next: Communication and Delivery](communication-and-delivery.html)
