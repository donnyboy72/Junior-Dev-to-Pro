---
layout: default
title: "Scripts and Task Runners"
---

## Give Common Work a Clear Entry Point

A project often repeats the same commands: install dependencies, format, check, build, and preview. A task runner names those operations so local development and CI use the same steps.

For a hypothetical Python project with tests and a static-site build, a Makefile might contain:

```makefile
.PHONY: test build check

test:
	python3 -m unittest discover -s tests

build:
	python3 scripts/build.py

check: test build
```

Recipe lines require tabs. These commands are illustrative; this repository does not contain that Python build script or test suite. Use the tools that match the actual project rather than adding a task runner for its own sake.

A good command fails with a nonzero exit status when its work fails, documents required inputs, and avoids depending on an undocumented working directory. Keep destructive cleanup separate and limit it to known generated paths.

## Practice

Describe the commands a new teammate would need to preview a documentation site. **Check:** distinguish installing tools, generating output, serving that output, and verifying links. Decide which commands should also run in CI.

---

[Module overview](index.html) · [Previous: From Source to Artifact](source-to-artifact.html) · [Next: Debugging Build Failures](debugging-builds.html)
