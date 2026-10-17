---
layout: default
title: "Describing and Updating a Pull Request"
---

## Give the Reviewer a Starting Point

A description should explain the problem, the resulting behavior, and how you checked it. Include a reproduction example when it makes the change easier to evaluate.

```text
Previously, the task list crashed when the API returned no tasks.
It now displays an empty state with a Create Task link.

Validation:
- Empty-response regression test passes.
- Checked loading, empty, populated, and error states locally.
```

Only claim checks you actually performed. For a visible interface change, attach an image when it helps the reviewer assess the result. Link the relevant issue and describe any remaining limitation.

Respond to review comments with changes or reasoning. After updating the branch, summarize significant revisions so the reviewer knows where to look. If the patch changes scope, update its title and description to match.

When the base branch moves, follow the repository’s merge or rebase policy. Rebasing rewrites commit identities; avoid rewriting a shared branch without coordination. If a private feature branch must be force-pushed, understand the remote state and use the team’s approved procedure.

## Practice

Write a description for fixing a duplicate form submission. **Check:** include the trigger, resulting behavior, verification, and any server-side duplicate-prevention requirement.

---

[Module overview](index.html) · [Previous: Preparing a Pull Request](preparing-a-pull-request.html) · [Next: Merging and Following Up](merging-and-follow-up.html)
