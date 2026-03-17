---
layout: default
title: Common Debugging Tools
---

# Common Debugging Tools

Debugging is a lot easier when you have the right tools. Here is a list of the most common debugging tools used by professional developers every day.

---

# 1. IDE Debuggers
Built-in tools in your editor (VS Code, IntelliJ, etc.) that allow you to set breakpoints, step through code, and inspect variables.
- **Learn them if:** You're writing any kind of backend or desktop application.

---

# 2. Browser Developer Tools
Every modern browser (Chrome, Firefox, Safari) has a suite of tools built-in.
- **Console:** Where you see logs and errors.
- **Network Tab:** Where you see all API calls and image requests.
- **Sources/Debugger:** Where you set breakpoints in your frontend JavaScript.
- **Elements:** Where you see and edit your HTML/CSS in real-time.

---

# 3. Postman / Insomnia
Tools for testing and debugging API calls outside of your application code. They allow you to manually send requests and see the exact response.
- **Learn them if:** You're building or using an API.

---

# 4. Sentry / Bugsnag
Error tracking tools that "listen" for crashes in production and send you a detailed report when they happen.
- **Learn them if:** You have real users.

---

# 5. Datadog / New Relic
Performance monitoring tools that show you CPU, memory usage, and slow database queries across your entire system.
- **Learn them if:** Your app is slow.

---

# 6. DBeaver / TablePlus
Database GUI tools that allow you to see and search your data without writing complex SQL commands in the terminal.
- **Learn them if:** You're using a database.

---

# Comparison Table

| Tool | Purpose | Best For... |
|------|---------|-------------|
| **Debugger** | Pause and Inspect | Finding logical errors in code |
| **Network Tab** | Inspect API calls | Debugging connection issues |
| **Logs** | Record events over time | Debugging issues that already happened |
| **Postman** | Test API endpoints | Designing and testing APIs |
| **Sentry** | Alert on crashes | Fixing production bugs quickly |

---

# Real-World Scenario: The "Unknown Data" Bug

**The Problem:** Your frontend is showing "null" for a user's name.

**The Tools You Use:**
1. **Network Tab:** Check the API response. You see `{"name": null}`. The frontend is correct!
2. **Postman:** Call the API manually with the same user ID. You still see `null`. The bug is in the backend!
3. **IDE Debugger:** Place a breakpoint in the backend's `getUser()` function. You see that the database query is returning an object, but you're accidentally returning the wrong variable.

---

# Common Beginner Mistakes

- **Not Learning Your Tools:** Spending hours using `console.log()` because you're "too busy" to learn how to use a debugger.
- **Using Too Many Tools at Once:** Start with the simplest tool (like the Console) and only move to more complex tools if you need more information.
- **Thinking the Tool will "Fix" the Bug:** A tool only gives you *information*. You still have to use your brain to find and fix the bug!

---

# Advice for Beginners

- **Learn VS Code Debugger First:** It's the most versatile tool and works for many languages.
- **Bookmark the "Network" Tab:** You'll use it 50 times a day.
- **Keep Your Tools Open:** Always have your Developer Tools or your logs open while you're developing, so you see bugs as soon as they happen.

---

# Next Lesson

Finally, let's look at the mistakes you should avoid:

➡ **[Common Debugging Mistakes](common-debugging-mistakes.md)**
