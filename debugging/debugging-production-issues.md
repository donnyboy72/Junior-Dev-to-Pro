# Debugging Production Issues

"Production" is the live environment where real users interact with your app. Debugging in production is the most stressful part of a developer's job because **the stakes are high.**

When something is broken in production, you can't just "pause the program" or add a million print statements.

---

# Why Production is Different from "Local"

### 1. You Don't Have a Debugger
You can't use a step-by-step debugger on a live server without pausing the app for *all* users.

### 2. You Have Real Traffic
Bugs might only happen when 1,000 people are using the app at the same time.

### 3. The Data is Different
The production database has millions of real records, while your local database only has three test records.

---

# The Production Debugging Process

### 1. Stay Calm
The site is down. Your boss is looking over your shoulder. But you must stay calm and follow your systematic process!

### 2. Check the Monitoring Tools
Use tools like **Datadog**, **New Relic**, or **AWS CloudWatch** to see:
- Is the CPU spiking?
- Are we running out of memory?
- Are we seeing a spike in `500` error codes?

### 3. Analyze the Logs
Check your centralized logging tool (like **Logstash** or **Splunk**). Look for error messages and stack traces from the last 10 minutes.

### 4. Reproduce the Issue (Safely!)
Try to reproduce the bug in a "Staging" environment (a copy of production) so you don't break things further.

---

# Tool: Sentry (Error Tracking)

Sentry is a tool that "listens" for crashes in production and emails you the full stack trace and user context when an error occurs.

```text
    [ SENTRY ALERT ]
    - Error: TypeError: cannot read 'email' of null
    - User: user_id=123 (Firefox/Mac)
    - File: auth.js, line 5
    - View Stack Trace: [Link]
```

---

# Common Production Problems

### 1. The "Only Happens in Prod" Bug
A bug that you can't see locally. This is often caused by different "Environment Variables" or a different database version in production.

### 2. Out of Memory (OOM)
The server runs out of RAM and the operating system kills the process.
**The Debugging:** Check your monitoring graphs for a steady climb in memory usage.

### 3. Third-Party Service Down
Your app crashes because the "Stripe" or "Twilio" API is having an outage.
**The Debugging:** Always check the "Status Page" of your third-party services.

---

# Real-World Scenario: The "Nightly Crash" Bug

**The Problem:** Every night at 3:00 AM, the app becomes unresponsive for 5 minutes.

**The Debugging:**
1. Check the **Monitoring Tools**. You see a massive CPU spike at 3:00 AM.
2. Check the **Logs**. You see a message: `Starting nightly backup job...`
3. Check the **Database**. You see that the backup job is locking the entire `users` table, so no one can log in.

**The Fix:** Update the backup job to use a "Read Replica" instead of the main production database.

---

# Common Beginner Mistakes

- **Testing "Fixes" in Production:** Never push a "guess" to production! Always verify the fix in a safe environment first.
- **Not Having Enough Logs:** If you don't log enough information, you'll have no idea what happened when a crash occurs in production.
- **Forgetting about "Permissions":** A bug that only happens in production is often because the production server doesn't have "permission" to read a specific file or talk to a specific database.

---

# Advice for Beginners

- **Learn to Read the Dashboard:** Spend time looking at your company's monitoring dashboards *before* there's a problem, so you know what "normal" looks like.
- **Use "Rollbacks":** If you push new code and the site breaks, don't try to fix it while it's broken. **Roll back** to the previous working version first, then fix the bug locally.
- **Logs are Your Eyes and Ears.**

---

# Next Lesson

Now let's look at the tools you'll use to solve these problems:

➡ **[Common Debugging Tools](common-debugging-tools.md)**
