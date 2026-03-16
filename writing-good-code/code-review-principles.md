# Code Review Principles

A **Code Review** is the process where one developer looks at another developer's code before it is merged into the project. It's the ultimate "Quality Check."

As a junior developer, code reviews are your best chance to learn from senior engineers and improve your skills.

---

# Why Code Reviews Matter

### 1. Catching Bugs
Another person's eyes will often find a bug you missed after staring at the same code for three hours.

### 2. Knowledge Sharing
Reviewing code is how developers share ideas, learn new techniques, and stay in sync with the project's design.

### 3. Maintaining Standards
Code reviews ensure that everyone on the team is following the same naming, style, and architectural patterns.

---

# How to Handle Code Reviews

### If You are the Author (Receiving Feedback):
1.  **Don't Take it Personally:** A "request for change" is a critique of the *code*, not of *you* as a developer.
2.  **Be Humble:** If a senior suggests a better way, ask *why* so you can learn for next time.
3.  **Explain Your Decisions:** If the reviewer asks "Why did you do it this way?", provide a clear, professional explanation.

### If You are the Reviewer (Giving Feedback):
1.  **Be Kind:** Use constructive language. Say "Could we try renaming this variable for clarity?" instead of "Bad name."
2.  **Ask Questions:** Instead of just telling someone what to do, ask "What happens if this input is null?". This helps them find the bug themselves.
3.  **Focus on the Big Picture:** Don't just look for typos. Look for logic errors, missing tests, and architectural problems.

---

# Code Review Flow Diagram

```text
       [ AUTHOR ]
           ↓
       [ CREATE PULL REQUEST ] (Git)
           ↓
       [ REVIEWER ] (Analyze Code)
           ↓
       (Are there issues?)
       ↙           ↘
    [ YES ]       [ NO ]
      ↓             ↓
   [ CHANGES ]  [ APPROVAL / MERGE ]
```

---

# Common Beginner Mistakes

1.  **Merging Without Approval:** Never merge your own code until someone else has reviewed it!
2.  **Getting Defensive:** Arguing with reviewers instead of listening to their feedback.
3.  **Ignoring the Style Guide:** Reviewers shouldn't have to fix your formatting (use [Prettier](formatting-and-style.md) for that!).
4.  **Not Asking for Clarification:** If you don't understand a reviewer's comment, ask!

---

# Advice from Senior Developers

- **Review Your Own Code First:** Before you ask someone else to review it, read it yourself one more time. You'll often find a typo or a noise comment you forgot to delete.
- **Keep it Small:** Don't send a 1,000-line Pull Request. It's much easier for someone to review 50-100 lines thoroughly.
- **Learn the "Nit":** If a reviewer starts a comment with "Nit:", it means "this is a small stylistic choice, not a critical bug." You can choose whether to change it or not.

---

# Next Lesson

See how all these principles work in practice:

➡ **[Real-World Code Examples](real-world-code-examples.md)**
