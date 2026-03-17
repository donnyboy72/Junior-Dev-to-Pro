---
layout: default
title: Common Debugging Mistakes
---

# Common Debugging Mistakes

Debugging is a skill that takes time to master. Every junior developer (and many senior developers!) makes these mistakes at some point.

Learning to avoid these traps will make you a much more efficient and effective debugger.

---

# Mistake 1: Guessing and "Trying Random Things"
This is the most common mistake. You change a line of code, refresh the page, see it's still broken, and change another line.
- **Why it's bad:** You're not learning *why* the bug exists. You might "fix" it by accident, but you won't know if you've created three new bugs in the process.
- **The Fix:** Follow a [Systematic Process](systematic-debugging-process.md). Always have a hypothesis before you change code!

---

# Mistake 2: Fixing the Symptom, Not the Root Cause
You see a `NullPointerException`, so you add an `if (x != null)` check to stop the crash.
- **Why it's bad:** You've stopped the crash, but you haven't fixed the reason *why* `x` was null. Now your app might have a logic error later on because the data is missing.
- **The Fix:** Find the "Source of Truth" for the data and fix the bug there.

---

# Mistake 3: Changing Too Many Things at Once
You change five different files to fix one bug.
- **Why it's bad:** If the bug goes away, you don't know which change actually fixed it. If the bug *doesn't* go away, you don't know if your changes made it worse!
- **The Fix:** Change **one thing at a time**. Test after every single change.

---

# Mistake 4: Assuming Your Assumptions are Correct
"The database query *must* be returning the right data."
- **Why it's bad:** Many bugs are hidden in the things you think "can't be wrong."
- **The Fix:** Trust, but verify. Use a print statement or debugger to *prove* that every assumption you have is correct.

---

# Mistake 5: Not Reading the Error Message
Just seeing "it's red" and assuming the code is broken.
- **Why it's bad:** The computer is telling you exactly what's wrong! Not reading it is like throwing away the map when you're lost.
- **The Fix:** Read the *whole* message. Look for filenames, line numbers, and error types.

---

# Mistake 6: Debugging While Tired
Staring at the same bug for 4 hours without taking a break.
- **Why it's bad:** Your brain stops being creative when it's tired. You'll keep making the same logical mistakes over and over.
- **The Fix:** Take a 15-minute walk. Drink some water. Talk to a "rubber duck." Often, the answer will come to you the moment you step away from the keyboard.

---

# Final Conclusion

Debugging is about **curiosity, patience, and system.**

1.  **Be Curious:** Why is the computer doing that?
2.  **Be Patient:** Every bug can be fixed. It just takes time and information.
3.  **Be Systematic:** Follow a process, use your tools, and prove your assumptions.

With these skills, you'll be able to solve any problem that comes your way!

---

# Ready to Learn More?

Go back to the module landing page to review anything you missed:

➡ **[Learn Debugging - Home](index.md)**
