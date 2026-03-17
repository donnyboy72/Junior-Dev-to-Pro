---
layout: default
title: Understanding Error Messages
---

# Understanding Error Messages

The first thing a beginner does when they see an error message is panic and close the terminal. But an error message is not a failure—it's a **clue**.

Learning to read and understand error messages is the single most important part of becoming a good debugger.

---

# How to Read an Error Message

An error message usually tells you three things:
1. **What happened** (The type of error).
2. **Where it happened** (The file and line number).
3. **Why it happened** (Additional context).

---

# Real-World Example: JavaScript Error

Look at this error message:
```text
ReferenceError: userName is not defined
    at loginUser (auth.js:15:5)
    at main (app.js:22:1)
```

### Breakdown:
- **ReferenceError:** The type of error (You're using a variable that doesn't exist).
- **userName is not defined:** What exactly went wrong.
- **auth.js:15:5:** Where it happened (File `auth.js`, line 15, character 5).

---

# Common Error Types (Across Languages)

You'll see these error types over and over:

### 1. TypeError (or NullPointerException)
You tried to do something with a variable that isn't the right type.
*Example:* `user.name.toUpperCase()` where `user.name` is actually `null`.

### 2. SyntaxError
You wrote code that doesn't follow the rules of the language.
*Example:* `if (true) { console.log("Hello" ` (missing closing brace).

### 3. ReferenceError
You tried to use a variable or function that hasn't been created yet.

---

# How to Investigate an Error

When you see an error message, follow these steps:

1. **Read the whole message:** Don't just look at the first line.
2. **Identify the "What":** What is the name of the error? (e.g., `TypeError`, `AttributeError`).
3. **Identify the "Where":** Look for the file name and line number in *your* code (not in library code).
4. **Google it!** If you don't understand the error, copy and paste the first line into Google. Thousands of other developers have probably seen it before!

---

# Common Beginner Mistakes

- **Not Reading the Message:** Just assuming "it's broken" without actually reading what the computer is telling you.
- **Assuming the Error is in a Library:** If you see an error in `node_modules` or a library, it's almost always because you passed the wrong data *into* that library.
- **Fixing the Wrong Line:** Sometimes an error on line 50 is caused by a mistake on line 45. Check the lines *around* the reported error!

---

# Advice for Beginners

- **Error messages are your friends.** They are trying to help you.
- **Copy and Paste:** When asking for help, always copy and paste the *full* error message, not just a screenshot of part of it.
- **Look for the "Caused by" line:** Some languages (like Java) show a long list of errors. Look for the "Caused by" at the bottom to find the real problem.

---

# Next Lesson

Now that we can read the first line of an error, let's learn how to trace the whole history of the crash:

➡ **[Reading Stack Traces](reading-stack-traces.md)**
