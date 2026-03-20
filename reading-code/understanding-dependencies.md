---
layout: default
title: Understanding Dependencies
---

# Understanding Dependencies

Modern software is built on the shoulders of giants. You're rarely writing everything from scratch. Instead, you're using libraries (dependencies) to do things like talk to a database, handle authentication, or format dates.

### Where to Find Them
Different languages use different files to list their dependencies:

- **JavaScript/TypeScript:** `package.json`
- **Python:** `requirements.txt` or `pyproject.toml`
- **Ruby:** `Gemfile`
- **Go:** `go.mod`
- **Rust:** `Cargo.toml`

---

### Step-by-Step: Reading a `package.json`
When you open a `package.json`, focus on these two sections:

1.  **`dependencies`:** These are required for the app to run in production (e.g., `react`, `express`, `mongoose`).
2.  **`devDependencies`:** These are only used during development (e.g., `jest` for testing, `eslint` for formatting).

```text
    Project Stack
    +--------------------------------+
    | Frontend Framework: React      |  <-- In dependencies
    | UI Library: Tailwind CSS       |  <-- In dependencies
    | Data Fetching: Axios           |  <-- In dependencies
    | Testing Tool: Jest             |  <-- In devDependencies
    +--------------------------------+
```

---

### Practical Strategy: The "What is this?" Google
If you see a dependency you don't recognize:
1.  **Search for it on the web:** "npm axios" or "python pandas."
2.  **Read the first paragraph of its documentation:** What problem does it solve?
3.  **Search for its usage in your codebase:** Where is it imported? How is it being used?

---

### Real-World Example: A Surprise Discovery
You're looking at a bug related to dates. You check `package.json` and see `date-fns` listed. You now know to search the codebase for imports from `date-fns` to find where the date logic lives.

---

### Mental Model: The Lego Box
Think of a project like a finished Lego set. The dependencies are the different types of bricks (square, thin, wheels, motors) used to build it. To understand the whole set, you need to know what the individual bricks do.

---

### Common Mistake: "Blind Trust"
Just because a library is in the `dependencies` list doesn't mean it's being used. Sometimes projects have "ghost dependencies"—old libraries that were never removed. **Always verify usage before assuming a library is active.**

[Next: Debugging While Reading Code](debugging-while-reading-code.md)
