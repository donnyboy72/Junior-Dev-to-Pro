---
layout: default
title: Why Reading Code Matters
---

# Why Reading Code Matters

Most beginners think being a "good developer" means writing code quickly. In the real world, it's the opposite: **Software engineering is reading.**

Studies and common industry wisdom suggest a "Reading to Writing Ratio" of about **10 to 1**. For every line of code you write, you will read at least ten others.

### The 90/10 Rule

```text
Writing Code [10%]   ||||| 
Reading Code [90%]   ||||||||||||||||||||||||||||||||||||||||||||||||||
```

### Why Do We Read So Much?

1.  **Maintenance:** Most code you work on already exists. You have to read it to change it.
2.  **Context:** You can't add a new feature without understanding how the current system works.
3.  **Reviewing:** Peer reviews (PRs) are a huge part of your job. You read your teammates' code to find bugs or learn.
4.  **Learning:** Want to know how `React` or `Django` works? You have to read the source.

---

### Real-World Example: The "Quick Fix"

Imagine a bug report: "The logout button doesn't clear the session."

*   **Bad Approach:** Jump straight into `LogoutButton.js` and start writing code.
*   **Good Approach:**
    1.  Read `AuthContext.js` to see how sessions are handled.
    2.  Read `SessionManager.ts` to see what "clearing" actually means.
    3.  Read `ApiCaller.js` to see if a logout request is even being sent.
    4.  *Finally*, write two lines of code to fix the issue.

**Reading for 20 minutes saves you 2 hours of writing the wrong fix.**

---

### Common Mistake: "I'll Just Rewrite It"
Juniors often look at complex code they don't understand and think, "This is messy, I'll just rewrite it." This is a trap. The code might be complex because it handles 50 edge cases you don't know about yet. **Read first, rewrite (maybe) second.**

---

### Practical Strategy: The "Mental Debugger"
When reading, try to act like the computer. What is the value of `x` right now? If this `if` statement is true, where do I go next?

### Mental Model: The Library
Think of a codebase like a massive library. You don't need to read every book to find the information you need, but you **must** know how to use the index and the Dewey Decimal System (the project structure).

[Next: How to Approach a New Codebase](how-to-approach-a-new-codebase.md)
