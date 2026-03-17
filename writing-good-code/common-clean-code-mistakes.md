---
layout: default
title: Common Clean Code Mistakes
---

# Common Clean Code Mistakes

Even after learning the principles, it's easy to fall back into bad habits. Here are the most common clean code mistakes made by junior developers—and how to avoid them.

---

# Mistake 1: The "Everything Bagel" Function
Writing a function that tries to do everything: validate data, save to a database, and send an email.
- **Why it's bad:** It's hard to read, hard to test, and impossible to reuse.
- **The Fix:** Follow the **Single Responsibility Principle (SRP).** Break the function into smaller, focused helpers.

---

# Mistake 2: "Mental Mapping" Variable Names
Using single-letter variables or names that require the reader to remember a "secret" meaning.
- **Why it's bad:** It creates cognitive load. The reader has to keep a mental dictionary of your abbreviations.
- **The Fix:** Use descriptive, pronounceable names. Call it `userProfile` instead of `up`.

---

# Mistake 3: Commenting the Obvious
Writing comments that just repeat what the code already says.
- **Why it's bad:** It clutters the file and makes it harder to find the real logic.
- **The Fix:** Only use comments to explain **why** you made a specific decision.

---

# Mistake 4: Deeply Nested "If" Statements
Using multiple layers of `if/else` that make your code look like a "Christmas Tree" (tilted on its side).
- **Why it's bad:** It's hard to follow the flow of logic.
- **The Fix:** Use **Guard Clauses** to handle errors early and return from the function as soon as possible.

---

# Mistake 5: Hardcoded "Magic" Values
Using numbers or strings like `1.08` or `"PROD"` directly in your logic.
- **Why it's bad:** If the value changes, you have to find and replace it in multiple files.
- **The Fix:** Use named **Constants** (e.g., `const SALES_TAX = 1.08;`).

---

# Mistake 6: Forgetting to Format
Letting your code have inconsistent indentation and spacing.
- **Why it's bad:** It looks unprofessional and makes your code much harder to skim.
- **The Fix:** Use automated tools like **Prettier** and **ESLint**. Set up "Format on Save" in your IDE.

---

# Final Summary Diagram (The Clean Code Mindset)

```text
       [ JUNIOR MINDSET ]             [ PROFESSIONAL MINDSET ]
    +-----------------------+      +--------------------------+
    | "Does it work?"       |  →   | "Is it readable?"        |
    | "How fast can I code?"|  →   | "Is it maintainable?"    |
    | "I'll fix it later."  |  →   | "I'll fix it now."       |
    +-----------------------+      +--------------------------+
```

---

# Final Conclusion

Writing good code is a habit. You won't be perfect on day one, and that's okay! By focusing on readability, simplicity, and maintainability, you'll become a developer that every team wants to hire.

---

# Ready to Start?

Go back to the module landing page to review anything you missed:

➡ **[Writing Good Code - Home](index.md)**
