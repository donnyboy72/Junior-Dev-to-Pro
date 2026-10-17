---
layout: default
title: "Manifests and Lockfiles"
---

## Record Intent and Resolution

A direct dependency is one the project explicitly uses. A transitive dependency is brought in by another dependency. Even a small manifest can produce a large dependency graph.

A manifest declares the project’s needs; a lockfile records a resolved set of package versions and related metadata for the package manager. Examples include `package.json` with a corresponding npm lockfile, or a Ruby `Gemfile` and `Gemfile.lock`. Follow the project’s ecosystem and repository policy.

A version range expresses which versions the resolver may choose. A lockfile narrows the installed graph for a particular workflow, but does not guarantee identical behavior across every operating system or runtime. Native code and platform-specific packages can still differ.

For an npm project with a committed, consistent `package-lock.json`, `npm ci` installs from the lockfile and rejects inconsistencies with the manifest. This command is not applicable to repositories without those files.

## Practice

Inspect a project’s manifest and lockfile. **Check:** name one direct and one transitive dependency, identify the supported runtime, and explain why deleting the lockfile to “fix installation” can introduce unrelated updates.

---

[Module overview](index.html) · [Next: Isolated Development Environments](isolated-environments.html)
