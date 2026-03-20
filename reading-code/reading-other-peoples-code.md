---
layout: default
title: Reading Other People's Code
---

# Reading Other People's Code

As a junior developer, you're going to read a lot of code that wasn't written by you. Some of it will be beautiful, and some of it will be... well, let's call it "challenging."

### The Empathy Rule
Before you judge a messy piece of code, remember:
1.  **You weren't there:** You don't know the deadline they were facing.
2.  **Code evolves:** What was once clean might have been changed by 10 different people over 5 years.
3.  **Knowledge grows:** The person who wrote it might know much more *now* than they did then.

---

### Step-by-Step: The "Empathy First" Approach
1.  **Read for intent:** What was the author trying to achieve?
2.  **Look for patterns:** Does this person like using short, descriptive functions? Or do they prefer one large, comprehensive function?
3.  **Don't assume "different" is "bad":** Just because they use a different style than you doesn't mean it's wrong.
4.  **Find the "why":** Read the comments (if they exist) and the Git commit messages to understand the context.

---

### Practical Strategy: The "Git Blame" Tool
Use `git blame` (or your IDE's "Annotate" feature) to see:
- Who wrote a specific line.
- **When** it was written.
- The commit message associated with it.

```text
    Git Blame Output:
    [8a2f1c] 2022-03-15  John Doe: Fix session timeout bug
    [4c5d6e] 2023-11-10  Jane Smith: Add logging for better debugging
```

---

### Real-World Example: The "Mysterious Loop"
You find a complex loop that seems unnecessary. You check the `git log` and find a commit from 2 years ago: "Fix: Handling edge case for Leap Year calculations." Suddenly, the complexity makes sense!

---

### Mental Model: The Conversation
Think of reading someone else's code as a one-way conversation. The code is telling you a story about how it solves a problem. Your job is to listen and understand, not to interrupt with your own opinions (until you're ready to make a pull request!).

---

### Practical Strategy: Learn from the Best
Want to get better at reading code? **Read open-source projects.** Go to GitHub, find a library you use (like `lodash` or `express`), and read through their source code. Look at how they name their variables and how they structure their folders.

---

### Common Mistake: "The Style Snob"
Don't spend time reformatting someone else's code just because you don't like where they put their braces. Focus on the **behavior** and **correctness** of the code first.

[Next: Common Reading Mistakes](common-reading-mistakes.md)
