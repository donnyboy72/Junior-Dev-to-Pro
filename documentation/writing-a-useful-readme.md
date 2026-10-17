---
layout: default
title: "Writing a Useful README"
---

## Support the First Successful Run

A README should answer what the project does, who it serves, how to run it, and where to find more detail. Start with a short explanation before installation commands.

A practical structure is:

```text
Project purpose and scope
Prerequisites and supported environment
Installation and configuration
Run locally
Run relevant checks
Project structure
Troubleshooting and contribution links
```

Use commands that match the repository. Do not copy `npm install` into a project with no package manifest. Explain which directory commands run from, what a successful result looks like, and how to stop a local server.

List required configuration names and supply harmless example values. Explain how credentials are obtained without putting real credentials in the document. Distinguish optional integrations from those required for a basic run.

## Practice

Ask someone to follow your setup instructions in a fresh environment, or rehearse them yourself without relying on shell history. **Check:** record every missing prerequisite or implicit step. Fix the instructions at the point where the learner needs that information.

---

[Module overview](index.html) · [Next: Explaining Decisions and Interfaces](explaining-decisions-and-interfaces.html)
