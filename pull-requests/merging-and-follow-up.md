---
layout: default
title: "Merging and Following Up"
---

## Integration Is Part of the Work

Before merging, confirm that required checks and approvals apply to the current branch state. Resolve remaining blocking discussions and verify that the base branch is correct.

Teams may use a merge commit, squash merge, or rebase merge. A merge commit preserves branch history, squash combines the patch into one commit, and rebase places commits on a new base. Follow the repository’s policy rather than choosing a history style independently.

After merging, verify what actually happens next. Some repositories deploy automatically; others require a release step. A merged patch is not proof that production runs the new behavior. Follow the release process and check the relevant health signals.

Synchronize your local base branch. Delete a local branch only after confirming its work is integrated. A normal `git branch -d branch-name` may refuse a squash-merged branch because its commits are not direct ancestors; inspect the result before using a forced deletion.

## Final Practice

Write a merge checklist for a team with required tests and a manual production release. **Check:** distinguish code integration, deployment, and post-deployment verification. Include who owns follow-up if the release fails.

---

[Module overview](index.html) · [Previous: Describing and Updating a Pull Request](describing-and-updating-a-pr.html)
