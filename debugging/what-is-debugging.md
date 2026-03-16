# What is Debugging?

Debugging is the process of finding and resolving "bugs"—errors or defects in a computer program that prevent it from working as intended.

---

# Where Did the Term "Bug" Come From?

In 1947, Grace Hopper, a pioneering computer scientist, found a literal moth stuck in a relay of the Harvard Mark II computer. She taped it into her logbook and noted it was the "first actual case of bug being found." While the term "bug" existed before this, it has since become the standard way we describe errors in software.

---

# The Debugging Loop

Debugging is an iterative process. It looks like this:

```text
       [ Start ]
           ↓
    (1) Observe Bug (Something is wrong)
           ↓
    (2) Reproduce Bug (Make it happen again)
           ↓
    (3) Isolate Bug (Where exactly is it?)
           ↓
    (4) Fix Bug (Change the code)
           ↓
    (5) Verify Fix (Is it actually fixed?)
           ↓
       [ Finish ]
```

---

# Types of Bugs You'll Encounter

As a junior developer, you'll mostly deal with three types of bugs:

### 1. Syntax Errors
Errors in the language of the code itself.
*Example:* Forgetting a semicolon in C++, or a colon in Python. Your code usually won't even start!

### 2. Runtime Errors (Crashes)
Errors that happen while the code is running.
*Example:* Trying to divide by zero or accessing a variable that doesn't exist.

### 3. Logic Errors
The hardest bugs to find! The code runs without crashing, but it doesn't do what you want.
*Example:* Adding two numbers instead of subtracting them.

---

# Why is Debugging Hard?

Debugging is hard because **computers do exactly what you tell them to do, not what you want them to do.** A bug is usually a mismatch between your *intent* and your *actual instructions*.

---

# Advice for Beginners

- **Don't Panic:** Everyone writes bugs. Even senior developers with 30 years of experience.
- **Be Curious:** Instead of being frustrated, be curious about *why* the computer is doing what it's doing.
- **Explain it Out Loud:** Sometimes just explaining the problem to a teammate (or a rubber duck!) will reveal the answer.

---

# Next Lesson

Learn how to talk back to your computer:

➡ **[Understanding Error Messages](understanding-error-messages.md)**
