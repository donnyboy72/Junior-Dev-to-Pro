---
layout: default
title: "Isolated Development Environments"
---

## Keep Project Requirements Separate

Different projects may require different tools and library versions. Isolate dependencies so one project’s installation does not silently change another project’s environment.

Python’s standard library can create a virtual environment:

```bash
python3 -m venv .venv
. .venv/bin/activate
python -c 'import sys; print(sys.executable)'
```

This activation syntax is for POSIX shells. The printed executable should belong to `.venv`. Use the project’s requirements or lock-based installation instructions if present, and keep the environment directory out of version control. Run `deactivate` when finished.

Other ecosystems have their own conventions, such as project-local Node dependencies or Bundler-managed Ruby gems. Document the runtime and installation command instead of asking every developer to infer them.

Environment variables configure a running program; they do not install dependencies. A missing package and a missing API token are different failures. Keep real secrets out of committed environment examples.

## Practice

Explain why an import can succeed in one terminal and fail in another. **Check:** compare the interpreter path and active environment before reinstalling globally. Identify which environment files should be committed and which are local generated state.

---

[Module overview](index.html) · [Previous: Manifests and Lockfiles](manifests-and-lockfiles.html) · [Next: Evaluating and Updating Dependencies](updating-and-evaluating-dependencies.html)
