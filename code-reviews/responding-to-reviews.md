---
layout: default
title: "Responding to Reviews"
---

## Close the Loop with Evidence

Read all feedback before editing. Several comments may share one underlying cause, such as mixing validation and persistence in the same function.

For each required comment, make the change or explain the relevant constraint. A useful response is: “Added an ownership filter and a regression test with two users; the previous implementation fails that test.” If you disagree, show the requirement or example supporting your reasoning and propose an alternative.

After revisions, inspect the full diff again. Small edits can invalidate an earlier assumption or introduce unrelated formatting changes. Run the checks relevant to the revised behavior and summarize their actual results.

Resolve conversations according to the team’s convention. Do not mark a concern resolved merely because you replied. Significant updates may need a fresh review, especially when approval applied to an earlier version.

## Final Practice

Review a small change with a peer. Leave one correctness observation and one optional clarity suggestion, then exchange roles and revise the patch. **Check:** the final description should match the implemented behavior, each required concern should have an explicit outcome, and the reviewer should be able to verify the fix without reconstructing the conversation.

---

[Module overview](index.html) · [Previous: Writing Useful Review Feedback](writing-useful-feedback.html)
