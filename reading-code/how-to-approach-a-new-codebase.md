---
layout: default
title: How to Approach a New Codebase
---

# Your First 24 Hours: Approaching a New Codebase

Walking into a 100,000-line codebase is like walking into a city for the first time. You don't need to know every street; you just need to know the major landmarks.

### Step 1: Run the App
**Stop reading code!** The first thing you should do is try to run the application locally.

1.  Check `README.md` for setup steps.
2.  Install dependencies (e.g., `npm install`, `pip install -r requirements.txt`).
3.  Fix environment variables (e.g., `.env.example` -> `.env`).
4.  Run it (`npm start`, `python manage.py runserver`).

**Why?** Understanding the app from a user's perspective gives you a mental map of what the code is *trying* to do.

---

### Step 2: Find the Entry Points
Every app starts somewhere.

*   **Frontend (Web):** Look for `index.html`, `main.ts`, or `App.tsx`.
*   **Backend (API):** Look for `server.js`, `app.py`, `main.go`, or `routes/`.
*   **CLI Tools:** Look for `main()` or `cmd/`.

```text
    App Entry Point (e.g., main.js)
        |
        +-- Configuration (env, DB setup)
        |
        +-- The Router (maps URLs to code)
              |
              +-- View/Controller (where the logic lives)
```

---

### Step 3: Follow the "Golden Path"
Choose a simple feature, like a login or a button click, and follow it through the code.

1.  **Start at the UI:** Find the code for that button.
2.  **Find the Event Handler:** What happens when it's clicked?
3.  **Trace the API Call:** What URL does it hit?
4.  **Find the Backend Route:** Where does that URL go in the server code?
5.  **See the Database Change:** How is the data stored?

---

### Practical Strategy: The "Read-Only" Day
For your first few hours, **don't try to change anything.** Just browse.

- Open a file.
- Read the imports.
- Read the function names.
- Close the file.
- Repeat.

### Mental Model: The Tourist
When you visit a new city, you don't start by rebuilding the roads. You take a bus tour, look at the big buildings, and figure out where the grocery store is. Treat code the same way.

---

### Common Mistake: "The Deep Dive Trap"
Don't spend 2 hours reading a 500-line utility function for "formatting dates" on your first day. It's just a helper. **Focus on the core flow first.**

[Next: Understanding Project Structure](understanding-project-structure.md)
