---
layout: default
title: "Issues, Forks, and Patches"
---

## Make the Change Easy to Reproduce

An issue reports a problem; a pull request proposes a change. A useful issue contains a minimal reproduction and the relevant environment, not only “it does not work.” Search for duplicates first and keep one issue focused on one problem.

If you lack write access, a fork is your hosted copy of the repository. Clone your fork and, when needed, add the original repository as `upstream` using its actual URL. Verify `git remote -v` so you know where pushes will go.

Create a focused branch, implement the smallest suitable fix, and run the project’s contribution checks. Read the complete diff before publishing. Avoid unrelated formatting, generated output, or dependency changes unless the contribution requires them.

Use the project’s pull request template. Link the issue, explain the behavior change, record validation, and mention any requested contributor agreement. Do not claim a license permits a particular use without reading its terms.

## Practice

Draft a bug report for a lesson link that reaches a missing page. **Check:** include the source page, exact link, expected destination, observed result, and a proposed correction that does not invent a nonexistent lesson.

---

[Module overview](index.html) · [Previous: Finding a Useful Contribution](finding-a-contribution.html) · [Next: Working with Maintainers](working-with-maintainers.html)
