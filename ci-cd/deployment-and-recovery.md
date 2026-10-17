---
layout: default
title: "Deployment and Recovery"
---

## Plan for What Happens After Publication

A deployment changes a running environment. Before release, identify the artifact version, required configuration, database changes, and signals that show the release works.

A smoke check exercises a small critical path: load the site, fetch an authenticated task list, or create a disposable test record in an approved environment. It complements deeper pre-release checks rather than replacing them.

For database changes, consider an expand-and-contract sequence. Add a compatible field first, deploy code that can use it, migrate data if needed, and remove the old field only after old code no longer depends on it. Not every migration can be safely reversed.

Recovery may mean rolling back an artifact, disabling a feature, or rolling forward with a fix. Specify who makes the decision and what evidence triggers it. A code rollback alone may fail if the new version changed stored data incompatibly.

## Final Practice

Plan a release that renames a task status field while old application instances still run. **Check:** preserve compatibility during the transition, define a smoke check, and explain what can and cannot be rolled back. Include monitoring for the behavior most likely to regress.

---

[Module overview](index.html) · [Previous: Designing a CI Pipeline](designing-a-ci-pipeline.html)
