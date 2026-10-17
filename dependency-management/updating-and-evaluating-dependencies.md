---
layout: default
title: "Evaluating and Updating Dependencies"
---

## Review the Cost Alongside the Benefit

Before adding a package, identify the problem it solves, whether existing tools already solve it, its maintenance status, license, dependency footprint, and how it handles the data you will send it. A small convenience may not justify a large operational cost.

For an update, read release notes and migration guidance. Update the intended dependency set, inspect both manifest and lockfile changes, and run checks that exercise the integration. Major-version numbers suggest compatibility changes, but smaller updates can still expose assumptions in your code.

A vulnerability report needs context: affected versions, whether the vulnerable behavior is reachable, and the available fix or mitigation. Do not blindly run an automatic force-upgrade command that may introduce breaking changes. Prioritize credible exposure and verify the resulting behavior.

Review unexpected installation scripts and dependency sources. Use the repository’s supported registry and installation process; do not execute a pasted installer simply because a build failed.

## Final Practice

Prepare a dependency-update pull request. **Check:** state why the update is needed, summarize relevant compatibility changes, record checks performed, and inspect unexpected transitive changes. Describe how you would revert the update if it causes a regression.

---

[Module overview](index.html) · [Previous: Isolated Development Environments](isolated-environments.html)
