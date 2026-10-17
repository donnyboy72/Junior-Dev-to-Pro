---
layout: default
title: "Explaining Decisions and Interfaces"
---

## Choose the Right Document

A tutorial teaches through a guided example. A how-to guide solves a specific task. A reference lists precise inputs, outputs, and options. An explanation describes why the system works as it does. Mixing all four can make each harder to use.

For a task API, reference documentation should state the route, authentication requirement, request fields, success response, and error behavior. Mark illustrative data clearly and document pagination or limits that clients must handle.

Use an architecture decision record for a consequential choice:

```text
Title: Store task ownership in the relational database
Status: Accepted
Context: Every task must have one existing owner.
Decision: Use a required foreign key to users.
Consequences: Invalid owners are rejected; deleting users needs a policy.
```

Record the actual constraints and tradeoffs. A decision record should help a future developer know whether the original reasoning still applies, rather than merely state that one technology is “best.”

## Practice

Write a short decision record for storing uploaded files outside the application container. **Check:** explain persistence, access control, operational cost, and what would justify revisiting the choice.

---

[Module overview](index.html) · [Previous: Writing a Useful README](writing-a-useful-readme.html) · [Next: Maintaining and Checking Documentation](maintaining-and-checking-docs.html)
