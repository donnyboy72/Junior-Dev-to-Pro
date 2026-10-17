---
layout: default
title: "Writing Useful Review Feedback"
---

## Describe the Consequence

Useful feedback identifies a location, explains a concrete consequence, and suggests a direction. It separates required changes from optional preferences.

Weak comment: “This is wrong.”

Useful comment: “When `items` is empty, dividing by its length raises an exception. Could this return the documented empty-result value? Please add an empty-input case.”

Label an optional suggestion clearly. A naming preference should not sound like a release-blocking correctness issue. Let automated formatting tools handle routine style rules where possible.

Ask a question when you are missing context, but state a confirmed bug directly. “Does this check ownership?” is less useful than “This query filters by task ID only, so user B can retrieve user A’s task.” Include reproduction steps when they make the issue easy to verify.

Keep feedback focused on code and behavior. Explain tradeoffs without assigning motives or judging the author. If a discussion becomes repetitive, agree on a short conversation and record the resulting decision on the review.

## Practice

Rewrite “bad variable name” into one optional clarity suggestion. Rewrite “needs tests” into a specific missing scenario. **Check:** another developer should know what to change and why.

---

[Module overview](index.html) · [Previous: Reviewing a Change](reviewing-a-change.html) · [Next: Responding to Reviews](responding-to-reviews.html)
