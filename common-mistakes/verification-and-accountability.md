---
layout: default
title: "Verification and Accountability"
---

## “It Ran Once” Is a Starting Point

A successful happy-path demonstration does not cover empty input, invalid data, denied access, or dependency failures. Choose verification based on what could go wrong and how costly that failure would be.

Before handing off a change, inspect the diff, run relevant checks, and compare the result with the acceptance criteria. Report limitations plainly. “The unit checks pass; I could not verify the email integration because this environment has no test credentials” is more useful than claiming everything works.

If your change causes a problem, communicate the impact and help restore service. Preserve evidence and avoid making rushed unrelated changes. After recovery, identify the assumption or missing check that allowed the failure and improve the process.

Do not turn every mistake into a large checklist. Add a targeted regression test, clearer instruction, or better diagnostic where it addresses the actual cause.

## Final Practice

A fix handles valid task titles but crashes on a blank string. Write the missing acceptance case, a regression check, and a short status update. **Check:** describe the observed behavior and repair without blaming the user or hiding the missed case.

---

[Module overview](index.html) · [Previous: Scope, Assumptions, and Overengineering](scope-and-assumptions.html)
