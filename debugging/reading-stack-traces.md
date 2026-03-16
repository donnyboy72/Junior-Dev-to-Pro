# Reading Stack Traces

A **Stack Trace** (or "Call Stack") is a report that shows the sequence of function calls that were active at the time your program crashed.

Think of it like a trail of breadcrumbs. It tells you exactly how the computer got to the line that caused the error.

---

# What is the "Stack"?

Imagine a stack of plates. When you call a function, you put a plate on the stack. When the function finishes, you take the plate off.

A stack trace shows you the stack of "plates" at the moment of the crash.

```text
       [ STACK TRACE ]
    (Most Recent Call)
    at login (auth.js:15:2)
    at handleRequest (api.js:42:1)
    at main (app.js:10:5)
    (Original Call)
```

In the example above:
1. `main` was called first (Line 10).
2. `main` then called `handleRequest` (Line 42).
3. `handleRequest` then called `login` (Line 15).
4. The error happened inside `login`.

---

# How to Read a Stack Trace

Stack traces are usually read from **top to bottom**.

- **The top line** is where the error actually happened.
- **The lines below it** are the functions that called the one at the top.

---

# Real-World Scenario: A "Null" Error

```text
TypeError: Cannot read property 'email' of null
    at getUserProfile (profile.js:5:22)
    at showDashboard (dashboard.js:12:1)
    at main (app.js:10:5)
```

### The Investigation:
1. The error says `Cannot read property 'email' of null`. This means we're trying to access `user.email`, but `user` is `null`.
2. The error happened on line 5 of `profile.js`.
3. How did we get there? We were inside `showDashboard` on line 12 of `dashboard.js`.
4. How did we get *there*? We were inside `main` on line 10 of `app.js`.

**The Fix:** Go to `profile.js:5` and see why the `user` object is `null`. Is the database query failing? Is the user ID wrong?

---

# Why Stack Traces are Important

### 1. Tracing the "Context"
Sometimes a function works fine in most cases, but crashes when called from a specific place. The stack trace tells you *exactly* which caller is passing the bad data.

### 2. Identifying Library Errors
If the top of your stack trace is a file like `node_modules/axios/lib/...`, don't look there first! Look down the list until you find the first file that **you** wrote. That's usually where the mistake is.

---

# Common Beginner Mistakes

- **Only looking at the first line:** The first line tells you *what*, but the rest of the stack tells you *how*.
- **Trying to "Fix" the library:** If an error is inside a library (like `React` or `Express`), it's almost always because you used the library incorrectly, not because the library itself has a bug. Look for the first line of *your* code in the stack!
- **Getting Overwhelmed by Long Stacks:** Some languages produce very long stack traces (50+ lines). Don't panic! Focus on the first 5-10 lines and look for your own file names.

---

# Advice for Beginners

- **Look for your filenames:** Scan the stack trace for names of files you created (e.g., `userController.js`, `app.py`).
- **Use "Clickable" Stacks:** Most modern IDEs (like VS Code) make stack traces clickable. Clicking a line in the terminal will take you directly to that line of code.
- **Top is the Crash, Bottom is the Start.**

---

# Next Lesson

Now that we can read the trail, let's learn how to leave our own clues:

➡ **[Debugging with Print Statements](debugging-with-print-statements.md)**
