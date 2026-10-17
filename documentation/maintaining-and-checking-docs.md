---
layout: default
title: "Maintaining and Checking Documentation"
---

## Treat Instructions as a Product Interface

Documentation becomes stale when behavior changes without the matching explanation. Include documentation in the same change when you rename a command, add configuration, or change an API contract.

Check examples as deliberately as code. A setup walkthrough should start from the documented initial state. A command should produce the described output. A link should reach a real page, and a heading link should match the rendered anchor.

Keep repeated facts in one authoritative place and link to them. For example, a troubleshooting page can point to the supported runtime version in the setup guide instead of maintaining a second version list.

When an instruction fails, improve the document rather than only answering privately. Include a symptom, likely cause, and diagnostic step. Avoid “just reinstall everything,” which can hide the real problem and destroy useful evidence.

## Final Practice

Take one lesson in this repository and verify its local links and examples. Record prerequisites, expected output, and a common failure. **Check:** a new learner should be able to tell whether they succeeded without asking the author. For destructive examples, state the disposable practice environment before the command.

---

[Module overview](index.html) · [Previous: Explaining Decisions and Interfaces](explaining-decisions-and-interfaces.html)
