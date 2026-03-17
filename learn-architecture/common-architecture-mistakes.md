---
layout: default
title: Common Architecture Mistakes
---

# Common Architecture Mistakes

As a junior developer, it's easy to focus on the details and miss the "big picture." This lesson covers the most common architectural mistakes and how to avoid them.

---

# Mistake 1: Tight Coupling

Tight coupling is when different parts of your system depend too much on each other. If you change a button's color and it breaks the database, you have tight coupling!

```text
       [ WRONG: Tight Coupling ]       [ RIGHT: Decoupled ]
    +---------------------------+    +-----------+   +-----------+
    |  UI   | Logic |  Database |    |    UI     | → |   Logic   |
    | (Everything mixed up)      |    +-----------+   +-----------+
    +---------------------------+          ↓               ↓
                                     +-----------+   +-----------+
                                     |  Service  | ← | Database  |
                                     +-----------+   +-----------+
```

**How to avoid it:** Use clear "interfaces" or "APIs" between your components.

---

# Mistake 2: Hardcoding Configuration

Putting secrets (like API keys), database URLs, or file paths directly in your code is a major mistake. It's insecure and makes it impossible to change between "Local," "Testing," and "Production."

**How to avoid it:** Use **Environment Variables** (like a `.env` file) for all configuration.

---

# Mistake 3: Ignoring the "Single Point of Failure"

Designing a system where one small part crashing takes down the whole app. For example, if your "Logging Service" is down and your app can't start because it can't find the logger.

**How to avoid it:** Make sure your app can still work (even if it's "degraded") if a non-essential service fails.

---

# Mistake 4: Premature Optimization

Spending weeks building a complex "Message Queue" or "Caching" system before you even have a single user.

**How to avoid it:** Build a "Minimum Viable Product" (MVP) first. Only add complex architecture when your app's performance *actually* requires it.

---

# Mistake 5: Not Understanding Data Flow

Writing code without knowing where the data is coming from or where it's going. This leads to redundant requests and slow applications.

**How to avoid it:** Always draw a quick diagram of how data travels through your app before you start coding!

---

# Final Conclusion

Software architecture is a journey. You don't need to know everything on day one. By understanding the core concepts:

1.  **Layers and Separation of Concerns**
2.  **API-First Design**
3.  **Client-Server Relationships**
4.  **Scaling and Resilience**

...you'll be better prepared to contribute to any codebase and grow into a senior developer.

---

# Ready to Learn More?

Go back to the module landing page to review anything you missed:

➡ **[Learn Architecture - Home](index.md)**
