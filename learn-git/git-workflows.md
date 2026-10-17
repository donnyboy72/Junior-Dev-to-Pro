---
layout: default
title: "Git Workflows"
---

## Coordinate Changes with a Shared Convention

A Git workflow defines how a team branches, reviews, integrates, and releases changes. Git supports several approaches; use the repository’s convention rather than mixing them accidentally.

## Short-Lived Feature Branches

A common workflow starts from `main`, implements one focused change on a branch, and integrates it through a pull request after checks and review. Assuming `main` is the team’s base branch and your working tree is clean:

```bash
git switch main
git pull --ff-only
git switch -c feature/task-search
```

Make the change, stage explicit paths, commit, and push the branch. Keep it small enough to review. If `--ff-only` refuses to update, inspect the divergence before deciding how to reconcile it; do not reset local work blindly.

## Trunk-Based Development

Trunk-based development emphasizes frequent integration into a shared mainline, often through very short-lived branches. Tests and small changes help keep the mainline usable. Feature flags can hide incomplete behavior while allowing compatible code to integrate, but flags need ownership and eventual cleanup.

## Release Branches and Forks

A release branch can support a version while work continues elsewhere. Fixes may need to reach multiple branches; track that explicitly to avoid reintroducing a bug in the next release. Long-lived branches increase the work needed to reconcile changes.

A fork-based contribution uses a separately hosted repository when contributors cannot push directly to the original project. A fork is a hosting arrangement and can still use short-lived branches and pull requests.

## Choose and Follow a Policy

Agree on the base branch, required checks, review expectations, merge strategy, and release process. Never rewrite a branch others depend on without coordination. Rebase is useful in some workflows, but it changes commit identities.

## Practice

Describe the path for a task-search feature from a clean checkout through review and release. Then describe a production bug fix that also needs to reach an active release branch. **Check:** distinguish merging code from deploying it, and explain how you would verify the fix exists on every required branch.

[Learn Git overview](index.html) · [Preparing a Pull Request](../pull-requests/preparing-a-pull-request.html)
