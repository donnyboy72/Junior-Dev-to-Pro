---
layout: default
title: "Secrets and Secure Development Habits"
---

## Limit What a Credential Can Do

A secret is a credential such as an API token, database password, or signing key. Keep it out of source files, logs, screenshots, and browser bundles. Use protected runtime configuration or a secret manager and grant only the access the application needs.

A repository may provide a harmless configuration example:

```text
API_BASE_URL=https://api.example.test
API_TOKEN=replace-with-your-own-token
```

Document required names and keep real local values out of Git. Ignoring a file does not protect a secret already committed to history. If a credential is exposed, revoke or rotate it promptly, assess where it was used, and follow the team’s incident procedure. Deleting the visible text alone does not invalidate copies.

Review dependency updates and use HTTPS for credentials in transit. Treat authorization, secret handling, and input processing as normal review concerns rather than a final release ceremony. Use established authentication and password-storage libraries instead of designing your own cryptography.

## Final Practice

Write a response plan for a token accidentally included in a pull request. **Check:** start with invalidating the credential, consider logs and forks, update the application’s replacement secret, and verify it still works without publishing the new value.

## Reference

[OWASP secrets management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)

---

[Module overview](index.html) · [Previous: Handling Untrusted Input](handling-untrusted-input.html)
