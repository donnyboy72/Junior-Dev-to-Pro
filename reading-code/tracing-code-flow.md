---
layout: default
title: Tracing Code Flow
---

# Tracing Code Flow: From UI to DB

The most important part of reading code is understanding how data moves through the system. This is called "tracing."

### The Request Lifecycle

```text
    1. USER INTERACTION
       [ Login Button ] Clicked!
             |
    2. FRONTEND EVENT HANDLER
       (e.g., handleSubmit in Auth.tsx)
             |
    3. API CALL (HTTP Request)
       POST /api/login { username, password }
             |
    4. BACKEND ROUTER
       (e.g., router.post('/login') in server.js)
             |
    5. CONTROLLER/SERVICE LOGIC
       (e.g., AuthService.login())
             |
    6. DATABASE QUERY
       SELECT * FROM users WHERE email = ...
             |
    7. RESPONSE SENT BACK
       200 OK { token: "..." }
```

---

### Step-by-Step: Tracing a Feature

1.  **Start at the UI:** Find the button or form in the frontend code.
2.  **Find the Event Handler:** What function is called when you click it? (e.g., `onClick`, `onSubmit`).
3.  **Find the API Call:** Look for a `fetch()`, `axios.post()`, or `service.call()`.
4.  **Find the Backend Route:** Open your backend code and search for the URL (e.g., `/api/login`).
5.  **Find the Logic:** Follow the route to the function it calls (e.g., `authController.login`).
6.  **Find the Data Access:** Where does it talk to the database? (e.g., `db.query()`, `User.find()`).

---

### Practical Strategy: Search Everywhere
Don't be afraid to use the global search (`Ctrl + Shift + F` or `Cmd + Shift + F`) in your IDE.

- **Example:** Search for the string "Login" to find the button.
- **Example:** Search for the URL "/api/v1/users" to find the backend route.
- **Example:** Search for the function name `createUser` to find where it's defined.

---

### Real-World Example: Fixing a Data Bug
If a user's name is being saved incorrectly:
1. Trace from the input field in the UI.
2. See what data is being sent in the API call.
3. See how the backend handles that data.
4. Check the database query.
**Where does the name change? That's your bug.**

---

### Mental Model: The Water Pipe
Think of code like a series of pipes. Data (water) flows from the UI (the faucet) through various filters (functions) until it reach the database (the tank). If the water is dirty at the end, you have to trace back through the pipes to find where the dirt got in.

---

### Common Mistake: "The Magic Jump"
Don't assume you know what a function does based on its name. If you're tracing, **actually go to the definition** of the function to be sure.

[Next: Reading Functions and Classes](reading-functions-and-classes.md)
