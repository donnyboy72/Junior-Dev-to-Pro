---
layout: default
title: Debugging Performance Issues
---

# Debugging Performance Issues

Performance issues are bugs that make your app "slow" or "hang." They are often harder to find than a crash because the code is "running," just not efficiently.

---

# Why is my App Slow?

Performance problems usually boil down to three things:
1. **CPU:** The computer is working too hard (e.g., a massive loop).
2. **Memory:** The computer is running out of space (e.g., a "memory leak").
3. **Wait Time:** The computer is waiting for something else (e.g., a database query or a network request).

---

# The Performance Debugging Process

### 1. Identify the Bottleneck
Use a "Profiler" tool to see exactly which function is taking the most time.

### 2. Check the "Wait Time"
Is your app waiting on the database? Or on another API? Use the **Network Tab** in your browser to see how long each request takes.

### 3. Look for "N+1" Queries
This is the most common performance bug in junior-level apps. (Check the [Databases](debugging-databases.md) lesson for more on this!)

---

# Tool: Browser Performance Profiler

In Chrome DevTools, the "Performance" tab allows you to record a few seconds of your app's execution and see exactly where the CPU is spending its time.

```text
    [ PERFORMANCE FLAME GRAPH ]
    | 0ms | 100ms | 200ms | 300ms |
    |-----|-------|-------|-------|
    | renderUI()  |       |       |
    |   ↓         |       |       |
    |  calculateSum() (TOO LONG!) |
```

---

# Common Performance Bugs

### 1. The Infinite Loop
A loop that never finishes, causing the app to freeze and the CPU to hit 100%.
**The Debugging:** Add a print statement inside your loops. If your console fills up with millions of lines, you have an infinite loop!

### 2. Memory Leaks
Creating variables in a loop but never letting them be deleted. Over time, the app uses more and more RAM until it crashes.
**The Debugging:** Check the "Memory" tab in your browser. If the memory usage line is going up like a mountain, you have a leak.

### 3. Unnecessary API Calls
Calling the same API 10 times instead of once and saving (caching) the result.
**The Debugging:** Check the "Network" tab. Do you see the same request repeating over and over?

---

# Real-World Scenario: The "Slow Search" Bug

**The Problem:** Searching for a user takes 5 seconds.

**The Debugging:**
1. Open the **Network Tab**.
2. Perform a search. You see the `/api/search` request takes 4.8 seconds.
3. Check the backend logs.
4. You see that the search is doing a `SELECT * FROM users` and then filtering in JavaScript.
5. The database has 1 million users.

**The Fix:** Update the SQL query to filter the data *in the database* using a `WHERE` clause and an **index**.

---

# Common Beginner Mistakes

- **Optimizing Too Early:** Don't worry about performance until you actually have a problem! (This is called "Premature Optimization.")
- **Ignoring the Database:** Beginners often focus on the "code," when 90% of performance problems are actually in the "database."
- **Not Testing with Real Data:** Your app will be fast with 10 users, but slow with 10,000. Always test with a realistic amount of data!

---

# Advice for Beginners

- **Use "console.time()" and "console.timeEnd()":** These are built-in tools in JavaScript that help you measure exactly how long a piece of code takes to run.
- **Learn about "Debouncing":** If your search is slow because it's running on every keypress, use a "debounce" function to only search once the user stops typing.
- **Check Your Images:** Sometimes a slow website is just because you're loading a 10MB image on a mobile device!

---

# Next Lesson

Now let's look at how to debug issues once your app is "live" and being used by real people:

➡ **[Debugging Production Issues](debugging-production-issues.md)**
