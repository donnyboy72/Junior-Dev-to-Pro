---
layout: default
title: "Designing a CI Pipeline"
---

## Make Checks Repeatable

Start with commands that already work locally. A CI configuration should declare its triggers, runtime, installation process, checks, permissions, and outputs. Keep the steps understandable enough that a failed job is easy to reproduce.

This illustrative GitHub Actions workflow checks a Python project containing a `tests` directory. It is not this site’s build configuration. The tags are readable examples; select supported versions and pin reviewed actions to full commit SHAs for a maintained workflow.

```yaml
name: Python checks
on: [push, pull_request]
permissions:
  contents: read
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - run: python -m unittest discover -s tests
```

The example uses only the standard library. A real project may need a lockfile-based install and additional services. Cache dependencies for speed only when cache keys track relevant inputs; a cache must not become a hidden requirement for correctness.

Pull request code can be untrusted. Do not grant deployment secrets or write permissions to jobs executing arbitrary contribution code. Be especially careful with privileged triggers and scripts that interpolate untrusted text.

## Practice

Explain how you would add a build stage and preserve its output. **Check:** a failed test should stop publication, and an untrusted pull request should not receive release credentials.

## Reference

[GitHub Actions secure use](https://docs.github.com/en/actions/reference/security/secure-use)

---

[Module overview](index.html) · [Previous: Understanding CI/CD](understanding-ci-cd.html) · [Next: Deployment and Recovery](deployment-and-recovery.html)
