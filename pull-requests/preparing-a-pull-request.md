---
layout: default
title: "Preparing a Pull Request"
---

## Keep the Change Focused

Begin from the team’s intended base branch with a clean working tree. The following example assumes a repository with a `main` branch and an `origin` remote:

```bash
git switch main
git pull --ff-only
git switch -c fix/task-empty-state
```

Implement one coherent change. A bug fix should not also reorganize unrelated files. Add a regression test when behavior warrants one, and run the project’s documented checks.

Before publishing, inspect both staged and unstaged changes:

```bash
git status
git diff
git diff --cached
```

Stage explicit file paths, commit with a meaningful message, and inspect the complete branch diff against the base. Check for generated files, local configuration, and credentials. A `.gitignore` rule does not remove a file that is already tracked.

Push the branch when it is ready for collaboration: `git push -u origin fix/task-empty-state`. Open a draft pull request if feedback would help before completion; explain what remains unfinished.

## Practice

Prepare a documentation-only patch on a practice branch. **Check:** its diff should contain only the intended lesson change, and you should be able to explain every changed line.

---

[Module overview](index.html) · [Next: Describing and Updating a Pull Request](describing-and-updating-a-pr.html)
