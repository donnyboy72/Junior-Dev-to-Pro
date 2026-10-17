---
layout: default
title: "Understanding CI/CD"
---

## Connect a Change to a Verified Artifact

Continuous integration (CI) combines frequent integration with automated checks. A typical pipeline checks out source, prepares a declared environment, installs dependencies, runs validation, and builds an artifact.

Continuous delivery keeps a verified change ready for release; production deployment may still require a human decision. Continuous deployment automatically releases qualifying changes. Teams sometimes use these terms loosely, so confirm what a project’s pipeline actually does.

```text
Commit → install → validate → build → release decision → deploy → verify
```

A failing check should explain which stage failed and provide useful diagnostics. A passing pipeline means only that the configured checks passed. Missing authorization tests or broken production configuration can still cause a release failure.

Prefer building a versioned artifact once and promoting that artifact through environments. Rebuilding independently for production can introduce differences from the version you tested. Keep environment-specific configuration explicit and protect credentials separately.

## Practice

Draw a pipeline for a static learning site. **Check:** include link validation, site generation, artifact inspection, publication, and a post-publication page check. Identify which steps can run without production credentials.

---

[Module overview](index.html) · [Next: Designing a CI Pipeline](designing-a-ci-pipeline.html)
