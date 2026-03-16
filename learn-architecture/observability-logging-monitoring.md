# Observability: Logging & Monitoring

If your application is like a car, then **Observability** is the dashboard. Without it, you wouldn't know how fast you're going, if you're running out of gas, or if the engine is overheating until it's too late.

---

# What is Observability?

Observability is the ability to understand what's happening *inside* your application based on the data it produces. It's usually broken down into three "pillars":

1.  **Logging:** Recording individual events (e.g., "User 123 logged in").
2.  **Metrics:** Measuring things over time (e.g., "The average response time is 200ms").
3.  **Tracing:** Following a single request as it travels through your entire system.

---

# Architecture Diagram (Monitoring Pipeline)

Your app sends data to a central system that collects and displays it for you:

```text
       [ App Server 1 ]   [ App Server 2 ]
               ↓                 ↓
       [------- Data Collector (Logstash) -------]
                               ↓
       [                   Storage (Elasticsearch) ]
                               ↓
       [                   Dashboard (Grafana/Kibana) ]
```

---

# Why Observability Exists

### 1. Faster Troubleshooting
When a user says "the site is slow," you can look at your metrics to see exactly which service is causing the delay.

### 2. Proactive Alerting
You can set up alerts to tell you *before* your app crashes (e.g., "Send me a Slack message if the database is 90% full").

### 3. Understanding User Behavior
Logging helps you see which features are actually being used and which ones aren't.

---

# How Junior Developers Encounter This

- **`console.log()` vs. Logging Libraries:** Moving from simple logs to structured tools like **Winston (Node.js)** or **Logback (Java)**.
- **Log Levels:** Using `ERROR`, `WARN`, `INFO`, and `DEBUG` to organize your logs.
- **Monitoring Tools:** Using platforms like **Datadog**, **New Relic**, or **Sentry** to find bugs in production.

---

# Common Beginner Mistakes

### 1. "Silent" Errors
Catching an error but not logging it. If you do `try { ... } catch(e) { }`, the error disappears forever, and you'll never know why your app is broken!

### 2. Logging Too Much
If you log every single mouse click, your log storage will fill up in minutes and cost you a lot of money. Log only what you *need*.

### 3. Logging Sensitive Data
**NEVER** log passwords, credit card numbers, or API keys. If your logs are compromised, this data could be stolen!

---

# Real-World Example: Sentry

Sentry is a tool that captures "errors" in real-time. When a user experiences a crash on your website, Sentry records the exact line of code where the error happened, what the user was doing, and even which browser they were using. This allows you to fix the bug before anyone else notices!

---

# Next Lesson

Let's look at some common "blueprints" for entire systems:

➡ **[Common Architecture Patterns](common-architecture-patterns.md)**
