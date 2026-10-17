---
layout: default
title: "Debugging Build Failures"
---

## Find the First Actionable Error

Later errors often follow from one earlier failure. Read the first useful diagnostic, identify the failing stage, and reproduce the same command locally with the same tool versions and inputs.

Common causes include a missing dependency, a mismatched runtime, a configuration file in the wrong directory, malformed syntax, and missing environment variables. A site can also build successfully but publish broken asset paths, so inspect the artifact when the symptom appears only after deployment.

Try a clean build using the project’s documented process. Preserve source files and useful logs; deleting arbitrary folders can erase evidence or work. If caching is involved, compare cached and uncached runs before declaring the cache responsible.

A reproducible build depends on declared tools and inputs. A clean checkout should not need an uncommitted file from one developer’s laptop. Record the runtime, dependency lockfile, configuration, and command used when reporting a failure.

## Final Practice

A site works at `/` locally but its stylesheet fails under `/Junior-Dev-to-Pro/`. **Check:** inspect the generated stylesheet URL and base-path configuration before reinstalling dependencies. Explain why a successful build alone does not prove that deployment paths work.

---

[Module overview](index.html) · [Previous: Scripts and Task Runners](scripts-and-task-runners.html)
